import s from "./style.module.css";

export function TvShowDetail({ tvShow }) {
  console.log(tvShow);

  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating}>{tvShow.vote_average}</div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
