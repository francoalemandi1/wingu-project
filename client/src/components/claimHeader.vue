<template>
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
</template>

<script>
export default {
  name: 'ClaimHeader',
  data() {
    return {
      backgroundImage: 'https://www.buenosaires.gob.ar/sites/gcaba/files/9dejulio_2.jpg',
    };
  },
  computed: {
    getBackground() {
      return 'background: url(' + this.backgroundImage + ')'
    },
  }
}
</script>

<style scoped>
  .hero.is-info{
    margin-top: 5vh;
    background-size: cover !important;
    background-position: center center !important;
  }
  h1.title,
  h2.subtitle {
    text-align: center;
  }
  @media (max-width: 600px) {
    .container[data-v-d9ae3272] {
        display: flex;
        justify-content: center;
        text-align: center;
        position: relative;
        left: 0 !important;
    }
}
</style>
