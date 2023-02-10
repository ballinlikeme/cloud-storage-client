import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormControlInput<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  isInvalid: boolean;
  helperText?: string | undefined;
}

export function FormControlPasswordInput<T extends FieldValues>({
  name,
  register,
  isInvalid,
  helperText,
}: FormControlInput<T>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisibilityChange = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <FormControl isInvalid={isInvalid}>
      <InputGroup>
        <Input
          id="password"
          placeholder="Password"
          type={isVisible ? "text" : "password"}
          {...register(name)}
        />
        <InputRightAddon onClick={handleVisibilityChange} cursor="pointer">
          {isVisible ? <ViewOffIcon /> : <ViewIcon />}
        </InputRightAddon>
      </InputGroup>
      <FormErrorMessage>{helperText}</FormErrorMessage>
    </FormControl>
  );
}
