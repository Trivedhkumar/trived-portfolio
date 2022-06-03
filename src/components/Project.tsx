import styled from "styled-components";
import { StyledBody3, StyledButton3, Theme } from "../utils/theme";
import { GitHubProject } from "../types";
const { colors, spacing } = Theme;
const StyledProject = styled.div(
  () => `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${colors.white};
margin:${spacing.r}px;
border-radius:${spacing.s}px;
padding:${spacing.r}px;
width:250px;
height:250px
`
);
const StyledImage = styled.img(
  () => `

`
);
const Project = ({ project }: { project: GitHubProject }) => {
  return (
    <StyledProject>
      <StyledImage
        src="https://i1.faceprep.in/ProGrad/Coding-icon.svg"
        alt="project-image"
      ></StyledImage>
      <StyledButton3
        href={project.projectLink && project.projectLink}
        target={"_blank"}
        margin={`${spacing.r}px auto`}
      >
        {project.name}
      </StyledButton3>
      <StyledBody3>{project.description}</StyledBody3>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: spacing.r }}>
        <StyledButton3 target={"_blank"} href={project.repoLink}>
          Click here &nbsp;
        </StyledButton3>
        <StyledBody3>to view {project.name}</StyledBody3>
      </div>
    </StyledProject>
  );
};
export default Project;
