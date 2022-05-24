import styled from "styled-components";
import { StyledBody2, Theme } from "../utils/theme";
import "./SkillBar.css";
const { spacing } = Theme;
const StyledSkillBar = styled.div(
  () => `
margin:${`${spacing.r}px auto`}
`
);
const SkillBar = ({ value, skill }: { value: number; skill: string }) => {
  return (
    <StyledSkillBar>
      <StyledBody2>{skill}</StyledBody2>
      <progress max={100} value={value} />
    </StyledSkillBar>
  );
};
export default SkillBar;
