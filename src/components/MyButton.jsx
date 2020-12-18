import React from "react";
import styled from "styled-components";

function MyButton({ className, children }) {
  console.log(className);
  return (
    <div className={className}>
      <button>MyButton {children}</button>
    </div>
  );
}

// export default MyButton;

const StyledMyButton = styled(MyButton)`
  button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${(props) => props.color || "palevioletred"};
    color: ${(props) => props.color || "palevioletred"};
    margin: 0 1em;
    padding: 0.25em 1em;

    // :hover {
    //   border: 2px solid red;
    // }

    ::before {
      content: "@";
    }
  }

  //   & ~ & {
  //     border: 2px solid red;
  //   }

  //   & + & {
  //     border: 2px solid green;
  //   }

  &.orange {
    border: 2px solid orange;
  }
`;

export default StyledMyButton;

// 한 컴포넌트에 한 스타일 컴포넌트
// 한 컴포넌트에 여러 스타일 컴포넌트
