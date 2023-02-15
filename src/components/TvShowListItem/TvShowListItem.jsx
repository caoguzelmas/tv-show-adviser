import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
const TITLE_MAX_CHAR = 20;

export function TvShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.title}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.image}
      />
      <div className={s.title}>
        {tvShow.name.length > TITLE_MAX_CHAR
          ? tvShow.name.slice(0, TITLE_MAX_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
