import React from "react";
import "./App.css";

function AppOLoop() {
  let message;
  const isLoggedIn = true;

  if (isLoggedIn) {
    message = "Welcome, User! (OUTSIDE LOOP)";
  } else {
    message = "Please log in.";
  }

  return (
    <>
      <h2>Hello world</h2>
      <p>{message}</p>
    </>
  );
}

export default AppOLoop;
