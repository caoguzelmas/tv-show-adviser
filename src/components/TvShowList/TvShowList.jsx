import { TvShowListItem } from "../TvShowListItem/TvShowListItem";
import s from "./style.module.css";

export function TvShowList({ TvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {TvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TvShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
