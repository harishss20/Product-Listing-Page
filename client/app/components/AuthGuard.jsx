import React, { useState } from "react";

function AuthGuard() {
  const [token, setToken] = useState("");
  return <div>{setToken(localStorage.getItem("token"))}</div>;
}

export default AuthGuard;
