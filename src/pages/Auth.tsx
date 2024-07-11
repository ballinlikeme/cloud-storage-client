import React from "react";
import { AuthForm } from "../components/pages/AuthPage";
import { Background } from "../components/common/Background";
import { Card, Flex } from "@chakra-ui/react";

const Auth: React.FC = () => {
  return (
    <>
      <Background />
      <Flex justify="center" align="center" height="100vh">
        <Card width={500} padding={6}>
          <AuthForm />
        </Card>
      </Flex>
    </>
  );
};

export default Auth;
