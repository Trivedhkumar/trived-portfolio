import styled from "styled-components";
import { Theme } from "../utils/theme";

const StyledSection = styled.div(
  ({ bgurl, color }: { bgurl?: string; color?: string }) => `
  min-height: 450px;
  background: url(${bgurl});
  background-color: ${color};
`
);
const { colors } = Theme;
const Section = ({
  children,
  color = colors.jbg,
  bgurl = "",
  id,
}: {
  children?: React.ReactNode;
  color?: string;
  bgurl?: string;
  id: string;
}) => {
  return (
    <StyledSection id={id} bgurl={bgurl} color={color}>
      {children}
    </StyledSection>
  );
};
export default Section;
