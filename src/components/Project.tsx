import styled from "styled-components";
// import from './Project.css';
import {
  StyledBody3,
  StyledButton3,
  StyledHeading5,
  Theme,
} from "../utils/theme";
interface InterfaceProject {
  id: number;
  name: string;
  description: string;
}
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
height:200px
`
);
const StyledImage = styled.img(
  () => `

`
);
const Project = ({ project }: { project: InterfaceProject }) => {
  return (
    <StyledProject>
      <StyledImage
        src="https://i1.faceprep.in/ProGrad/Coding-icon.svg"
        alt="project-image"
      ></StyledImage>
      <StyledHeading5 margin={`${spacing.r}px auto`}>
        {project.name}
      </StyledHeading5>
      <StyledBody3>{project.description}</StyledBody3>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: spacing.r }}>
        <StyledButton3 onHover={colors.sf60}>Click here &nbsp;</StyledButton3>
        <StyledBody3>to view {project.name}</StyledBody3>
      </div>
    </StyledProject>
  );
};
export default Project;
