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
  distritoValidate,
  emailValidate,
  direccionValidate,
  numeroCelularValidate,
  detailDireccionValidate,
} from "../core";

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  function handleEnviar(data) {
    console.log(data);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit(handleEnviar)}>
        <FormGroup>
          <FormLabel>Nombre</FormLabel>
          <FormInput
            type="text"
            autoComplete="off"
            placeholder="Ingresar tu nombre"
            {...register(nombresValidate.name, { ...nombresValidate.rules })}
          />
          {errors.nombres && <FieldError>{errors.nombres.message}</FieldError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Apellidos</FormLabel>
          <FormInput
            type="text"
            autoComplete="off"
            placeholder="Ingresar tus apellidos"
            {...register(apellidosValidate.name, {
              ...apellidosValidate.rules,
            })}
          />
          {errors.apellidos && (
            <FieldError>{errors.apellidos.message}</FieldError>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel>Distrito</FormLabel>
          <FormSelect {...register(distritoValidate.name)}>
            <option value="1">ATE</option>
            <option value="2">La Molina</option>
            <option value="3">Santa Anita</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Dirección</FormLabel>
          <FormInput
            type="text"
            placeholder="Ingresar tu dirección"
            {...register(direccionValidate.name, {
              ...direccionValidate.rules,
            })}
          />
          {errors.direccion && (
            <FieldError>{errors.direccion.message}</FieldError>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel>Detalle de la dirección</FormLabel>
          <FormInput
            type="text"
            placeholder="Piso 1/Dpto.801"
            {...register(detailDireccionValidate.name, {
              ...detailDireccionValidate.rules,
            })}
          />
          {errors.direccion && (
            <FieldError>{errors.detalleDireccion.message}</FieldError>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel>Número celular</FormLabel>
          <FormInput
            type="number"
            placeholder="Ingresa tu número celular"
            {...register(numeroCelularValidate.name, {
              ...numeroCelularValidate.rules,
            })}
          />
          {errors.direccion && (
            <FieldError>{errors.numeroCelular.message}</FieldError>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel>Correo electrónico</FormLabel>
          <FormInput
            type="email"
            placeholder="Ingresa tu correo electrónico"
            {...register(emailValidate.name, { ...emailValidate.rules })}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </FormGroup>

        <FormGroup>
          <FormLabel>Notas del pedido (opcional)</FormLabel>
          <FormInput
            type="textarea"
            placeholder="Ingresa  notas que quieras agregar a tu pedido"
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Enviar</Button>
        </FormGroup>
      </Form>
    </Card>
  );
}
