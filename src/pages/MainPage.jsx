import styled from "styled-components"
import Sidebar from "../components/sections/MainPageSections/Sidebar"
import ProfileSidebar from "../components/sections/MainPageSections/ProfileSideBar"
import PostAndArticle from "../components/sections/MainPageSections/PostAndArticle"

export default function MainPage() {
  return (
    <MainPageContainer>
        <Sidebar/>
        <MidSection>
            <PostAndArticle/>
        </MidSection>
        <RightSection>
            <ProfileSidebar/>
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
`
const MidSection = styled.section`
    width: 485px;
`
const RightSection = styled.section`
    width: fit-content;
`

