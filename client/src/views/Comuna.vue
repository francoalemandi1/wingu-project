<template>
  <div class="template">
    <section class="hero mt-4" :style="getBackground">
      <div class="columns">
        <div class="column ml-5">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-title-main">
                {{ communeName }}
              </h1>
              <h2 class="subtitle is-subtitle-main">
                {{ communeInformation }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="columns m-5">
      <div class="column is-3"></div>
      <div class="column is-3">
        <div class="card" @click="cardModal()">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <i class="fas fa-edit fa-2x"></i>
              </div>
              <div class="media-content">
                <p class="title is-4 is-size-6">Hacer un reclamo</p>
                <p class="content is-size-7">
                  Si estás teniendo algún problema con alguno de los servicios públicos o consideras que hay algunos aspectos en los que debemos mejorar, completá el formulario para iniciar tu reclamo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card-container">
          <div class="card" @click='goToClaimsList()'>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <i class="fas fa-list-alt fa-2x"></i>
                </div>
                <div class="media-content">
                  <p class="title is-4 is-size-6">Listado de reclamos</p>
                  <p class="content is-size-7">
                    Aquí podrás encontrar todos los reclamos que los/as vecinos/as han realizado en tu comuna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3"></div>
    </div>
    <Modal :isComponentModalActive='isComponentModalActive'/>
  </div>
</template>D

<script>
import Vuex from 'vuex';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Comuna',
  components: {
    Modal,
  },
  data() {
    return {
      isComponentModalActive: false,
    }
  },
  computed: {
    ...Vuex.mapState(['communeName', 'communeInformation', 'backgroundImage']),
    getBackground() {
      return 'background: url(' + this.backgroundImage + ')';
    },
  },
  mounted() {
    this.getCommuneById(this.$route.params.id);
  },
  beforeDestroy() {
    this.getCommuneById(this.$route.params.id);
  },
  methods: {
    ...Vuex.mapActions(['getCommuneById']),
    cardModal() {
      this.isComponentModalActive = true;
    },
    goToClaimsList() {
      this.$router.push(`reclamos/${this.$route.params.id}`)
    },
  },
}
</script>

<style scoped>
.hero {
  max-width: 100%;
  max-height: 100%;
}
.hero-body {
  text-align: unset !important;
}

.card {
  min-height: 200px;
  cursor: pointer;
  border: solid 1px rgb(197, 197, 197);
}
.card :hover,
.card-container :hover {
  background: #f3faff;
}
.is-title-main,
.is-subtitle-main {
  color: #fff;
  text-shadow: 0 2px 2px rgba(0,0,0,.5);
}

.is-claims{
  position: relative;
}

.notification{
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;
  font-size: 13px;
  background-color: #fff;
}

.hero {
  background-size: cover !important;
  background-position: center center !important;
}
@media (max-width: 600px) {
  .fields.has-addons,
  .subtitle {
    margin-left: 10px;
  }
  .hero {
    margin: 10px;
  }
}
</style>