import s from "./style.module.css";

export function Logo({ title, subtitle, image }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.image} src={image} />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}
