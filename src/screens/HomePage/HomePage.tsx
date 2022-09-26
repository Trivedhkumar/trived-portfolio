import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useSpring, animated } from "react-spring";

import Section from "../../molecules/Section";
import {
  device,
  StyledBody2,
  StyledBody3,
  StyledButton1,
  StyledButton2,
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  Theme,
} from "../../utils/theme";
import "../../App.css";
import Project from "../../components/Project";
import SkillBar from "../../components/SkillBar";
import { langugues, projectsData, skills } from "../../utils/Data";
import { useRef } from "react";

const { spacing, colors } = Theme;
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

const HomePage = () => {
  // send the message and get a callback with an error or details of the message that was sent

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        "service_e8gff1e",
        "template_9jn1kpp",
        e.target,
        "oqHQIJiItldYJW0m7"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  const sectionOneProps = useSpring({
    from: { transform: "translate(-1200px,0)" },
    to: { transform: "translate(0,0)" },
    delay: 100,
  });
  const sectionTwoProps = useSpring({
    from: { transform: "translate(1200px,0)" },
    to: { transform: "translate(0,0)" },
    delay: 100,
  });

  return (
    <div>
      <animated.div style={sectionOneProps}>
        <Section id="home" color={colors.black100}>
          <div className="section section-one-wrapper">
            <StyledHeading3 color={colors.white}>I BELIEVE IN</StyledHeading3>
            <StyledHeading1
              margin={`${spacing.xl}px auto`}
              color={colors.white}
            >
              EAT (); SLEEP (); CODE (); REPEAT();
            </StyledHeading1>
          </div>
        </Section>
      </animated.div>
      <animated.div style={sectionTwoProps}>
        <Section id="bio">
          <div className=" section section-two-wrapper">
            <StyledImage
              src={process.env.PUBLIC_URL + "./assests/images/profile.jpeg"}
            ></StyledImage>
            <StyledContent>
              <StyledHeading2>TRIVEDH KUMAR JAJALA</StyledHeading2>
              <StyledBody3 margin={`${spacing.r}px auto`}>
                I'm a passionate Engineer with a degree in Computer Science &
                Engineering. Basically I came to know about computers in my
                first year of B.tech and got my first laptop in my second year
                that's when I started experimenting on the things.
              </StyledBody3>
              <StyledBody3 margin={`${spacing.r}px auto`}>
                I,explored through various langugues and these frontend
                tech(HTML CSS JS) caught my attention,with them we can literally
                control the content in websites which was amazing to my eyes
                then. So I stared diving deep into the full stack development
                and learned many things and looking for oppurtunity to showcase
                my skills .
              </StyledBody3>
              <div>
                <StyledButton2
                  href={
                    process.env.PUBLIC_URL +
                    "assests/pdf/Trivedh Kumar Resume.pdf"
                  }
                  download="Trived Kumar Jajala Resume"
                >
                  DOWNLOAD MY RESUME
                </StyledButton2>
              </div>
            </StyledContent>
          </div>
        </Section>
      </animated.div>
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
              <Project key={project.id} project={project} />
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
          <StyledForm ref={form} onSubmit={sendEmail}>
            <StyledInput
              type={"text"}
              placeholder={"Enter your name"}
              required
              name="name"
            />
            <StyledInput
              type={"email"}
              max={50}
              placeholder={"Enter your email"}
              required
              name="email"
            ></StyledInput>
            <StyledMessage
              rows={6}
              placeholder="Enter your message"
              required
              name="message"
            ></StyledMessage>
            <StyledButton1
              margin={`${spacing.l}px auto`}
              color={colors.white}
              type="submit"
            >
              Send Message
            </StyledButton1>
          </StyledForm>
        </div>
      </Section>
    </div>
  );
};
export default HomePage;
