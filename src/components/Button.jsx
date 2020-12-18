import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}}

    ${(props) =>
      props.error &&
      css`
        border: 2px solid red;
        color: red;
      `}}
`;

export const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;

export default StyledButton;

// sc-jSgupP <= 클래스 네임을 만든건 누규??
