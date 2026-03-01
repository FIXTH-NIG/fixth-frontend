import React from 'react'
import styled from 'styled-components'
import {useScreenWidth} from "../utils/useSreenWidth"
import Footer from "../components/layout/Footer"
import AuthHeader from '../components/sections/AuthPageSections/AuthHeader'
import ChooseUserType from '../components/sections/AuthPageSections/ChooseUserType'
import SignUpForm from '../components/sections/AuthPageSections/SignUpForm'
import VerificationCode from '../components/sections/AuthPageSections/VericationCode'
import AddExperience from '../components/sections/AuthPageSections/AddExperience'
import EditProfile from '../components/sections/AuthPageSections/EditProfile'

export default function AuthPage() {
    const screenWidth = useScreenWidth()
  return (
    <>
        <AuthHeader/>
        <MainSection>
            <EditProfile/>
        </MainSection>
        {
            screenWidth > 700 ?  <Footer/> : null
        }
    </>
  )
}

const MainSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`
