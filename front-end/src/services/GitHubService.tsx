import http from "../http-common";
import UserData from "../types/types"

class GitHubDataService {
  getData(username: string) {
    return http.get<Array<UserData>>(`/users/${username}`);
  }
}

export default new GitHubDataService();