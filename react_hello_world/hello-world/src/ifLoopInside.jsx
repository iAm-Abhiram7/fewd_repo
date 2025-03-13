import React from "react";
import "./App.css";

function AppILoop() {
  const isLoggedIn = true;

  return (
    <>
      <h2>Hello world</h2>
      {isLoggedIn && <p>Welcome, User! (INSIDE LOOP)</p>}
      {!isLoggedIn && <p>Please log in.</p>}
    </>
  );
}

export default AppILoop;
