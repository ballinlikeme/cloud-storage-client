import React, { useCallback, useEffect, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FormControlPasswordInput } from "../../../common/FormControl/FomControlPasswordInput";
import { AuthRedirect } from "./AuthRedirect";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema, AuthType } from "./authForm.schema";
import { FormControlInput } from "../../../common/FormControl/FormControlInput";
import { apiService } from "../../../../modules/RegistrationForm/api/apiService";

export const AuthForm: React.FC = () => {
  const [formType, setFormType] = useState<"sign up" | "sign in">("sign in");
  const [canFormBeSubmitted, setCanFormBeSubmitted] = useState<boolean>(false);

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
    reset,
    formState: { errors, dirtyFields },
  } = useForm<AuthType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      type: formType,
    },
  });

  const onSubmit: SubmitHandler<AuthType> = async (data) => {
    if (isSignIn) {
      await apiService.login(data.email, data.password);
      return;
    }

    await apiService.registration(data.email, data.password, data.name!);
  };

  const errorsCount = Object.values(errors).length;
  const filledFieldsCount = Object.values(dirtyFields).length;

  const checkValidity = useCallback(() => {
    const containErrors = Boolean(Object.keys(errors).length);
    const isFilled = isSignIn
      ? Boolean(dirtyFields.email) && Boolean(dirtyFields.password)
      : Boolean(dirtyFields.name) &&
        Boolean(dirtyFields.surname) &&
        Boolean(dirtyFields.email) &&
        Boolean(dirtyFields.password);

    setCanFormBeSubmitted(!(!containErrors && isFilled));
  }, [errorsCount, filledFieldsCount, isSignIn]);

  useEffect(() => {
    checkValidity();
  }, [checkValidity]);

  useEffect(() => {
    reset();
  }, [isSignIn]);

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
        <Button
          colorScheme="blue"
          type="submit"
          isDisabled={canFormBeSubmitted}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};
