import { useMemo, useState } from "react"
import styled from "styled-components"
import Sidebar from "../components/sections/MainPageSections/Sidebar"
import ProfileSidebar from "../components/sections/MainPageSections/ProfileSideBar"
import PostAndArticle from "../components/sections/MainPageSections/PostAndArticle"
import { useScreenWidth } from "../utils/useSreenWidth"
import MobileMenu from "../components/sections/MainPageSections/MobileMenu"
import SectionPlaceholder from "../components/sections/MainPageSections/SectionPlaceholder"
import JobsListPanel from "../components/sections/MainPageSections/jobs/JobsListPanel"
import JobsDescription from "../components/sections/MainPageSections/jobs/jobsDescription"
import ProfileTab from "../components/sections/MainPageSections/ProfileTab"
import NotificationsTab from "../components/sections/MainPageSections/NotificationsTab"
import InboxListPanel from "../components/sections/MainPageSections/inbox/InboxListPanel"
import MessageThread from "../components/sections/MainPageSections/inbox/MessageThread"
import { TAB_IDS } from "../components/sections/MainPageSections/navigationTabs"
import { jobsData } from "../components/sections/MainPageSections/jobs/jobsData"
import { inboxThreads } from "../components/sections/MainPageSections/inbox/inboxData"

export default function MainPage() {
    const screenWidth = useScreenWidth()
    const isMobile = screenWidth < 750
    const [activeTab, setActiveTab] = useState(TAB_IDS.home)
    const [selectedJobId, setSelectedJobId] = useState(null)
    const [showMobileJobDetail, setShowMobileJobDetail] = useState(false)
    const [showDesktopJobDetail, setShowDesktopJobDetail] = useState(false)
    const [selectedThreadId, setSelectedThreadId] = useState(null)
    const [showMobileThread, setShowMobileThread] = useState(false)
    const [showDesktopThread, setShowDesktopThread] = useState(false)

    const selectedJob = useMemo(
        () => jobsData.find((job) => job.id === selectedJobId) || null,
        [selectedJobId]
    )

    const selectedThread = useMemo(
        () => inboxThreads.find((thread) => thread.id === selectedThreadId) || null,
        [selectedThreadId]
    )

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
        if (tabId !== TAB_IDS.jobs) {
            setShowMobileJobDetail(false)
            setShowDesktopJobDetail(false)
        }
        if (tabId !== TAB_IDS.inbox) {
            setShowMobileThread(false)
            setShowDesktopThread(false)
        }
    }

    const handleSelectJob = (jobId) => {
        setSelectedJobId(jobId)
        if (isMobile) {
            setShowMobileJobDetail(true)
            return
        }
        setShowDesktopJobDetail(true)
    }

    const handleSelectThread = (threadId) => {
        setSelectedThreadId(threadId)
        if (isMobile) {
            setShowMobileThread(true)
            return
        }
        setShowDesktopThread(true)
    }

    const renderMainContent = () => {
        switch (activeTab) {
            case TAB_IDS.home:
                return <PostAndArticle />
            case TAB_IDS.jobs:
                if (isMobile && showMobileJobDetail) {
                    return <JobsDescription job={selectedJob} isMobile onBack={() => setShowMobileJobDetail(false)} />
                }
                return (
                    <JobsListPanel
                        jobs={jobsData}
                        selectedJobId={selectedJobId}
                        onSelectJob={handleSelectJob}
                    />
                )
            case TAB_IDS.notifications:
                return <NotificationsTab />
            case TAB_IDS.inbox:
                if (isMobile && showMobileThread) {
                    return (
                        <MessageThread
                            thread={selectedThread}
                            isMobile
                            onBack={() => setShowMobileThread(false)}
                        />
                    )
                }
                return (
                    <InboxListPanel
                        activeThreadId={selectedThreadId}
                        onSelectThread={handleSelectThread}
                    />
                )
            case TAB_IDS.profile:
                return <ProfileTab />
            case TAB_IDS.settings:
                return <SectionPlaceholder title="Settings" />
            default:
                return <PostAndArticle />
        }
    }
    return (
        <MainPageContainer>
            {
                screenWidth < 850
                    ?
                    <MobileMenu activeTab={activeTab} onTabChange={handleTabChange} />
                    :
                    null
            }
            <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
            <MidSection>
                {renderMainContent()}
            </MidSection>
            <RightSection>
                {activeTab === TAB_IDS.jobs && !isMobile && showDesktopJobDetail ? (
                    <JobsDescription job={selectedJob} />
                ) : activeTab === TAB_IDS.inbox && !isMobile && showDesktopThread ? (
                    <MessageThread thread={selectedThread} />
                ) : (
                    <ProfileSidebar />
                )}
            </RightSection>
        </MainPageContainer>
    )
}

const MainPageContainer = styled.div`
    width: 100%;
    display: flex;
    padding-top: 12px;
    gap: 12px;
    justify-content: center;
    padding: 30px;
    position: relative;
    @media (max-width: 480px){
        gap: unset;
        padding: 0%;
        padding-top: 12px;
    }
`

const MidSection = styled.section`
    width: 485px;
    @media (max-width: 480px){
        width: 100%;
    }
`
const RightSection = styled.section`
    width: fit-content;
    @media (max-width: 750px){
        display: none;
    }
`

