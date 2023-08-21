import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  }
});