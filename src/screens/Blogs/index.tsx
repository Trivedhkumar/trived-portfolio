import React from "react";
import { StyledButton3, StyledHeading3 } from "../../utils/theme";
import "../../App.css";
const Blog = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link?: string;
}) => (
  <div className="blog-card">
    <StyledHeading3>{title}</StyledHeading3>
    <p style={{ marginTop: "12px", lineHeight: "24px" }}>{description}</p>
    <StyledButton3
      style={{ marginTop: "12px" }}
      href={link ? link : ""}
      target={"_blank"}
    >
      Read More
    </StyledButton3>
  </div>
);
const Blogs = () => {
  return (
    <div>
      <Blog
        title="How to install expo-cli"
        description={
          "So before installing expo make sure you have node installed in your system you can check it by running node --versionif this does not throw you an error and gives a version number you are good to go and install expo through npm (node package manager) which will get installed along with node and you can check it by running npm --version....."
        }
        link={"https://medium.com/p/5df7d0bb51f8"}
      />
      <div style={{ marginTop: "24px" }}></div>
      <Blog
        title="Dummy Blog"
        description={
          "lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        link={""}
      />
    </div>
  );
};

export default Blogs;
