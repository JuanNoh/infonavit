import style from "./Form.module.sass";

export default function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className={style.Form}>
      {children}
    </form>
  );
}
