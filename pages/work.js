import React from "react";
import Home from "../components/home/home";
import WorkComp from "../components/work/work";

function Work() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <head>
        <title>Shuvamk. : Work</title>
      </head>
      <WorkComp />
    </div>
  );
}

export default Work;
