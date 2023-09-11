import React, { Children, useCallback, useState } from "react";
import Button from "../src/components/UI/Button/Button";
import Wrapper from "../src/components/Wrapper/Wrapper";
import MyP from "../src/components/MyParagraph/MyP";

import "./App.css";

function App() {
  const [showState, setShowState] = useState(false);
  const [isValid, setIsVaild] = useState(false);
  const showHandler = useCallback(
    (event) => {
      if (isValid) {
        setShowState((prev) => !prev);
      }
    },
    [isValid]
  );

  const isValidHandler = useCallback((event) => {
    setIsVaild((prev) => !prev);
  }, []);

  console.log("APP 실행 중");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={showHandler} id={"open"}>
        Toggle
      </Button>
      <Wrapper>
        <MyP isShow={showState}></MyP>
      </Wrapper>
      <Button onClick={isValidHandler} id={"show"}>
        Toggle {isValid ? "사용 가능" : "비허용"}
      </Button>
    </div>
  );
}

export default App;
