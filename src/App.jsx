import { useEffect, useState } from "react";
import { TvShowAPI } from "./api/tv-show";
import { Logo } from "./components/Logo/Logo";
import { TvShowDetail } from "./components/TvShowDetail/TvShowDetail";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";
import logoImage from "./assets/images/logo.png";
import { TvShowListItem } from "./components/TvShowListItem/TvShowListItem";
import { TvShowList } from "./components/TvShowList/TvShowList";

export function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopularTvShows() {
    const popularTvShowList = await TvShowAPI.fetchPopulars();
    console.log(popularTvShowList);

    if (popularTvShowList.length > 0) {
      setCurrentTvShow(popularTvShowList[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationsListResponse = await TvShowAPI.fetchRecommendations(
      tvShowId
    );

    if (recommendationsListResponse.length > 0) {
      setRecommendationList(recommendationsListResponse.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopularTvShows();
  }, []);

  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  console.log(recommendationList);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logoImage}
              title="WhatToWatch"
              subtitle="WhatToWatch COE"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTvShow && <TvShowList TvShowList={recommendationList} />}
      </div>
    </div>
  );
}
