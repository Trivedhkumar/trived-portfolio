import styled from "styled-components";

export const Theme = {
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    s1: 12,
    r: 16,
    r1: 24,
    l: 32,
    xl: 48,
    xxl: 64,
    xxx: 128,
  },
  fontSize: {
    xxs: 2,
    xs: 4,
    s: 8,
    s1: 12,
    r: 16,
    r1: 24,
    l: 32,
    xl: 48,
    xxl: 64,
    xxx: 128,
  },
  colors: {
    sf60: "#f05136",
    white: "#fff",
    jbg: "#edeef0",
    black100: "#000",
  },
};
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

//Variant Headings
export const StyledHeading1 = styled.h1(
  ({ color, margin }: { color?: string; margin?: string }) => `
color: ${color};
font-size: 3em;
font-weight: 700;
margin:${margin}
`
);
export const StyledHeading2 = styled.h2(
  ({
    margin,
    padding,
    color,
  }: {
    margin?: string;
    padding?: string;
    color?: string;
  }) => `
margin:${margin};
padding:${padding};
color: ${color};
  font-size: 2.5em;
  font-weight: 700;
`
);

export const StyledHeading3 = styled.h3`
  color: ${(props) => props.color};
  font-size: 2em;
  font-weight: 700;
`;
export const StyledHeading4 = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
`;
export const StyledHeading5 = styled.h5(
  ({
    margin,
    padding,
    color,
  }: {
    margin?: string;
    padding?: string;
    color?: string;
  }) => `
margin:${margin};
padding:${padding};
color: ${color};
  font-size: 1em;
  font-weight: 700;
`
);
export const StyledHeading6 = styled.h6``;

//Variant Body
export const StyledBody1 = styled.p``;
export const StyledBody2 = styled.p(
  ({
    margin,
    padding,
    color,
  }: {
    margin?: string;
    padding?: string;
    color?: string;
  }) => `
margin:${margin};
padding:${padding};
line-height:1.5em;
font-weight:600;
color:${color}
`
);
export const StyledBody3 = styled.p(
  ({
    margin,
    padding,
    color,
  }: {
    margin?: string;
    padding?: string;
    color?: string;
  }) => `
margin:${margin};
padding:${padding};
line-height:1.2em;
font-weight:600;
color:${color}
`
);
//Variant Buttons
export const StyledButton1 = styled.button``;
export const StyledButton2 = styled.a(
  ({ margin }: { margin?: string }) => `
  padding: ${Theme.spacing.s}px ${Theme.spacing.s1}px;
  background-color: ${Theme.colors.sf60};
  color: ${Theme.colors.white};
  font-size: 1.2em;
  font-weight: 700;
  border-radius: ${Theme.spacing.xs}px;
  cursor: pointer;
margin:${margin};

`
);
export const StyledButton3 = styled.a(
  ({
    margin,
    padding,
    color,
    onHover,
  }: {
    margin?: string;
    padding?: string;
    color?: string;
    onHover?: string;
  }) => `
margin:${margin};
padding:${padding};
line-height:1.2em;
color:${color}
font-size: 1.2em;
font-weight: 700;
cursor: pointer;
&:hover {
  color: ${onHover ?? ""};
}
`
);
