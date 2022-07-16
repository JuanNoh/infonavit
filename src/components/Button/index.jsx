import style from "./Button.module.sass";

export default function Button({ onClick, children, type, disabled }) {
  console.log(disabled);
  const className = `${style.Button} ${
    disabled ? style.Disabled : style.ButtonPrimary
  }`;
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
}
