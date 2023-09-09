import React from "react";

const MyP = (props) => {
  console.log("MyP 실행 중");
  return props.isShow ? "토글 했을 때 보여질 내용" : "";
};

export default React.memo(MyP);
