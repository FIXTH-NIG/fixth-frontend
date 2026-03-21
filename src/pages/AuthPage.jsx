import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import {useScreenWidth} from "../utils/useSreenWidth"
import Footer from "../components/layout/Footer"
import AuthHeader from '../components/sections/AuthPageSections/AuthHeader'
import ChooseUserType from '../components/sections/AuthPageSections/ChooseUserType'
import SignUpForm from '../components/sections/AuthPageSections/SignUpForm'
import VerificationCode from '../components/sections/AuthPageSections/VericationCode'
import AddExperience from '../components/sections/AuthPageSections/AddExperience'
import EditProfile from '../components/sections/AuthPageSections/EditProfile'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
    const screenWidth = useScreenWidth()
    const navigate = useNavigate()
    const [stepIndex, setStepIndex] = useState(0)

    const steps = useMemo(
        () => [
            'choose-user-type',
            'sign-up',
            'verification-code',
            'add-experience',
            'edit-profile'
        ],
        []
    )

    const goNext = () => {
        setStepIndex((current) => Math.min(current + 1, steps.length - 1))
    }

    const goBack = () => {
        setStepIndex((current) => Math.max(current - 1, 0))
    }

    const finishAuthFlow = () => {
        navigate('/app')
    }

    const renderStep = () => {
        switch (steps[stepIndex]) {
            case 'choose-user-type':
                return <ChooseUserType onNext={goNext} />
            case 'sign-up':
                return <SignUpForm onNext={goNext} onBack={goBack} />
            case 'verification-code':
                return <VerificationCode onNext={goNext} onBack={goBack} />
            case 'add-experience':
                return <AddExperience onNext={goNext} onBack={goBack} />
            case 'edit-profile':
                return <EditProfile onNext={finishAuthFlow} onBack={goBack} />
            default:
                return <ChooseUserType onNext={goNext} />
        }
    }
  return (
    <>
        <AuthHeader/>
        <MainSection>
            {renderStep()}
        </MainSection>
        {
            screenWidth > 700 ?  <Footer/> : null
        }
    </>
  )
}

const MainSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`
