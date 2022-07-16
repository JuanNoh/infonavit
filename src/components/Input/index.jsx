import style from "./Input.module.sass";

export default function Input({ type = "text", name, onChange, placeholder }) {
  return (
    <input
      onChange={onChange}
      className={style.Input}
      placeholder={placeholder}
      name={name}
      type={type}
      required
    />
  );
}
