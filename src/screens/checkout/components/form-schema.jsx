import { yupResolver } from "@hookform/resolvers/yup";
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
  CheckoutSchema,
} from "../core";

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(CheckoutSchema) });

  function handleEnviar(data) {
    console.log(data);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit(handleEnviar)}>
        <FormGroup>
          <FormLabel>Nombres *</FormLabel>
          <FormInput type="text" autoComplete="off" {...register("nombres")} />
          {errors.nombres && <FieldError>{errors.nombres.message}</FieldError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Apellidos *</FormLabel>
          <FormInput
            type="text"
            autoComplete="off"
            {...register("apellidos")}
          />
          {errors.apellidos && (
            <FieldError>{errors.apellidos.message}</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Email *</FormLabel>
          <FormInput type="email" {...register("email")} />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Dirección</FormLabel>
          <FormInput type="text" {...register("direccion")} />
          {errors.direccion && (
            <FieldError>{errors.direccion.message}</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <Button type="submit">Enviar</Button>
        </FormGroup>
      </Form>
    </Card>
  );
}
