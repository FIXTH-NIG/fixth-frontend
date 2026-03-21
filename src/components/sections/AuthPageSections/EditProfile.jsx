import styled from 'styled-components';

import EditIcon from "../../../assets/Icons/editIcon.svg"
import CameraIcon from "../../../assets/Icons/cameraIcon.svg"
import LocationIcon from "../../../assets/Icons/locationIcon.svg"
import PlusIcon from "../../../assets/Icons/plusIcon.svg"
import ArrowLeftIcon from "../../../assets/Icons/leftArrowIcon.svg"
import { useNavigate } from "react-router-dom";

// ─── Styled Components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  min-height: 100vh;
  background: rgba(228, 228, 228, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 700px){
    padding: 0%;
  }
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 388px;
  margin-bottom: 30px;
  @media (max-width: 700px){
    margin-bottom: 10px;
  }
`;

const PageTitle = styled.h1`
  color: rgba(31, 31, 31, 1);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1px;
  margin: 0;
`;

const PageSubtitle = styled.p`
  color: rgba(127, 127, 127, 1);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
  margin: 0;
`;

const ProfileCard = styled.div`
  display: inline-flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  border-radius: 32px;
  border: 1px solid #fcfcfc;
  background: rgba(228, 228, 228, 1);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 800px;

  @media (max-width: 860px) {
    width: 100%;
    max-width: 100%;
    border: none;
    box-shadow: none;
    border-radius: 0%;
    padding: 16px;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  position: relative;
  height: 78px;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`;

const AvatarCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #d9d9d9;
`;

const CameraIconWrapper = styled.div`
  position: absolute;
  right: -8px;
  bottom: -8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(228, 228, 228, 1);
  border: 0.5px solid rgba(209, 209, 209, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NameGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DisplayName = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1px;
  @media (max-width: 700px){
    font-size: 16px;
  }
`;

const PlaceholderName = styled.span`
  color: rgba(127, 127, 127, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.8px;
  @media (max-width: 700px){
    font-size: 14px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddTitleText = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
`;

const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LocationText = styled.span`
  color: rgba(127, 127, 127, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

const SectionCard = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 20px;
  border: 1px solid rgba(209, 209, 209, 1);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  @media (max-width: 700px){
    height: fit-content;
    padding: 20px;
  }
`;

const SectionTitle = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1px;
  @media (max-width: 700px){
    font-size: 16px;
  }
`;

const SectionDescription = styled.span`
  color: rgba(127, 127, 127, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
  @media (max-width: 700px){
    font-size: 12px;
  }
`;

const ActionButton = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 1px solid rgba(31, 31, 31, 1);
  background: transparent;
  cursor: pointer;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  letter-spacing: -0.7px;
  width: fit-content;
  &:hover {
    background: rgba(31, 31, 31, 0.05);
  }
  @media (max-width: 700px){
    font-size: 12px;
  }
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BackButton = styled.button`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid rgba(31, 31, 31, 1);
  background: transparent;
  cursor: pointer;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  letter-spacing: -0.7px;

  &:hover {
    background: rgba(31, 31, 31, 0.05);
  }
`;

const ContinueButton = styled.button`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: none;
  background: rgba(75, 111, 187, 1);
  cursor: pointer;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(228, 228, 228, 1);
  letter-spacing: -0.7px;

  &:hover {
    background: rgba(60, 90, 160, 1);
  }
`;

// ─── Section data ─────────────────────────────────────────────────────────────

const sections = [
  {
    title: 'Discipline',
    description: 'Choose your engineering specialization',
    buttonLabel: 'Add details',
  },
  {
    title: 'About',
    description: 'Share some details about yourself, your expertise and what you offer.',
    buttonLabel: 'Add details',
  },
  {
    title: 'Work experience',
    description: 'Add your job history and achievement to give companies insights into your expertise.',
    buttonLabel: 'Add work experience',
  },
  {
    title: 'Education',
    description: 'Add your job history and achievement to give companies insights into your expertise.',
    buttonLabel: 'Add education',
  },
  {
    title: 'Skills',
    description: 'Add your job history and achievement to give companies insights into your expertise.',
    buttonLabel: 'Add education',
  },
  {
    title: 'Projects',
    description: 'Add your project to catch the attention of your employer.',
    buttonLabel: 'Add project',
  },
];

// ─── App ──────────────────────────────────────────────────────────────────────

export default function EditProfile({ onNext, onBack }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack()
      return
    }
    navigate(-1)
  }

  const handleContinue = () => {
    if (onNext) {
      onNext()
      return
    }
    navigate('/app')
  }
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>Edit your new profile</PageTitle>
        <PageSubtitle>You can come back and update your profile anytime.</PageSubtitle>
      </PageHeader>

      <ProfileCard>
        {/* Profile Header */}
        <ProfileHeader>
          <AvatarWrapper>
            <AvatarCircle />
            <CameraIconWrapper>
              <img src={CameraIcon} alt="camera icon" />
            </CameraIconWrapper>
          </AvatarWrapper>

          <ProfileInfo>
            <NameRow>
              <NameGroup>
                <DisplayName>Add display name</DisplayName>
                <img src={EditIcon} alt="edit icon" />
              </NameGroup>
              <PlaceholderName>John Doe</PlaceholderName>
            </NameRow>
            <TitleRow>
              <AddTitleText>Add title</AddTitleText>
              <img src={EditIcon} alt="edit icon" />
            </TitleRow>
            <LocationRow>
              <img src={LocationIcon} alt="location icon" />
              <LocationText>Nigeria</LocationText>
            </LocationRow>
          </ProfileInfo>
        </ProfileHeader>

        {/* Profile Sections */}
        <SectionsWrapper>
          {sections.map((section) => (
            <SectionCard key={section.title}>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionDescription>{section.description}</SectionDescription>
              <ActionButton>
                <img src={PlusIcon} alt="plus icon" />
                {section.buttonLabel}
              </ActionButton>
            </SectionCard>
          ))}

          {/* Navigation */}
          <BottomNav>
            <BackButton type="button" onClick={handleBack}>
              <img src={ArrowLeftIcon} alt="back btn" />
              Back
            </BackButton>
            <ContinueButton type="button" onClick={handleContinue}>
              Continue
            </ContinueButton>
          </BottomNav>
        </SectionsWrapper>
      </ProfileCard>
    </PageWrapper>
  );
}

