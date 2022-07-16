import style from "./Card.module.sass";
export default function Card({ data }) {
  return (
    <div className={style.Card}>
      <img
        src={
          data.type === "locked"
            ? data.vector_full_path
            : data.ally.mini_logo_full_path
        }
        alt=""
      />
      {data.type !== "locked" && (
        <>
          <p className={style.Description}>
            {data.ally.description.substr(1, 55)} ...{" "}
          </p>
          <p className={style.Date}>{data.expiration_date}</p>
        </>
      )}
      {data.type === "locked" && (
        <button className={style.Button}>Lo quiero</button>
      )}
    </div>
  );
}
