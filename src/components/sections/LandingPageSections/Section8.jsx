import React from 'react'
import styled from 'styled-components'
import lpSection8Bg from "../../../assets/Images/lpSection8Bg.jpg"
import { useNavigate } from 'react-router-dom'

export default function Section8() {
  const navigate = useNavigate()
  return (
    <Section8Container>
        <h2>
            Ready to land your Engineering job faster?
        </h2>
        <span>
            Join 28,000+ Nigerian engineering students and graduates already
             getting direct messages and interviews from verified companies. 
             Sign up in under 60 seconds — it’s completely free.
        </span>
        <button type="button" onClick={() => navigate('/signup')}>
            Sign Up
        </button>
    </Section8Container>
  )
}

const Section8Container = styled.section`
    width: min(100%, 1230px);
    height: 318px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    padding: 50px 137px 0 137px;
    background-image:url(${lpSection8Bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-right: 3px solid white;
    border-left: 3px solid white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (max-width: 1300px) {
        margin-bottom: 60px;
        width: 95%;
        max-width: none;
        margin-left: auto;
        margin-right: auto;
        height: 320px;
        padding: 30px 20px 0 20px;
    }
    h2{
        margin: 0;
        font-size: 48px;
        font-weight: 500;
        letter-spacing: -1.5px;
        text-align: center;
        @media (max-width: 1300px) {
            font-size: 28px;
        }
    }
    span{
        font-size: 14px;
        color: var(--primary-grey);
        text-align: center;
        @media (max-width: 700px) {
            font-size: 12px;
        }
    }
    button{
        height: 39px;
        width: 90px;
        font-weight: 500;
        background-color: var(--blue);
        color: var(--white);
        border-radius: 40px;
        box-shadow:
            inset 0 6px 4px -6px rgba(255,255,255,0.9),   /* short white highlight at top */
            inset 0 -6px 10px -6px rgba(0,0,0,0.45);     /* subtle dark inside toward bottom */
    }
`
