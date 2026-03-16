import React from 'react'
import Header from '../components/layout/Header'
import styled from 'styled-components'
import Section1 from '../components/sections/LandingPageSections/Section1'
import Section2 from '../components/sections/LandingPageSections/Section2'
import Section3 from '../components/sections/LandingPageSections/Section3'
import Section4 from '../components/sections/LandingPageSections/Section4'
import Section5 from '../components/sections/LandingPageSections/Section5'
import Section6 from '../components/sections/LandingPageSections/Section6'
import Section7 from '../components/sections/LandingPageSections/Section7'
import Section8 from '../components/sections/LandingPageSections/Section8'
import Footer from '../components/layout/Footer'

export default function LandingPage() {
  return (
        <>
            <Header />
            <LandingPageContainer>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </LandingPageContainer>
            <Footer/>
        </>  
  )
}

const LandingPageContainer = styled.div`
    width: 100%;
`
