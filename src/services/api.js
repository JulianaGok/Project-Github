var axios = require("axios");

// export const searchRepo = async (input) => {
//   try {
//       let url = `https://api.github.com/repo/{user.login}/${input}`
//       const response = await fetch(url)
//       return await response.json()
//   } catch (error) {
//       console.log("error: ", error)
//   }
// }

export const searchRepo = async (repo) => {
  try {
      let url = `https://api.github.com/repo/{user.login}/${repo}`
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
//   deleteByUsername(username) {
//   return  axios.get("https://api.github.com/users/");
// }
}

export default new Api();