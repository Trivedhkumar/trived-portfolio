import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./molecules/Header";
import { Theme } from "./utils/theme";
import "./App.css";
import HomePage from "./screens/HomePage";
import Blogs from "./screens/Blogs";
import Projects from "./screens/Projects";
import Footer from "./molecules/Footer";

const { colors } = Theme;
const StyledBody = styled.div`
  background-color: ${colors.jbg};
  min-height: 100vh;
`;

function App() {
  const headingProps = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -100 },
    delay: 100,
  });

  return (
    <Router>
      <StyledBody>
        <animated.div style={headingProps}>
          <Header />
        </animated.div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </StyledBody>
    </Router>
  );
}

export default App;
