import { useLayoutEffect, useEffect, useState } from "react";
import { Input, Button, Form, HeaderLogin } from "../components";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

import Logo from "../assets/logo.png";

const loginFormFields = {
  email: "",
  password: "",
};

export function Login() {
  const { email, password, onInputChange } = useForm(loginFormFields);
  const { startLogin, errorMessage } = useAuth();
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    startLogin({ email, password });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      //Swal.fire("Error en la autenticación", errorMessage, "error");
      console.log(errorMessage);
    }
  }, [errorMessage]);

  useLayoutEffect(() => {
    email === "" || password === "" ? setDisabled(true) : setDisabled(false);
  }, [email, password]);

  return (
    <>
      <HeaderLogin>
        <img src={Logo} alt="logo" className="loginLogo" />
      </HeaderLogin>
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="Usuario"
            type="text"
            name="email"
            value={password}
            onChange={onInputChange}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <Button type="submit" disabled={disabled}>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
