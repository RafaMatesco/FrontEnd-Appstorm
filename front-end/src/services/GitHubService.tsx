import http from "../http-common";
import { Userprops } from "../types/UserType"

class GitHubDataService {

  getUserData(username: string) {
    return http.get<Userprops>(`/users/${username}`);
  }
  getReposData(username: string) {
    return http.get(`/users/${username}/repos`);
  }

}

export default new GitHubDataService();