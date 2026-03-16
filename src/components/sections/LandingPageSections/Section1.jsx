import React from 'react'
import styled from 'styled-components'
import PeopleFacesCluster from "../../../assets/Images/PeopleFacesCluster.svg"
import turnado from "../../../assets/Icons/turnado.svg"
import spiralArrow from "../../../assets/Icons/spiralArrow.svg"
import pcGuy from "../../../assets/Images/pcGuy.svg"
import toolBox from "../../../assets/Icons/blueToolBox.svg"

export default function Section1() {
  return (   
    <Section1Container>
        <div className="informationSection">
            <div className="activeUsers">
                <span></span>
                <img src={PeopleFacesCluster} alt="People Faces Cluster" />
                <span>+28K active users</span>
            </div>
            <span className="para1">
                <span className="heading">
                    Real Engineering <span className="inlineIcon"><img src={toolBox} alt="blue tool box" /></span> Jobs
                </span><br />
                 That Actually Responds
            </span>
            <span className="para2">
                A trusted platform where Nigerians get access to verified engineering
                 jobs and internships where companies review applications, reply, and hire — not ghost you.
            </span>
            <div className="informationSectionInputSection">
                <img src={turnado} className='turnado' alt="turnado icon" width={"166px"} height={"18px"}/>
                <Frame />
                <img src={spiralArrow} className='spiralArrow' alt="spiral arrow icon" width={"45.5px"} height={"58px"} />
            </div>
        </div>
        <div className="imageSection">
            <img src={pcGuy} alt="a student searching for job on his laptop" height={"483px"} width={"607px"}/>
        </div>

    </Section1Container>
  )
}

const Section1Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 70px 0 100px 0;
    width: 100%;
    padding-inline: clamp(16px, 7vw, 105px);
    gap: clamp(24px, 4vw, 66px);
    @media (max-width: 1300px) {
        flex-direction: column;
        gap: 10px;
        padding-inline: 16px;
        margin: 40px 0 80px 0;
    }
    .imageSection{
        height: max-content;
        @media (max-width: 700px) {
            img{
                width: 303px;
                height: 260px;
                margin: 0 auto;
            }
        }
    }
    .informationSection{
        width: 590px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        @media (max-width: 1300px) {
            align-items: center;
            gap: 12px;
                width: 100%;
        }
        .activeUsers{
            display: flex;
            align-items: center;
            background-color: #d4dae2;
            width: fit-content;
            font-size: 14px;
            padding: 6px 8px;
            border-radius: 20px;
            font-weight: 500;
            gap: 4px;
            margin-bottom: 15px;
            :first-child{
                height: 4px;
                width: 4px;
                background-color: var(--blue);
                border-radius: 50%;
            }
            @media (max-width: 700px) {
                font-size: 12px;
            }
        }
        .para1{
            font-size: 43px;
            font-weight: 550;
            line-height: 40px;
            letter-spacing: -0.5px;
            transform: scaleY(1.25);
            .heading{ /* ensure heading stays inline */
                display: inline;
            }
            .inlineIcon img{
                display: inline-block;
                vertical-align: middle;
            }
            img{
                @media (max-width: 1300px) {
                    width: 28px;
                    height: 30px;
                    margin: 0%;
                }

            }
            @media (max-width: 700px) {
                font-size: 32px;
                line-height: 40px;
                text-align: center;
            }
            @media (max-width: 420px) {
                font-size: 26px;
                line-height: 35px;
            }
        }
        .para2{
            font-size: 13px;
            line-height: 18px;
            margin-top: 10px;
            letter-spacing: -0.5px;
            color: var(--primary-grey);
            width: min(100%, 557px);
            @media (max-width: 1300px) {
                font-size: 12px;
                width: 100%;
                text-align: center;
            }
        }
        .informationSectionInputSection{
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            @media (max-width: 1300px) {
                align-items: center;
            }
            .turnado{
                align-self: center;
                margin-right: 0;
                @media (max-width: 1300px) {
                    margin-right: 0;
                }
            }
            .spiralArrow{
                align-self: flex-end;
                margin-right: 30px;
                @media (max-width: 1300px) {
                    display: none;
                }
            }
            
        }
    }
`

// Framed input with overlapping button (replicates pasted design)
const FrameWrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    height: 51px;
    justify-content: flex-start;
    padding: 4px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 12px;
    width: min(100%, 640px);
    @media (max-width: 1300px) {
        justify-content: center;
        width: 100%;
        margin-top: 20px;
    }
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const DivWrapper = styled.div`
    align-items: center;
    background-color: var(--blue);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--background-white, #fcfcfc);
    font-family: Inter;
    font-size: 13px;
    padding: 0 20px;
    width: 125px;
    height: 43px;
    z-index: 3;
    position: absolute;
    right: 40px;
    @media (max-width: 1300px) {
        position: relative;
        align-self: center;
        right: 0%;
    }
`;


const Div = styled.div`
    align-items: center;
    background-color: rgba(99,153,217,0.12);
    border-radius: 40px;
    display: flex;
    gap: 10px;
    padding: 12px 16px;
    position: relative;
    width: 480px;
    height: 51px;
    @media (max-width: 700px) {
       display: none;
    }
`;

const EmailInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    flex: 1 1 auto;
    font-size: 14px;
    color: var(--black, #111);
    padding: 6px 6px;
    &::placeholder {
        color: var(--black, #7f7f7f);
        font-weight: 500;
    }
`;

const Frame = () => {
    return (
        <FrameWrapper>
            <Div>
                <EmailInput placeholder="Enter your email" />
            </Div>
            <DivWrapper>
                Find real jobs
            </DivWrapper>
        </FrameWrapper>
    );
};
