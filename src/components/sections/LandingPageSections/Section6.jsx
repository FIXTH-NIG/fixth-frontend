import React from 'react'
import styled from "styled-components";
import dextopJohn from "../../../assets/Images/dextopJohn.svg"
import mobileJohn from "../../../assets/Images/mobileJohn.svg"
import greaterThan from "../../../assets/Icons/greaterThan.svg"
import { useScreenWidth } from '../../../utils/useSreenWidth';

export default function Section6() {
    const screenWidth = useScreenWidth();
     const johnImage = screenWidth > 700 ? dextopJohn : mobileJohn;
  return (
    <Section6Container>
        <h2 className="title">
            What People Are Saying About Us
        </h2>
        <BoxWrapper>
            <Group>
                <Div>
                    <TextWrapper>Hi.</TextWrapper>

                    <Paragraph>
                    I&apos;m John Doe, a Civil Engineering, UNN &apos;24 – Now Site
                    Engineer at Setraco Construction &quot;I had applied to over 60
                    jobs on LinkedIin with almost zero replies. <br />
                    <br />I joined Project X in October 2025, completed my profile
                    with my final-year bridge project, and within 12 days Setraco
                    messaged me directly. Two weeks later I had an interview, and by
                    November I was on site in Enugu with full accommodation and
                    feeding.
                    </Paragraph>
                    <Frame2>
                        <TextWrapper2>Next</TextWrapper2>
                        <img src={greaterThan} alt="Next" />
                    </Frame2>
                </Div>
                <img src={johnImage} alt="John civil enginnering" />
            </Group>
        </BoxWrapper>
    </Section6Container>
  )
}

const Section6Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-bottom: 100px;
    @media (max-width: 700px) {
        gap: 20px; 
        margin-bottom: 60px;
    }
    h2{
        font-size: 48px;
        margin: 0%;
        padding: 0%;
        letter-spacing: -2px;
        text-align: center;
        font-weight: 500;
        @media (max-width: 700px){
            font-size: 32px;
            padding: 0 20px 0 20px;
        }
    }
`

const BoxWrapper = styled.div`
  height: 488px;
  width: 1230px;
  padding: 0 16px 0 16px;
    @media (max-width: 1300px) {
        width: fit-content;
        height: auto;
    }
`;

const Group = styled.div`
  display: flex;
  gap: 177.9px;
  height: 488px;
  width: 100%;        /* let it fill BoxWrapper */
    @media (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
        height: fit-content;
    }
`;


const Div = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 448px;
    @media (max-width: 1300px) {
        width: 100%;
    }
`;

const TextWrapper = styled.div`
  align-self: stretch;
  color: var(--black);
  font-family: "Inter-Medium", Helvetica;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -2.00px;
  line-height: normal;
  margin-top: -1.00px;
  position: relative;
  @media (max-width: 700px) {
    font-size: 32px;
  }
`;

const Paragraph = styled.p`
  align-self: stretch;
  color: var(--black);
  font-family: "Inter-Medium", Helvetica;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 26px;
  position: relative;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Frame2 = styled.div`
  -webkit-backdrop-filter: blur(10px) brightness(100%);
  backdrop-filter: blur(10px) brightness(100%);
  background-color: #1f1f1f;
  border-color: var(--black);
  border-radius: 40px;
  height: 48px;
  width: 127px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 700px) {
    align-self: center;
  }
`;

const TextWrapper2 = styled.div`
  color: var(--background-white);
  font-family: "Inter-Medium", Helvetica;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  line-height: normal;
  white-space: nowrap;
`;