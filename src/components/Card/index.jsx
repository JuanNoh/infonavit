import style from "./Card.module.sass";
export default function Card({ data }) {
  return (
    <div className={style.Card}>
      <img src={data.ally.mini_logo_full_path} alt="" />
      <p className={style.Description}>
        {data.ally.description.substr(1, 55)} ...{" "}
      </p>
      <p className={style.Date}>{data.expiration_date}</p>
      <button className={style.Button}>Lo quiero</button>
    </div>
  );
}
