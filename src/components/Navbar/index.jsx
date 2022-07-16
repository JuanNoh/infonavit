import style from "./Navbar.module.sass";
import Logo from "../../assets/logo.png";
export default function Navbar({ children, handleClick }) {
  return (
    <div className={style.Navbar}>
      <button onClick={() => handleClick()}>Abrir</button>
      <img src={Logo} className={style.Logo} alt="logo" />
      {children}
    </div>
  );
}
