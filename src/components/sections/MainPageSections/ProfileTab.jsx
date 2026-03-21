import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import dummyProfile from "../../../assets/Images/dummyProfile.png";
import leftArrowIcon from "../../../assets/Icons/leftArrowIcon.svg";
import ProfileDetailsCard from "./ProfileDetailsCard";
import PostCard from "../../ui/PostCard";

const MODAL_TITLES = {
  profile: "Create profile",
  experience: "Add experience",
  education: "Add education",
  skills: "Add skills",
  projects: "Add project",
};

export default function ProfileTab() {
  const [activeModal, setActiveModal] = useState(null);

  const modalTitle = useMemo(() => MODAL_TITLES[activeModal] || "", [activeModal]);

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

  return (
    <ProfileTabWrapper>
      <ProfileHero>
        <Cover />
        <HeroContent>
          <Avatar src={dummyProfile} alt="profile avatar" />
          <HeroText>
            <h2>John Doe</h2>
            <p>Final-year Civil Engineer passionate about sustainable infrastructure.</p>
            <InfoList>
              <InfoItem>Civil/Structural Engineering</InfoItem>
              <InfoItem>Redeemer&apos;s University</InfoItem>
              <InfoItem>Oct 2022 - Oct 2027</InfoItem>
              <InfoItem>Abuja, Nigeria</InfoItem>
            </InfoList>
            <MetaRow>
              <MetaItem>100+ networks</MetaItem>
              <Dot />
              <MetaItem>200 profile views</MetaItem>
            </MetaRow>
          </HeroText>
          <EditButton type="button" onClick={() => setActiveModal("profile")}>
            Edit profile
          </EditButton>
        </HeroContent>
      </ProfileHero>

      <ProfileSection>
        <SectionHeader>
          <h3>Posts</h3>
          <span>Show all posts</span>
        </SectionHeader>
        <PostCard />
        <PostCard />
      </ProfileSection>

      <ProfileSection>
        <ProfileDetailsCard onOpenModal={setActiveModal} />
      </ProfileSection>

      {activeModal ? (
        <ModalOverlay onClick={closeModal}>
          <ModalCard onClick={(event) => event.stopPropagation()}>
            <ModalHeader>
              <button type="button" onClick={closeModal} aria-label="close form">
                <img src={leftArrowIcon} alt="go back" />
              </button>
              <span>{modalTitle}</span>
              <SaveButton type="button">Save</SaveButton>
            </ModalHeader>

            <ModalBody>
              {activeModal === "experience" ? <ExperienceForm /> : null}
              {activeModal === "education" ? <EducationForm /> : null}
              {activeModal === "skills" ? <SkillsForm /> : null}
              {activeModal === "projects" ? <ProjectsForm /> : null}
              {activeModal === "profile" ? <ProfileForm /> : null}
            </ModalBody>
          </ModalCard>
        </ModalOverlay>
      ) : null}
    </ProfileTabWrapper>
  );
}

function ExperienceForm() {
  return (
    <FormGrid>
      <InputField placeholder="Title" />
      <InputField placeholder="Employment type" />
      <InputField placeholder="Company" />
      <CheckboxRow>
        <input type="checkbox" />
        <span>I am currently working on this role</span>
      </CheckboxRow>
      <TwoColumn>
        <InputField placeholder="Start date" />
        <InputField placeholder="End date" />
      </TwoColumn>
      <InputField placeholder="Location" />
      <InputField placeholder="Location type" />
      <TextArea placeholder="Description" rows={4} />

      <FormHint>Skills</FormHint>
      <HintText>
        We recommend adding your top 5 skills used in this role, they&apos;ll also appear in your skills section.
      </HintText>
      <MiniButton type="button">+ Add skill</MiniButton>
    </FormGrid>
  );
}

function EducationForm() {
  return (
    <FormGrid>
      <InputField placeholder="School" />
      <InputField placeholder="Degree" />
      <InputField placeholder="Field of study" />
      <TwoColumn>
        <InputField placeholder="Start date" />
        <InputField placeholder="End date" />
      </TwoColumn>
      <InputField placeholder="Grade" />
      <TextArea placeholder="Description" rows={4} />

      <FormHint>Skills</FormHint>
      <HintText>
        We recommend adding your top 5 skills used in this role, they&apos;ll also appear in your skills section.
      </HintText>
      <MiniButton type="button">+ Add skill</MiniButton>
    </FormGrid>
  );
}

