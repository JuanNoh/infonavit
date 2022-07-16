import style from "./Sidebar.module.sass";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Logo from "../../assets/logo.png";

export default function Sidebar({ isOpen, setIsOpen, handleLogout }) {
  const handleOutsideClick = () => {
    setIsOpen(false);
  };
  const ref = useOutsideClick(handleOutsideClick);

  const className = `${style.Sidebar} ${isOpen ? style.SidebarOpen : ""}`;
  return (
    <div className={className} ref={ref}>
      <div>
        <img className={style.Logo} src={Logo} alt="Logo" />
        <ul className={style.Body}>
          <li>
            <Link to="/" className={style.Link}>
              Benevits
            </Link>
            <Link to="/my-benevits" className={style.Link}>
              My Benevits
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.Footer}>
        <button className={style.Link} onClick={() => handleLogout()}>
          Cerrar sesion
        </button>
      </div>
    </div>
  );
}
