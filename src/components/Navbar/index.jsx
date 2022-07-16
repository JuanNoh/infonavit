import style from "./Navbar.module.sass";
import Logo from "../../assets/logo.png";
export default function Navbar({ children, handleClick }) {
  return (
    <div className={style.Navbar}>
      <button className={style.Hamburger} onClick={() => handleClick()}>
        <div className={style.HamburgerContent}></div>
        <div className={style.HamburgerContent}></div>
        <div className={style.HamburgerContent}></div>
      </button>
      <img src={Logo} className={style.Logo} alt="logo" />
      {children}
    </div>
  );
}