function SkillsForm() {
  return (
    <FormGrid>
      <FormHint>Skills</FormHint>
      <HintText>
        We recommend adding your top 5 skills used in this role, they&apos;ll also appear in your skills section.
      </HintText>
      <MiniButton type="button">+ Add skill</MiniButton>
    </FormGrid>
  );
}

function ProjectsForm() {
  return (
    <FormGrid>
      <InputField placeholder="Project title" />
      <TextArea placeholder="Summary" rows={4} />
      <MiniButton type="button">+ Add attachment</MiniButton>
    </FormGrid>
  );
}

function ProfileForm() {
  return (
    <FormGrid>
      <ProfilePhotoRow>
        <ProfileCircle />
        <MiniButton type="button">Edit</MiniButton>
      </ProfilePhotoRow>
      <InputField placeholder="Full name" />
      <TextArea placeholder="About" rows={3} />
      <InputField placeholder="Discipline" />
      <InputField placeholder="School" />
      <InputField placeholder="Oct 2022 - Oct 2027" />
      <InputField placeholder="Location" />
    </FormGrid>
  );
}

const ProfileTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
`;

const ProfileHero = styled.section`
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--light-ash);
  background: var(--background-white);
  overflow: hidden;
  position: relative;
`;

const Cover = styled.div`
  width: 100%;
  height: 110px;
  background: #d9d9d9;
`;

const HeroContent = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid var(--background-white);
  margin-top: -42px;
  object-fit: cover;
  @media (max-width: 600px) {
    margin-top: -36px;
  }
`;

const HeroText = styled.div`
  flex: 1;
  h2 {
    margin: 0;
    font-size: 18px;
    color: var(--black);
    font-weight: 600;
    letter-spacing: -0.6px;
  }
  p {
    margin: 6px 0 10px;
    color: var(--black);
    font-size: 13px;
    line-height: 1.4;
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
`;

const MetaItem = styled.span`
  color: var(--grey);
  font-size: 12px;
  font-weight: 500;
`;

const Dot = styled.span`
  width: 3px;
  height: 3px;
  background: var(--grey);
  border-radius: 50%;
  display: inline-block;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 8px 0 10px;
`;

const InfoItem = styled.span`
  color: var(--grey);
  font-size: 12px;
  font-weight: 500;
`;

const EditButton = styled.button`
  background: var(--light-ash);
  border-radius: 999px;
  height: 32px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--black);
  white-space: nowrap;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin: 0;
    font-size: 16px;
    color: var(--black);
    font-weight: 600;
  }
  span {
    font-size: 12px;
    color: var(--blue);
    font-weight: 500;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(65, 64, 90, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
`;

const ModalCard = styled.div`
  width: min(520px, 92vw);
  max-height: 90vh;
  border-radius: 18px;
  background: var(--background-white);
  border: 1px solid var(--light-ash);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
  }
`;

const ModalHeader = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border-bottom: 1px solid var(--light-ash);
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
  }
`;

const SaveButton = styled.button`
  margin-left: auto;
  background: var(--light-ash);
  height: 30px;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 500;
`;

const ModalBody = styled.div`
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--background-white);
`;

const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputField = styled.input`
  width: 100%;
  height: 38px;
  border-radius: 8px;
  border: 1px solid var(--light-ash);
  background: #f1f1f1;
  padding: 0 12px;
  font-size: 12px;
  color: var(--black);
  &:focus {
    outline: none;
    border-color: var(--blue);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--light-ash);
  background: #f1f1f1;
  padding: 10px 12px;
  font-size: 12px;
  color: var(--black);
  resize: none;
  &:focus {
    outline: none;
    border-color: var(--blue);
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--grey);
  input {
    width: 14px;
    height: 14px;
  }
`;

const FormHint = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: var(--black);
`;

const HintText = styled.p`
  margin: 0;
  font-size: 11px;
  color: var(--grey);
`;

const MiniButton = styled.button`
  width: fit-content;
  border-radius: 8px;
  padding: 6px 10px;
  background: var(--light-ash);
  font-size: 12px;
  font-weight: 500;
`;

const ProfilePhotoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #d9d9d9;
`;
