import * as schema from "yup";

export const CheckoutSchema = schema.object().shape({
  nombres: schema
    .string()
    .required("Debe ingresar los nombres")
    .min(3, "El campo nombres debe tener como minimo 3 digitos"),
  apellidos: schema
    .string()
    .required("Debe ingresar los apellidos")
    .min(3, "El campo apellidos debe tener como minimo 3 digitos"),
  email: schema.string().email("Debe tener un email valido"),
  direccion: schema
    .string("El campo es obligatorio")
    .min(10, "Debe ingresar como minimo 10 digitos"),
});
