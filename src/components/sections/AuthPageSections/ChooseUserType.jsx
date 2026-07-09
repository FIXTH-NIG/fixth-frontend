import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import caseIcon from "../../../assets/Icons/case.svg"
import userIcon from "../../../assets/Icons/user.svg"
import { ROUTES } from '../../../routes'
import { useAuth } from '../../../hooks'

export default function ChooseUserType() {
    const navigate = useNavigate()
    const { accountType, setAccountType } = useAuth()
    const [selectedType, setSelectedType] = useState(accountType || 'student')

    const handleContinue = () => {
        setAccountType(selectedType)
        navigate(ROUTES.signupSignUp)
    }

    useEffect(() => {
        if (!accountType) {
            setAccountType(selectedType)
        }
    }, [accountType, selectedType, setAccountType])

    return (
        <ChooseUserTypeContainer>
            <h1 className="title">
                Join as a student or company
            </h1>
            <div className="selectorContainer">
                <div className="selector forStudent">
                    <div className="sec">
                        <img src={userIcon} alt="Brief case icon" />
                        <input
                            type="radio"
                            value="student"
                            name='accountType'
                            checked={selectedType === 'student'}
                            onChange={() => setSelectedType('student')}
                        />
                    </div>
                    <span>I'm a student looking for a job</span>
                </div>
                <div className="selector forCompany">
                    <div className="sec">
                        <img src={caseIcon} alt="Brief case icon" />
                        <input
                            type="radio"
                            value="company"
                            name='accountType'
                            checked={selectedType === 'company'}
                            onChange={() => setSelectedType('company')}
                        />
                    </div>
                    <span>I'm a company looking for talents</span>
                </div>
            </div>
            <div className='container2'>
                <button type="button" onClick={handleContinue}>
                    Continue
                </button>
                <div>Already have an account? <Link to={ROUTES.signupSignIn}>Sign in</Link></div>
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
