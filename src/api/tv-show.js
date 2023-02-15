import axios from "axios";
import { BASE_URL, API_KEY } from "../config";
import { FAKE_POPULARS } from "./fake-data";

export class TvShowAPI {
  static async fetchPopulars() {
    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);

    // console.log(response.data.results);
    // return response.data.results;
    return FAKE_POPULARS;
  }
}
