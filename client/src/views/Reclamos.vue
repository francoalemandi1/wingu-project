<template>
  <div>
    <section class="hero is-info" :style="getBackground">
      <div class="hero-body" >
        <div class="container" >
          <h1 class="title">
            Alerta de reclamos
          </h1>
          <h2 class="subtitle">
            Enterate de los reclamos que vos y tus vecinos/as han llevado a cabo en la comuna.
          </h2>
        </div>
      </div>
    </section>
    <div class="columns mt-6">
      <div class="column is-2"></div>
      <div class="column is-8">
        <article class="media"  v-for='claim in communeClaims' :key='claim.title'>
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ claim.title }}</strong>
                <br>
               {{ claim.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
      <div class="column is-2"></div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';
export default {
  name: 'Reclamos',
  data() {
    return {
      backgroundImage: 'https://www.buenosaires.gob.ar/sites/gcaba/files/9dejulio_2.jpg',
    };
  },
  computed: {
    ...Vuex.mapState(['communeClaims']),

    getBackground() {
      return 'background: url(' + this.backgroundImage + ')'
    }
  },
  mounted() {
    this.getCommuneClaimsById(this.$route.params.id);
  },
  beforeDestroy() {
    this.getCommuneClaimsById(this.$route.params.id);
  },
  methods: {
    ...Vuex.mapActions(['getCommuneClaimsById']),
  },
}
</script>

<style scoped>
h1.title,
h2.subtitle {
  text-align: center;
}
.media-content {
  background-color: #F5F5F5;
  border-radius: 9px; 
  padding: 12px;
}

.hero.is-info{
  margin-top: 5vh;
  background-size: cover !important;
  background-position: center center !important;
}
@media (max-width: 600px) {
  .media {
    margin: 10px;
  }
}
</style>