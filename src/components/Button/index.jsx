import style from "./Button.module.sass";

export default function Button({ onClick, children, type }) {
  return (
    <button onClick={onClick} className={style.Button} type={type} disabled>
      {children}
    </button>
  );
}
