import style from "./Input.module.sass";

export default function Input({ onChange, placeholder, children }) {
  return <input onChange={onChange} className={style.Input} placeholder={placeholder} />;
}
