import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  }
});