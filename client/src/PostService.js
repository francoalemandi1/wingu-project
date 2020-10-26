import axios from 'axios'

const url = 'http://localhost:5000/api/posts';

class PostService {
  //Get Posts
  static getPosts() {
    /*eslint-disable */
    return new Promise(async (resolve, reject) => {
    /*eslint-enable */
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch(err) {
        reject(err);
      }
    })
  }
  // Create Post
  static insertPost(text) {
    return axios.post(url, {
      text,
    })
  }
  // Get commune by id
  static getCommune(id) {
    return axios.get(`${url}/${id}`);
  }
}

export default PostService;