import React from "react";

const Wrapper = (props) => {
  console.log("Wrapper 실행 중");
  return <p>{props.children}</p>;
};

export default Wrapper;
