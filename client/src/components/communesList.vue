<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title">
            Elegí tu comuna
          </h1>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column">
        <div class="level-item is-area">
          <div class="field has-addons">
            <div class="container mr-2">
              <h1 class="subtitle mt-1">
                Buscá tu barrio
              </h1>
            </div>
            <p class="control">
              <input class="input" type="text" placeholder="" v-model='communeFilter'>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="columns" v-for='(result, index) in results' :key='index'>
        <div class="column is-3 is-column-commune" v-for='(commune, index) in result' :key='index'>
          <div class="card mb-6" @click='goToCommune(commune.id)'>
            <div class="card-image">
              <figure class="image is-3by2">
                <img :src="commune.image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title is-4">{{ commune.name }}</p>
                  <p class="subtitle is-6">{{ commune.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  data() {
    return {
      communeFilter: '',
    };
  },
  computed: {
    ...Vuex.mapState(['communes', 'results']),
    filteredCommunes() {
      if(this.communeFilter === '') {
        return this.result;
      } else {
        return this.result.filter(a => 
          a.name.toLowerCase().includes(this.communeFilter.toLowerCase()) ||
          a.description.toLowerCase().includes(this.communeFilter.toLowerCase())
        )
      }
    },
  },
  mounted() {
    this.getCommunes();
  },
  methods: {
    ...Vuex.mapActions(['getCommunes']),
    ...Vuex.mapMutations(['obtainCommunes']),
    goToCommune(id) {
      this.$router.push(`comuna/${id}`)
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  background: #fff;
  min-height: 325px;
}
.is-area {
  align-items: unset;
  justify-content: unset;
}

.is-column-commune :hover {
  background: #f3faff;
}

@media (max-width: 600px) {
  .fields.has-addons,
  .subtitle {
    margin-left: 10px;
  }
  .card-container {
    margin: 20px;
  }
}
</style>