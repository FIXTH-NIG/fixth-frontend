import styled from "styled-components";
import plusIcon from "../../../assets/Icons/plusIcon.svg"
import editIcon from "../../../assets/Icons/editPenIcon.svg"

/* ── tokens ── */
const BLACK = "rgba(31, 31, 31, 1)";
const GREY = "rgba(127, 127, 127, 1)";
const ASH = "rgba(209, 209, 209, 1)";

/* ── styled components ── */
const Card = styled.div`
  width: 100%;
  border: 1px solid ${ASH};
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  overflow: hidden;
  background: var(--background-white);
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
  gap: 31px;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  .plusIcon{
    width: 14px;
    height: 14px;
  }
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
              <img src={plusIcon} alt="plus icon" className="plusIcon"/>
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("experience")}>
              <img src={editIcon} alt="edit icon" />
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
              <img src={plusIcon} alt="plusIcon" className="plusIcon" />
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("education")}>
              <img src={editIcon} alt="edit icon" />
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
              <img src={plusIcon} alt="Plus icon" className="plusIcon" />
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("skills")}>
              <img src={editIcon} alt="Edit icon" />
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
              <img src={plusIcon} alt="plus icon" className="plusIcon" />
            </IconButton>
            <IconButton type="button" onClick={() => onOpenModal?.("projects")}>
              <img src={editIcon} alt="Edit icon" />
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
