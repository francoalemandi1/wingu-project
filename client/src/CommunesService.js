import axios from 'axios'

const url = 'http://localhost:5000/api/posts';

class CommunesService {
  //Get communes list
  static getCommunesList() {
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
  // Get a commune by id
  static getCommuneByid(id) {
    return axios.get(`${url}/${id}`);
  }
}

export default CommunesService;