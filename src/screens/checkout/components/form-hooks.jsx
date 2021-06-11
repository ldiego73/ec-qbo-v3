import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  FormTextArea,
  FieldError,
} from "../styles";
import { Button } from "../../../components";
import {
  nombresValidate,
  apellidosValidate,
  emailValidate,
  direccionValidate,
  confirmPasswordValidate,
} from "../core";

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });
  const password = useRef({});

  password.current = watch("password", "");

  function handleEnviar(data) {
    console.log(data);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit(handleEnviar)}>
        <FormGroup>
          <FormLabel>Nombres *</FormLabel>
          <FormInput
            type="text"
            autoComplete="off"
            {...register(nombresValidate.name, { ...nombresValidate.rules })}
          />
          {errors.nombres && <FieldError>{errors.nombres.message}</FieldError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Apellidos *</FormLabel>
          <FormInput
            type="text"
            autoComplete="off"
            {...register(apellidosValidate.name, {
              ...apellidosValidate.rules,
            })}
          />
          {errors.apellidos && (
            <FieldError>{errors.apellidos.message}</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Email *</FormLabel>
          <FormInput
            type="email"
            {...register(emailValidate.name, { ...emailValidate.rules })}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Dirección</FormLabel>
          <FormInput
            type="text"
            {...register(direccionValidate.name, {
              ...direccionValidate.rules,
            })}
          />
          {errors.direccion && (
            <FieldError>{errors.direccion.message}</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="text"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <FieldError>El password es requerido</FieldError>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <FieldError>
              El password debe tener como minimo 8 digitos
            </FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Confirmar Password</FormLabel>
          <FormInput
            type="text"
            {...register(confirmPasswordValidate.name, {
              required: confirmPasswordValidate.rules.required,
              minLength: confirmPasswordValidate.rules.minLength,
              validate(value) {
                return confirmPasswordValidate.rules.validate(
                  value,
                  password.current
                );
              },
            })}
          />
          {errors.confirm_password && (
            <FieldError>{errors.confirm_password.message}</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <Button type="submit">Enviar</Button>
        </FormGroup>
      </Form>
    </Card>
  );
}
