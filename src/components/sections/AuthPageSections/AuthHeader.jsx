import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import FixthLogo from "../../../assets/Icons/Fixth.svg"
import back from "../../../assets/Icons/back.svg"
import { useIsMobile } from '../../../hooks'
import { BREAKPOINTS } from '../../../constants'
import { ROUTES } from '../../../routes'

export default function AuthHeader() {
    const isMobile = useIsMobile(BREAKPOINTS.MOBILE)
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
  return (
        <AuthHeaderContainer>
            <div className="logoSec">
                {
                    isMobile ? (
                        <button type="button" onClick={handleBack} className="backBtn" aria-label="Go back">
                            <img src={back} alt="Go back button" width={"25px"} height={"25px"} />
                        </button>
                    ) : null
                }
                <img src={FixthLogo} className='FixthLogo' alt="Fixth Logo" />
            </div>
            <div className="alternateInfo">
                <span>Here to hire a talent? </span>
                <Link to={ROUTES.signupChoose}>Join as a company</Link>
            </div>
        </AuthHeaderContainer>
  )
}

const AuthHeaderContainer = styled.header`
    width: 100%;
    padding: 25px 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 700px){
        padding: 16px;
        .logoSec{
            width: 55%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .FixthLogo{
                height: 40px;
                width: 45px;
            }
        }
    }
    .alternateInfo{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        letter-spacing: -1px;
        a{
            color: var(--blue-light);
        }
        @media (max-width: 700px){
            display: none;
        }
    }
    .backBtn{
        background: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 0;
    }

`
