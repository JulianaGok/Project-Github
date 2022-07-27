var axios = require("axios");

export const searchRepo = async (repo) => {
  try {
      let url = `https://api.github.com/users/ + username/repos/${repo.name}`
      const response = await fetch(url)
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}
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