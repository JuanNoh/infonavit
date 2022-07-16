import { Input, Button, Form, HeaderLogin } from "../components";
import Logo from "../assets/logo.png";

export function Login() {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  //next input is for the email

  //next input is for the password

  //function que llama a la funcion de login

  return (
    <>
      <HeaderLogin>
        <img src={Logo} alt="logo" className="loginLogo" />
      </HeaderLogin>
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="Usuario"
            type="email"
            name="email"
            onChange={onChange}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            name="password"
            onChange={onChange}
          />
          <Button type="submit" disabled>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
