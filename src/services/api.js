var axios = require("axios");
class Api {
  getByUsername(username) {
    return axios.get("https://api.github.com/users/" + username);
  }

  getReposByUsername(username) {
    return axios.get("https://api.github.com/users/" + username + "/repos");
  }

//  handleDelete(username) {
//   return  axios.delete("https://api.github.com/users/" + username);
// }
}

export default new Api();
