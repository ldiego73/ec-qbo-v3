export const nombresValidate = {
  name: "nombres",
  rules: {
    required: {
      value: true,
      message: "Los nombres son requeridos",
    },
    minLength: {
      value: 3,
      message: "El minimo de digitos a ingresar son 3",
    },
  },
};

export const apellidosValidate = {
  name: "apellidos",
  rules: {
    required: {
      value: true,
      message: "Los apellidos son requeridos",
    },
    minLength: {
      value: 3,
      message: "El minimo de digitos a ingresar son 3",
    },
  },
};

export const emailValidate = {
  name: "email",
  rules: {
    minLength: {
      value: 10,
      message: "El minimo de digitos a ingresar son 10",
    },
  },
};

export const direccionValidate = {
  name: "direccion",
  rules: {
    required: {
      value: true,
      message: "Los direccion son requeridos",
    },
    minLength: {
      value: 10,
      message: "El minimo de digitos a ingresar son 10",
    },
  },
};

export const detailDireccionValidate = {
  name: "detalleDireccion",
  rules: {
    required: {
      value: true,
      message: "detalle de la direccion son requeridos",
    },
    minLength: {
      value: 10,
      message: "El minimo de digitos a ingresar son 10",
    },
  },
};

export const numeroCelularValidate = {
  name: "numeroCelular",
  rules: {
    required: {
      value: true,
      message: "El número de celular es requerido",
    },
    minLength: {
      value: 10,
      message: "El minimo de digitos a ingresar son 9",
    },
  },
};

export const distritoValidate = {
  name: "distrito",
  rules: {
    required: {
      value: true,
      message: "El distrito es requerido",
    },
  },
};

export const confirmPasswordValidate = {
  name: "confirm_password",
  rules: {
    required: {
      value: true,
      message: "La confirmación del password es requerido",
    },
    minLength: {
      value: 8,
      message: "La confirmación del password debe tener un minimo de 8 digitos",
    },
    validate(value, password) {
      return (
        value === password ||
        "La confirmación del password debe ser el mismo que ingreso en password"
      );
    },
  },
};
