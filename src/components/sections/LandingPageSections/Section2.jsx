import React from 'react'
import styled from 'styled-components'
import toyota from "../../../assets/Images/toyota.svg"
import shell from "../../../assets/Images/shell.svg"
import dangote from "../../../assets/Images/dangote.svg"
import nestle from "../../../assets/Images/nestle.svg"
import total from "../../../assets/Images/total.svg"
import mtn from "../../../assets/Images/mtn.svg"

export default function Section2() {
  return (
    <Section2Container>
        <span className="heading">Trusted by:</span>
        <div className="companiesLogoSection">
            <img src={mtn} alt="mtn logo" />
            <img src={total} alt="total logo" />
            <img src={toyota} alt="toyota logo" />
            <img src={shell} alt="shell logo" />
            <img src={dangote} alt="dangote logo" />
            <img src={nestle} alt="nestle logo" />
        </div>
    </Section2Container>
  )
}

const Section2Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
    padding: 0 clamp(16px, 8vw, 121px) 47px;
    margin-bottom: 100px;
    background: linear-gradient(to right,
        rgba(51, 51, 51, 0) 0%,        /* left edge fades out */
        rgba(51, 51, 51, 0) 100%       /* right edge fades out */
    );
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    background-clip: padding-box;
    @media (max-width: 1300px) {
        display: none;
    }
    .heading{
        font-size: 14px;
        font-weight: 500;
    }
    .companiesLogoSection{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        box-shadow: 
            inset 40px 0 20px -40px rgba(234, 234, 234, 0.3),
            inset -40px 0 20px -40px rgba(230, 230, 230, 0.3);
        }
`
