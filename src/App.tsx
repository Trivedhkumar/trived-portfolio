import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./molecules/Header";
import { Theme } from "./utils/theme";
import "./App.css";
import HomePage from "./screens/HomePage/HomePage";

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
        </Routes>
      </StyledBody>
    </Router>
  );
}

export default App;
