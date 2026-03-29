import { useMemo } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import styled from "styled-components"
import Sidebar from "../components/sections/MainPageSections/Sidebar"
import ProfileSidebar from "../components/sections/MainPageSections/ProfileSideBar"
import { useIsMobile } from "../hooks"
import MobileMenu from "../components/sections/MainPageSections/MobileMenu"
import JobsDescription from "../components/sections/MainPageSections/jobs/jobsDescription"
import MessageThread from "../components/sections/MainPageSections/inbox/MessageThread"
import { jobsData } from "../data/mock"
import { inboxThreads } from "../data/mock"
import { ROUTES } from "../routes"
import { BREAKPOINTS } from "../constants/breakpoints"

export default function MainPage() {
    const isMobile = useIsMobile(BREAKPOINTS.TABLET)
    const isTabletLarge = useIsMobile(BREAKPOINTS.TABLET_LARGE)
    const location = useLocation()
    const { jobId, threadId } = useParams()

    const selectedJob = useMemo(
        () => jobsData.find((job) => job.id === jobId) || null,
        [jobId]
    )

    const selectedThread = useMemo(
        () => inboxThreads.find((thread) => thread.id === threadId) || null,
        [threadId]
    )

    const isJobsTab = location.pathname.startsWith(ROUTES.appJobs)
    const isInboxTab = location.pathname.startsWith(ROUTES.appInbox)
    const isNotificationsTab = location.pathname.startsWith(ROUTES.appNotifications)

    const hasJobDetail = Boolean(selectedJob)
    const hasThreadDetail = Boolean(selectedThread)

    const shouldHideMobileMenu =
        isMobile &&
        (isNotificationsTab ||
            (isJobsTab && hasJobDetail) ||
            (isInboxTab && hasThreadDetail))

    return (
        <MainPageContainer>
            {
                isTabletLarge && !shouldHideMobileMenu
                    ?
                    <MobileMenu />
                    :
                    null
            }
            <Sidebar />
            <MidSection>
                <Outlet />
            </MidSection>
            <RightSection>
                {isJobsTab && hasJobDetail && !isMobile ? (
                    <JobsDescription job={selectedJob} />
                ) : isInboxTab && hasThreadDetail && !isMobile ? (
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
    height: 100dvh;
    overflow: hidden;
    align-items: flex-start;
    @media (max-width: 850px){
    }
    @media (max-width: 480px){
        gap: unset;
        padding: 0%;
        padding-top: 12px;
    }
`

const MidSection = styled.section`
    width: 485px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
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
