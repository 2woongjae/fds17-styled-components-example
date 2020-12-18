import styled from "styled-components";

const StyledA = styled.a.attrs((props) => ({
  href: props.href || "https://localhost",
  color: props.color || "palevioletred",
  target: "_BLANK",
}))`
  color: ${(props) => props.color};
`;

export default StyledA;
