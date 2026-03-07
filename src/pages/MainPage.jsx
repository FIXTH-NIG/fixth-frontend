import styled from "styled-components"
import Sidebar from "../components/sections/MainPageSections/Sidebar"
import ProfileSidebar from "../components/sections/MainPageSections/ProfileSideBar"
import PostAndArticle from "../components/sections/MainPageSections/PostAndArticle"
import { useScreenWidth } from "../utils/useSreenWidth"
import homeIcon from "../assets/Icons/homeIcon.svg"
import caseIcon from "../assets/Icons/case.svg"
import inboxIcon from "../assets/Icons/inboxIcon.svg"
import dummyPP from "../assets/Images/dummyProfile.png"

export default function MainPage() {
    const screenWidth = useScreenWidth()
    return (
        <MainPageContainer>
            {
                screenWidth < 850
                    ?
                    <MobileMenu>
                        <div className="menu">
                            <img src={homeIcon} alt="home tab" width={"14px"} height={"16px"} />
                            <span>Home</span>
                        </div>
                        <div className="menu">
                            <img src={caseIcon} alt="jobs tab" width={"18px"} height={"16px"} />
                            <span>Jobs</span>
                        </div>
                        <div className="menu">
                            <img src={inboxIcon} alt="inbox tab" width={"18px"} height={"14px"} />
                            <span>Jobs</span>
                        </div>
                        <div className="menu">
                            <img src={dummyPP} alt="profile tab" width={"22px"} height={"22px"} />
                            <span>Profile</span>
                        </div>
                    </MobileMenu>
                    :
                    null
            }
            <Sidebar />
            <MidSection>
                <PostAndArticle />
            </MidSection>
            <RightSection>
                <ProfileSidebar />
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

const MobileMenu = styled.section`
    height: 69px;
    background-color: var(--white);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    @media (max-width: 410px){
        gap: 60px;
    }
    .menu{
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;
        align-items: center;
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

