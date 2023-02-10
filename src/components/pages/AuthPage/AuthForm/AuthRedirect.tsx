import { Flex, Text, Link } from "@chakra-ui/react";
import React from "react";

interface AuthRedirectProps {
  isSignIn: boolean;
  onChange: () => void;
}

export const AuthRedirect: React.FC<AuthRedirectProps> = ({
  isSignIn,
  onChange,
}) => {
  const title = isSignIn ? "Welcome back!" : "Create new account";
  const subtitle = isSignIn ? "Do not have an account?" : "Already a member?";
  const linkText = isSignIn ? "Create a new one." : "Sing in.";

  return (
    <Flex direction="column" gap={2}>
      <Text fontSize="xx-large" fontWeight="semibold">
        {title}
      </Text>
      <Text>
        {subtitle}{" "}
        <Link as="span" color="blue.500" onClick={onChange}>
          {linkText}
        </Link>
      </Text>
    </Flex>
  );
};
