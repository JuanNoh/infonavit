import style from "./Sidebar.module.sass";

export default function Sidebar({ isOpen, handleLogout }) {
  return (
    <div className={style.Sidebar}>
      <div className="sidebar-body">
        <h3>Sidebar</h3>
        <ul className={style.Body}>
          <li>
            <a href="/" className={style.Link}>
              Benevits
            </a>
            <a href="/" className={style.Link}>
              My Benevits
            </a>
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
