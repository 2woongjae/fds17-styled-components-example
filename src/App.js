import logo from "./logo.svg";
import "./App.css";

import Button, { PrimaryStyledButton } from "./components/Button";

function UppercaseButton(props) {
  return <button {...props} children={props.children.toUpperCase()} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button>버튼</Button>
          <Button primary>버튼</Button>
          <Button error>버튼</Button>
        </p>
        <p>
          <PrimaryStyledButton>주 버튼</PrimaryStyledButton>
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
      </header>
    </div>
  );
}

export default App;
