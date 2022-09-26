import styled from "styled-components";
import Project from "../../components/Project";
import Section from "../../molecules/Section";
import { projectsData } from "../../utils/Data";
import { device, StyledBody2, StyledHeading3, Theme } from "../../utils/theme";
import "./style.css";
const Projects = () => {
  const { colors, spacing } = Theme;
  const StyledProjects = styled.div(
    () => `
  display:flex;
  width:100%;
  justify-content:space-evenly;
  align-items:center;
  flex-wrap:wrap;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
  `
  );
  return (
    <Section color={colors.black100}>
      <div className="section section-three-wrapper">
        <StyledHeading3 color={colors.white}>PORTFOLIO</StyledHeading3>
        <StyledBody2 margin={`${spacing.r}px auto`} color={colors.white}>
          Some of my best projects so far.
        </StyledBody2>
        <StyledProjects>
          {projectsData.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </StyledProjects>
      </div>
    </Section>
  );
};

export default Projects;
