import styled from "styled-components";

/* ── tokens ── */
const BLACK = "rgba(31, 31, 31, 1)";
const GREY = "rgba(127, 127, 127, 1)";
const ASH = "rgba(209, 209, 209, 1)";

/* ── styled components ── */
const Card = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${ASH};
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  overflow: hidden;
  background: var(--white);
`;

const Section = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${ASH};

  &:last-child {
    border-bottom: none;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  color: ${BLACK};
  font-size: 14px;
  font-weight: 550;
  letter-spacing: -0.42px;
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: 1px solid ${ASH};
  background: transparent;
  cursor: pointer;
`;

const EntryRow = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${ASH};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #d9d9d9;
  flex-shrink: 0;
`;

const EntryBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const EntryTitle = styled.p`
  margin: 0;
  color: ${BLACK};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.42px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const MetaText = styled.span`
  color: ${(p) => (p.$muted ? GREY : BLACK)};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

const Dot = () => (
  <svg width="2" height="2" viewBox="0 0 2 2" fill="none">
    <circle cx="1" cy="1" r="1" fill="currentColor" />
  </svg>
);

const EntryDescription = styled.p`
  margin: 6px 0 0;
  color: ${BLACK};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.39px;

  span {
    color: ${GREY};
  }
`;

const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  display: inline-flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${ASH};
  color: ${BLACK};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

const ProjectCard = styled.div`
  border-radius: 8px;
  background: ${ASH};
  padding: 12px 14px;
`;

const ProjectTitle = styled.p`
  margin: 0 0 6px;
  color: ${BLACK};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.39px;
`;

const ProjectLabel = styled.p`
  margin: 0 0 4px;
  color: ${BLACK};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

const ProjectList = styled.ul`
  margin: 0;
  padding-left: 16px;
`;

const ProjectListItem = styled.li`
  color: ${BLACK};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.39px;

  span {
    color: ${GREY};
  }
`;

/* ── icon components ── */
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 0V14" stroke={BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M0 7H14" stroke={BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EditIcon = () => (
  <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path d="M7.5 14H15.0001" stroke={BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M11.2501 0.50805C11.5816 0.182751 12.0313 0 12.5001 0C12.7322 0 12.9621 0.0448665 13.1766 0.132038C13.3911 0.219209 13.586 0.346978 13.7501 0.50805C13.9143 0.669121 14.0445 0.860341 14.1333 1.07079C14.2222 1.28124 14.2679 1.5068 14.2679 1.73459C14.2679 1.96238 14.2222 2.18794 14.1333 2.39839C14.0445 2.60884 13.9143 2.80006 13.7501 2.96113L3.3334 13.1823L0 14L0.8333 10.7292L11.2501 0.50805Z"
      stroke={BLACK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── main component ── */
export default function ProfileDetailsCard({ onOpenModal }) {
  return (
    <Card>
      {/* Experience */}
      <Section>
        <SectionHeader>
          <SectionTitle>Experience</SectionTitle>
          <HeaderIcons>
            <IconButton type="button" onClick={() => onOpenModal?.("experience")}>
              <PlusIcon />
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("experience")}>
              <EditIcon />
            </IconButton>
          </HeaderIcons>
        </SectionHeader>

        <EntryRow>
          <Thumbnail />
          <EntryBody>
            <EntryTitle>Civil/Structural Engineer</EntryTitle>
            <MetaRow>
              <MetaText>Waterwell</MetaText>
              <Dot />
              <MetaText>Full-time</MetaText>
              <MetaText>Full-time</MetaText>
            </MetaRow>
            <MetaRow>
              <MetaText $muted>Jun 2024 - Jul 2025</MetaText>
              <Dot style={{ color: GREY }} />
              <MetaText $muted>1 yr 1 mon</MetaText>
            </MetaRow>
            <EntryDescription>
              Supervised daily activities of reinforcement, form and work, and concrete works of the
              building...{" "}
              <span>more</span>
            </EntryDescription>
          </EntryBody>
        </EntryRow>

        <EntryRow>
          <Thumbnail />
          <EntryBody>
            <EntryTitle>Civil/Structural Engineer</EntryTitle>
            <MetaRow>
              <MetaText>Holycrest International</MetaText>
              <Dot />
              <MetaText>Part-time</MetaText>
            </MetaRow>
            <MetaRow>
              <MetaText $muted>Oct 2023 - Jan 2024</MetaText>
              <Dot style={{ color: GREY }} />
              <MetaText $muted>6 mon</MetaText>
            </MetaRow>
            <EntryDescription>
              Supervised daily activities of reinforcement, form and work, and concrete works of the
              building...{" "}
              <span>more</span>
            </EntryDescription>
          </EntryBody>
        </EntryRow>
      </Section>

      {/* Education */}
      <Section>
        <SectionHeader>
          <SectionTitle>Education</SectionTitle>
          <HeaderIcons>
            <IconButton type="button" onClick={() => onOpenModal?.("education")}>
              <PlusIcon />
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("education")}>
              <EditIcon />
            </IconButton>
          </HeaderIcons>
        </SectionHeader>

        <EntryRow>
          <Thumbnail />
          <EntryBody>
            <EntryTitle>Redeemer&apos;s University</EntryTitle>
            <MetaRow>
              <MetaText>Bachelor&apos;s Degree, Mechanical Engineering</MetaText>
            </MetaRow>
            <MetaRow>
              <MetaText $muted>Oct 2022 - Oct 2027</MetaText>
            </MetaRow>
          </EntryBody>
        </EntryRow>
      </Section>

      {/* Skills */}
      <Section>
        <SectionHeader>
          <SectionTitle>Skills</SectionTitle>
          <HeaderIcons>
            <IconButton type="button" onClick={() => onOpenModal?.("skills")}>
              <PlusIcon />
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("skills")}>
              <EditIcon />
            </IconButton>
          </HeaderIcons>
        </SectionHeader>

        <SkillsWrap>
          {["AutoCAD", "STAAD Pro", "ETABS", "MS Project", "Primavera", "Java", "Figma"].map(
            (skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            )
          )}
        </SkillsWrap>
      </Section>

      {/* Projects */}
      <Section>
        <SectionHeader>
          <SectionTitle>Projects</SectionTitle>
          <HeaderIcons>
            <IconButton type="button" onClick={() => onOpenModal?.("projects")}>
              <PlusIcon />
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("projects")}>
              <EditIcon />
            </IconButton>
          </HeaderIcons>
        </SectionHeader>

        <ProjectCard>
          <ProjectTitle>Pre-stressed Bridge</ProjectTitle>
          <ProjectLabel>Summary</ProjectLabel>
          <ProjectList>
            <ProjectListItem>Design &amp; Analysis of 50m Pre-stressed Bridge (Final Year)</ProjectListItem>
            <ProjectListItem>Reduced steel quantity by 12 % • Presented to panel of NSE fellows</ProjectListItem>
            <ProjectListItem>
              Photos + PDF attached... <span>more</span>
            </ProjectListItem>
          </ProjectList>
        </ProjectCard>
      </Section>
    </Card>
  );
}
