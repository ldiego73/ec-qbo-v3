import React, { useRef, useState } from "react";
import {
  Card,
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FieldError,
} from "../styles";
import { Button } from "../../../components";

export function CheckoutForm() {
  const [data, setData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    direccion: "",
  });
  const nombresRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    nombresRef.current.focus();
  }

  function handleInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Nombres *</FormLabel>
          <FormInput
            type="text"
            name="nombres"
            required
            onChange={handleInputChange}
            ref={nombresRef}
          />
          {!data.nombres && (
            <FieldError>Los nombres son campos obligatorios</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Apellidos *</FormLabel>
          <FormInput
            type="text"
            name="apellidos"
            required
            onChange={handleInputChange}
          />
          {!data.apellidos && (
            <FieldError>Los apellidos son campos obligatorios</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Email *</FormLabel>
          <FormInput
            type="email"
            name="email"
            required
            onChange={handleInputChange}
          />
          {!data.email && (
            <FieldError>El correo debe tener un formato valido</FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Dirección</FormLabel>
          <FormInput
            type="text"
            name="direccion"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Enviar</Button>
        </FormGroup>
      </Form>
    </Card>
  );
}
