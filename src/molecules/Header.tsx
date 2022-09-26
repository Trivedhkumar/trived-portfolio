// import MenuItem from "../components/MenuItem";
import styled from "styled-components";
import { device, StyledButton3, StyledHeading3, Theme } from "../utils/theme";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { spacing, colors } = Theme;
const StyledHeader = styled.div(
  ({ bgColor }: { bgColor?: string }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${spacing.r}px;
  position: sticky;
  top: 0;
  background-color:${bgColor};
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`
);
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-evenly;
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const StyledProgradHeader = styled.div`
  flex-grow: 2;
`;

const Header = () => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    setAnchorTarget(document.getElementById("contact"));
  }, []);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  // const handleClick = (event: any) => {
  //   event.preventDefault();
  //   anchorTarget &&
  //     anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  // };
  return (
    <StyledHeader bgColor={colors.jbg}>
      <StyledProgradHeader>
        <StyledHeading3 color={colors.sf60}>Web Developer</StyledHeading3>
      </StyledProgradHeader>
      <StyledMenu>
        {/* Commented as scrolling to section is not working */}
        {/* {["HOME", "BIO", "PORTFOLIO", "SKILLS"].map((el, i) => (
          <MenuItem id={el.toLowerCase()} key={i} itemName={el} />
        ))} */}
        {/* <StyledButton2 id="#contact" onClick={handleClick}>
          CONTACT
        </StyledButton2> */}
        <Link to={"/"}>
          <StyledButton3 responsiveMargin={`${spacing.r}px auto`}>
            HOME
          </StyledButton3>
        </Link>
        <Link to={"/projects"}>
          <StyledButton3 responsiveMargin={`${spacing.r}px auto`}>
            PROJECTS
          </StyledButton3>
        </Link>
        <Link to={"/blogs"}>
          <StyledButton3 responsiveMargin={`${spacing.r}px auto`}>
            BLOGS
          </StyledButton3>
        </Link>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
