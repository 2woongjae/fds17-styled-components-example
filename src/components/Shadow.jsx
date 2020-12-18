import React from "react";
import root from "react-shadow";

const style = `
p {
  color: orange
}
`;

export default function Shadow() {
  return (
    <root.div>
      <p>안녕하세요</p>
      <style type="text/css">{style}</style>
    </root.div>
  );
}
