import Vue from "vue";
import Vuex from "vuex";
import CommunesService from '@/CommunesService';
import ClaimsService from '@/ClaimsService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    communes: [],
    communeById: {},
    communeName: '',
    communeInformation: '',
    backgroundImage: '',
    communeArea: '',
    communeClaimsById: [],
    newClaim: {},
  },
  mutations: {
    obtainCommunes(state, { communes }) {
      state.communes = communes;
    },

    // Filtra
    filterCommune(state, communeById) {
      state.communeById = communeById;
      state.communeName = communeById.data.name;
      state.communeArea = communeById.data.description;
      state.communeInformation = communeById.data.information;
      state.backgroundImage = communeById.data.backgroundImage;
    },
    // Filtra comuna por id - Deriva de getCommunesClaimsById en actions.
    filterCommuneClaimsById(state, communeClaimsById) {
      state.communeClaimsById = communeClaimsById;
    },
    // Agrega un nuevo reclamo - Deriva de insertClaim en actions.
    addNewClaim(state, newClaim) {
      state.newClaim = newClaim;
    },
  },
  actions: {
    // ---------------COMUNAS----------- //
    // Trae el listado de comunas
    getCommunesList: async function ({ commit }) {
      const communes = await CommunesService.getCommunesList();
      commit('obtainCommunes', { communes });
    },
    // Trae la comuna por ID para desplegar data referida solo a esa comuna.
    getCommuneById: async function ({ commit }, payload) {
      const communeByid = await CommunesService.getCommuneByid(payload);
      commit('filterCommune', communeByid)
    },
    // ------------------RECLAMOS--------------  // 
    // Trae el listado de reclamos por comuna según ID.
    getCommuneClaimsById: async function ({ commit }, payload) {
      const communeClaimsById = await ClaimsService.getClaimsById(payload);
      commit('filterCommuneClaimsById', communeClaimsById )
    },
    // Inserta un reclamo.
    insertClaim: async function ({ commit }, payload) {
      const newClaim = await ClaimsService.insertClaim(payload);
      commit('addNewClaim', newClaim)
    }
  },
});
