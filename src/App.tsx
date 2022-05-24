import styled from "styled-components";
import Header from "./molecules/Header";
import Section from "./molecules/Section";
import {
  device,
  StyledBody2,
  StyledBody3,
  StyledButton2,
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  Theme,
} from "./utils/theme";
import "./App.css";
import Project from "./components/Project";
import SkillBar from "./components/SkillBar";

const { spacing, colors } = Theme;
const StyledBody = styled.div`
  background-color: ${colors.jbg};
  min-height: 100vh;
`;
const StyledImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  margin: auto ${spacing.r}px;
  @media ${device.tablet} {
    display: none;
  }
`;
const StyledLine = styled.hr`
  color: #fff;
  width: 400px;
  @media ${device.tablet} {
    width: 200px;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: ${spacing.xl}px;
  @media ${device.tablet} {
    margin: auto;
  }
`;
const StyledProjects = styled.div(
  () => `
display:flex;
width:100%;
justify-content:space-evenly;
align-items:center;
@media ${device.tablet} {
  display: flex;
  flex-direction: column;
}
`
);
const StyledForm = styled.form(
  () => `
display:flex;
flex-direction:column;
`
);
const StyledInput = styled.input(
  () => `
    padding:${spacing.s}px;
    min-width:300px;
    margin-top:32px;
    `
);
const StyledMessage = styled.textarea(
  () => `
min-width:300px;
margin-top:32px;

`
);
const projectsData = [
  {
    id: 1,
    name: "BUDGETY APP",
    description:
      "Basic Budget App to calculate and keep track of your monthly expenses and income",
  },
  {
    id: 2,
    name: "Color Game",
    description:
      "Basic color guessing game with two modes of difficulty easy and hard.",
  },
  {
    id: 3,
    name: "Web Scarping of a website",
    description:
      "A python project to scarpe the watches data on a paticular site.",
  },
];
const skills = [
  {
    id: 1,
    skill: "HTML",
    value: 80,
  },
  {
    id: 2,
    skill: "CSS",
    value: 80,
  },
  {
    id: 3,
    skill: "JS",
    value: 68,
  },
  {
    id: 4,
    skill: "PYTHON",
    value: 68,
  },
  {
    id: 5,
    skill: "GIT",
    value: 70,
  },
];
const langugues = [
  {
    id: 1,
    lang: "ENGLISH",
    value: 80,
  },
  {
    id: 2,
    lang: "TELUGU",
    value: 90,
  },
  {
    id: 3,
    lang: "HINDI",
    value: 60,
  },
];
function App() {
  return (
    <StyledBody>
      <Header />
      <Section id="home" color={colors.black100}>
        <div className="section section-one-wrapper">
          <StyledHeading3 color={colors.white}>I BELIEVE IN</StyledHeading3>
          <StyledHeading1 margin={`${spacing.xl}px auto`} color={colors.white}>
            EAT (); SLEEP (); CODE (); REPEAT();
          </StyledHeading1>
        </div>
      </Section>
      <Section id="bio">
        <div className=" section section-two-wrapper">
          <StyledImage
            src={process.env.PUBLIC_URL + "./assests/images/profile.jpeg"}
          ></StyledImage>
          <StyledContent>
            <StyledHeading2>TRIVEDH KUMAR JAJALA</StyledHeading2>
            <StyledBody3 margin={`${spacing.r}px auto`}>
              I'm a passionate Engineer with a degree in Computer Science &
              Engineering. Basically I came to know about computers in my first
              year of B.tech and got my first laptop in my second year that's
              when I started experimenting on the things.
            </StyledBody3>
            <StyledBody3 margin={`${spacing.r}px auto`}>
              I,explored through various langugues and these frontend tech(HTML
              CSS JS) caught my attention,with them we can literally control the
              content in websites which was amazing to my eyes then. So I stared
              diving deep into the full stack development and learned many
              things and looking for oppurtunity to showcase my skills .
            </StyledBody3>
            <StyledButton2
              href={
                process.env.PUBLIC_URL + "assests/pdf/Trivedh Kumar Resume.pdf"
              }
              download="Trived Kumar Jajala Resume"
            >
              DOWNLOAD MY RESUME
            </StyledButton2>
          </StyledContent>
        </div>
      </Section>
      <Section
        id="portfolio"
        bgurl={"https://i1.faceprep.in/ProGrad/portfolio-background.svg"}
        color={colors.black100}
      >
        <div className="section section-three-wrapper">
          <StyledHeading3 color={colors.white}>PORTFOLIO</StyledHeading3>
          <StyledBody2 margin={`${spacing.r}px auto`} color={colors.white}>
            Some of my best projects so far.
          </StyledBody2>
          <StyledLine></StyledLine>
          <StyledProjects>
            {projectsData.map((project) => (
              <Project project={project} />
            ))}
          </StyledProjects>
        </div>
      </Section>
      <Section id="skills">
        <div className=" section section-four-wrapper">
          <StyledHeading3>SKILLS</StyledHeading3>
          <div className="skills">
            <div>
              <StyledHeading4 responsiveMargin={`${spacing.r}px auto`}>
                TECHNICAL SKILLS
              </StyledHeading4>
              {skills.map((skill) => (
                <SkillBar
                  key={skill.id}
                  skill={skill.skill}
                  value={skill.value}
                />
              ))}
            </div>
            <div>
              <StyledHeading4 responsiveMargin={`${spacing.r}px auto`}>
                LANGUAGUES
              </StyledHeading4>
              {langugues.map((lang) => (
                <SkillBar key={lang.id} skill={lang.lang} value={lang.value} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact" color={colors.black100}>
        <div className=" section footer">
          <StyledHeading3 color={colors.white}>CONTACT</StyledHeading3>
          <StyledForm
            action="mailto:trivedhj@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <StyledInput
              type={"text"}
              placeholder={"Enter your name"}
              required
            ></StyledInput>
            <StyledInput
              type={"email"}
              max={50}
              placeholder={"Enter your email"}
              required
            ></StyledInput>
            <StyledMessage
              rows={6}
              placeholder="Enter your message"
              required
            ></StyledMessage>
            <StyledButton2
              type="submit"
              margin={`${spacing.l}px auto`}
              color={colors.white}
            >
              Send Message
            </StyledButton2>
          </StyledForm>
        </div>
      </Section>
    </StyledBody>
  );
}

export default App;
