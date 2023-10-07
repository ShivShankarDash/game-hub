import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ca8b33ceba8e4d36989db31d4395608a",
  },
});
