import React from "react";
import { AuthForm } from "../components/pages/AuthPage";

const Auth: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: 500 }}>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
