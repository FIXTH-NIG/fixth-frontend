import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { useIsMobile } from "../hooks"
import { BREAKPOINTS } from "../constants"
import Footer from "../components/layout/Footer"
import AuthHeader from '../components/sections/AuthPageSections/AuthHeader'

export default function AuthPage() {
    const isMobile = useIsMobile(BREAKPOINTS.MOBILE)

  return (
    <>
        <AuthHeader/>
        <MainSection>
            <Outlet />
        </MainSection>
                {!isMobile ? <Footer /> : null}
    </>
  )
}

const MainSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`
