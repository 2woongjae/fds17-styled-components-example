import logo from "./logo.svg";
import "./App.css";

// import Button, { PrimaryStyledButton } from "./components/Button";
import MyButton from "./components/MyButton";
import { createGlobalStyle } from "styled-components";
import StyledA from "./components/StyledA";
import Shadow from "./components/Shadow";

import { Button } from "antd";
import { IeOutlined } from "@ant-design/icons";

function UppercaseButton(props) {
  return <button {...props} children={props.children.toUpperCase()} />;
}

const GlobalStyle = createGlobalStyle`
button {
  font-size: 30px;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IeOutlined />
        <Shadow />
        <p>안녕하세요 글로벌</p>
        <p>
          <StyledA>태그 1</StyledA>
          <StyledA href="https://www.naver.com/">태그 2</StyledA>
          <StyledA color="orange" href="https://www.naver.com/">
            태그 3
          </StyledA>
        </p>
        <p>
          <Button danger ghost icon={<IeOutlined />}>
            버튼
          </Button>
          <Button primary>버튼</Button>
          <Button error>버튼</Button>
        </p>

        <p>
          <Button as="a" href="/hello">
            버튼
          </Button>
        </p>
        <p>
          <Button as={UppercaseButton} href="/hello">
            button
          </Button>
        </p>
        <MyButton className="orange">내 버튼</MyButton>
      </header>
    </div>
  );
}

export default App;

// component.jsx, component.css
// component.jsx, component.module.css
// component.jsx, component.style.jsx
