import { StarRating } from "../StarRating/StarRating";
import s from "./style.module.css";

export function TvShowDetail({ tvShow }) {
  console.log(tvShow);

  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <StarRating rating={tvShow.vote_average} />
        <span className={s.rating}>{tvShow.vote_average / 2} / 10</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
