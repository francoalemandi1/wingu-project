import Vue from "vue";
import Vuex from "vuex";
import PostService from '@/PostService';
import ClaimsService from '@/ClaimsService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    communes: [],
    results: [],
    communeById: {},
    communeName: '',
    communeInformation: '',
    backgroundImage: '',
    communeArea: '',
    communeClaims: [],
    newClaim: {}
  },
  mutations: {
    obtainCommunes(state, { communes, results }) {
      state.communes = communes;
      state.results = results;
    },
    filterCommune(state, communeById) {
      state.communeById = communeById;
      state.communeName = communeById.data.name;
      state.communeArea = communeById.data.description;
      state.communeInformation = communeById.data.information;
      state.backgroundImage = communeById.data.backgroundImage;
    },
    filterCommuneById(state, communeClaims) {
      state.communeClaims = communeClaims;
    },
    addNewClaim(state, newClaim) {
      state.newClaim = newClaim;
    }
  },
  actions: {
    // ---------------COMUNAS----------- //
    // Trae el listado de comunas
    getCommunes: async function ({ commit }) {
      const communes = await PostService.getPosts();
      let perChunk = 4 // items per chunk    
      let inputArray = communes;
      const results = inputArray.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/perChunk)
        if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }
        resultArray[chunkIndex].push(item)
        return resultArray
      }, [])
      commit('obtainCommunes', { communes, results });
    },
    // Trae la comuna por ID para desplegar data referida solo a esa comuna.
    getCommuneById: async function ({ commit }, payload) {
      const communeByid = await PostService.getCommune(payload);
      commit('filterCommune', communeByid)
    },

    // ------------------RECLAMOS--------------  // 
    // Trae el listado de reclamos por comuna según ID.
    getCommuneClaimsById: async function ({ commit }, payload) {
      const communeClaims = await ClaimsService.getClaimsById(payload);
      commit('filterCommuneById', communeClaims )
    },
    // Inserta un reclamo.
    insertClaim: async function ({ commit }, payload) {
      const newClaim = await ClaimsService.insertClaim(payload);
      commit('addNewClaim', newClaim)
    }
  },
});
