import http from "../http-common";
import { Userprops } from "../types/types"

class GitHubDataService {
  getData(username: string) {
    return http.get<Userprops>(`/users/${username}`);
  }
}

export default new GitHubDataService();