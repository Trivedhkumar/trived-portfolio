import { StyledButton3, StyledHeading3 } from "../utils/theme";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <StyledHeading3>Social Media</StyledHeading3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <StyledButton3 href="https://github.com/Trivedhkumar" target={"_blank"}>
          GITHUB
        </StyledButton3>
        <StyledButton3
          href="https://www.linkedin.com/in/trivedhkumarjajala/"
          target={"_blank"}
        >
          LINKEDIN
        </StyledButton3>
        <StyledButton3 href="https://twitter.com/JTrivedh" target={"_blank"}>
          TWITTER
        </StyledButton3>
      </div>
    </div>
  );
};
export default Footer;
