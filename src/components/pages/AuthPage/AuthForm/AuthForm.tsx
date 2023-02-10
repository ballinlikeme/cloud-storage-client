import React, { useEffect, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FormControlPasswordInput } from "../../../common/FormControl/FomControlPasswordInput";
import { AuthRedirect } from "./AuthRedirect";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema, AuthType } from "./authForm.schema";
import { FormControlInput } from "../../../common/FormControl/FormControlInput";

export const AuthForm: React.FC = () => {
  const [formType, setFormType] = useState<"sign up" | "sign in">("sign in");

  const isSignIn = formType === "sign in";

  const handleVariantChange = () => {
    const newValue = formType === "sign in" ? "sign up" : "sign in";
    setFormType(newValue);
    setValue("type", newValue);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      type: formType,
    },
  });

  const onSubmit: SubmitHandler<AuthType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Flex direction="column" gap={6}>
        <AuthRedirect isSignIn={isSignIn} onChange={handleVariantChange} />
        {!isSignIn && (
          <Flex direction="row" gap={6}>
            <FormControlInput
              isInvalid={Boolean(errors.name?.message)}
              register={register}
              name="name"
              helperText={errors.name?.message}
              placeholder="Name"
            />
            <FormControlInput
              isInvalid={Boolean(errors.surname?.message)}
              register={register}
              name="surname"
              helperText={errors.surname?.message}
              placeholder="Surname"
            />
          </Flex>
        )}
        <FormControlInput
          isInvalid={Boolean(errors.email?.message)}
          register={register}
          name="email"
          helperText={errors.email?.message}
          placeholder="Email"
        />
        <FormControlPasswordInput
          register={register}
          isInvalid={Boolean(errors.password?.message)}
          name="password"
          helperText={errors.password?.message}
        />
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};
