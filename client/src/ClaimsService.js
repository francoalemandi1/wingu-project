import axios from 'axios'

const url = 'http://localhost:5000/api/claims';

class ClaimsService {
  static getClaimsById(id) {
    /*eslint-disable */
    return new Promise(async (resolve, reject) => {
    /*eslint-enable */
      try {
        const res = await axios.get(`${url}/${id}`);
        const data = res.data;
        resolve(data);
      } catch(err) {
        reject(err);
      }
    })
  }
  // Create claim
  static insertClaim(claim) {
    return axios.post(url, claim);
  }
}

export default ClaimsService;