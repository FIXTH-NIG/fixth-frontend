import React from 'react'
import styled from 'styled-components'
import caseIcon from "../../../assets/icons/case.svg"
import userIcon from "../../../assets/icons/user.svg"

export default function ChooseUserType() {
    return (
        <ChooseUserTypeContainer>
            <h1 className="title">
                Join as a student or company
            </h1>
            <div className="selectorContainer">
                <div className="selector forStudent">
                    <div className="sec">
                        <img src={userIcon} alt="Brief case icon" />
                        <input type="radio" value={"student"} name='forStudent'/>
                    </div>
                    <span>I’m a student looking for a job</span>
                </div>
                <div className="selector forCompany">
                    <div className="sec">
                        <img src={caseIcon} alt="Brief case icon" />
                        <input type="radio" value={"company"} name='forCompany'/>
                    </div>
                    <span>I’m a company looking for talents</span>
                </div>
            </div>
            <div className='container2'>
                <button>
                    Apply as a company
                </button>
                <div>Already have an account? <a href="">Sign in</a></div>
            </div>
        </ChooseUserTypeContainer>
    )
}

const ChooseUserTypeContainer = styled.section`
    width: 504px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    @media (max-width: 700px){
        width: 100%;
        padding: 16px;
    }
    .title{
        text-align: center;
        font-size: 24px;
        letter-spacing: -1px;
        margin: 0%;
        padding: 0%;
        @media (max-width: 700px){
            font-size: 20px;
            font-weight: 500;
        }
    }
    .selectorContainer{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 700px){
            flex-direction: column;
            gap: 12px;
        }
        .selector{
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 23px;
            border: 2px solid var(--light-ash);
            width: 47%;
            border-radius: 20px;
            @media (max-width: 700px){
                width: 100%;
            }
            .sec{
                display: flex;
                align-items: center;
                justify-content: space-between;
                input{
                    background-color: var(--blue);
                }
            }
            span{
                font-size: 18px;
                letter-spacing: -1px;
            }
        }
    }
    .container2{
        display: flex;
        gap: 14px;
        flex-direction: column;
        align-items: center;
        width: 100%;
        button{
            width: 280px;
            height: 28px;
            background-color: var(--blue);
            color: var(--background-white);
            font-size: 12px;
            border-radius: 10px;
            @media (max-width: 700px){
                width: 100%;
                height: 35px;
            }
        }
        div{
            font-size: 12px;
            color: var(--grey);
            a{
                color: var(--black);
            }
        }
    }
`
