import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormControlInput<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder?: string;
  isInvalid: boolean;
  helperText?: string | undefined;
}

export function FormControlInput<T extends FieldValues>({
  name,
  register,
  placeholder,
  isInvalid,
  helperText,
}: FormControlInput<T>) {
  return (
    <FormControl isInvalid={isInvalid}>
      <Input id={name} placeholder={placeholder} {...register(name)} />
      <FormErrorMessage>{helperText}</FormErrorMessage>
    </FormControl>
  );
}
