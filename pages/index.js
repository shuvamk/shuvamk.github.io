import React from "react";
import Home from "../components/home/home";

function index() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <head>
        <title>Shuvamk.</title>
      </head>
      <Home />
    </div>
  );
}

export default index;
