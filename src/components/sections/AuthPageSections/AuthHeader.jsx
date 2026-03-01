import React from 'react'
import styled from 'styled-components'
import FixthLogo from "../../../assets/Icons/Fixth.svg"
import back from "../../../assets/Icons/back.svg"
import { useScreenWidth } from '../../../utils/useSreenWidth'

export default function AuthHeader() {
    const screenWidth = useScreenWidth()
  return (
        <AuthHeaderContainer>
            <div className="logoSec">
                {
                    screenWidth < 700 ? <img src={back} alt="Go back button" width={"25px"} height={"25px"} /> : null
                }
                <img src={FixthLogo} className='FixthLogo' alt="Fixth Logo" />
            </div>
            <div className="alternateInfo">
                <span>Here to hire a talent? </span>
                <a href="">Join as a company</a>
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

`