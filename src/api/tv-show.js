import axios from "axios";
import { FAKE_POPULARS , FAKE_RECOMMENDATIONS} from "./fake_data";
// const BASE_URL = "https://api.themoviedb.org/3/";
// const API_KEY_PARAM = "?api_key=0e7827ae46c663d8305b7bb771034721";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmFlOTExZGNjODFkNzQzODRjOTQ0NTAxOTkzZWNmZiIsInN1YiI6IjY2MzVkOTVlODNlZTY3MDEyNzQxNjZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kBuvTroVQtQlyM9R_Wzq1Kp12N2iON4g9LxOqP4RoY'
  }
};
 
export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1' , options);
    console.log(response?.data?.results);
    return response?.data?.results;
   // return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
   const response = await axios(`https://api.themoviedb.org/3/tv/${tvShowId}/recommendations` , options);
    console.log(response?.data?.results);
    return response?.data?.results;

    //return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios(`https://api.themoviedb.org/3/search/tv?query=${title}&include_adult=true&language=en-US&page=1` , options);
    return response.data.results;
  }
}
