import { StyledHeading3 } from "../utils/theme";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <StyledHeading3>Social Media</StyledHeading3>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3>GitHub</h3>
        <h3>Linkedin</h3>
        <h3>Twitter</h3>
      </div>
    </div>
  );
};
export default Footer;
