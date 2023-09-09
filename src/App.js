import React, { Children, useState } from "react";
import Button from "../src/components/UI/Button/Button";
import Wrapper from "../src/components/Wrapper/Wrapper";
import MyP from "../src/components/MyParagraph/MyP";

import "./App.css";

function App() {
  const [showState, setShowState] = useState(false);
  const [isValid, setIsVaild] = useState(false);
  const showHandler = (event) => {
    setShowState((prev) => !prev);
  };
  const isValidHandler = (event) => {
    if (isValid) {
      setIsVaild(false);
    } else {
      setIsVaild(true);
    }
  };

  console.log("APP 실행 중");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={showHandler}>Toggle</Button>
      <Wrapper>
        <MyP isShow={showState}></MyP>
      </Wrapper>
      <Button onClick={isValidHandler}>Toggle 허용</Button>
    </div>
  );
}

export default App;
