import React from 'react'
import styled from 'styled-components'

export default function Section5() {
  return (
    <Section5Container>
        <h2 className="title">
            Who we are
        </h2>
        <div className="main">
            Fixth connects Nigerian engineers directly to real, 
            verified jobs at top companies. Since launching in 2025,<em>we have grown with over hundreds
             of successful placements
              ranging from internships to full-time roles. 
              This progress means companies message you directly
               without ghosting or endless waiting, your profile 
               showcases your actual projects and skills so you stand out instantly.
               </em>
        </div>
    </Section5Container>
  )
}

const Section5Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-bottom: 100px;
    @media (max-width: 700px) {
        gap: 20px;
        margin-bottom: 80px;
    }
    h2{
        margin: 0;
        padding: 0;
        font-size: 48px;
        letter-spacing: -2px;
        font-weight: 500;
        @media (max-width: 700px) {
            font-size: 32px;
        }
    }
    .main{
        padding: 0 120px 0 120px;
        font-size: 40px;
        text-align: center;
        font-weight: 500;
        em{
            color: var(--grey);
        }
        @media (max-width: 700px) {
            font-size: 24px;
            padding: 0 16px 0 16px;
        }
    }
`

