import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ca8b33ceba8e4d36989db31d4395608a",
  },
});
