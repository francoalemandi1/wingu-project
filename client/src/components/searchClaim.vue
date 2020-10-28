<template>
  <div class="container">
    <claim-header />
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column mt-6">
        <filter-input :subtitle='"Filtrá por reclamo"' />
      </div>
    </div>
    <div class="columns mt-6">
      <div class="column is-2"></div>
      <div class="column is-8">
        <article class="media"  v-for="filteredClaim in filteredClaims" :key='filteredClaim.id'>
          <figure class="media-left">
            <p class="image is-64x64">
              {{ filteredClaim.area }}
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ filteredClaim.title }}</strong>
                <br>
              {{ filteredClaim.description }}
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
import ClaimHeader from '@/components/claimHeader.vue';
import FilterInput from '@/components/filterInput.vue';

export default {
  name: 'SearchExecuted',
  components: {
    ClaimHeader,
    FilterInput,
  },
  computed: {
    ...Vuex.mapState(['communeClaimsById']),

    inputFilter() {
      return this.$route.query.search;
    },
    filteredClaims() {
      return this.communeClaimsById.filter(a => 
        a.title.toLowerCase().includes(this.inputFilter.toLowerCase()) ||
        a.description.toLowerCase().includes(this.inputFilter.toLowerCase())
      )}
    },
  created() {
    this.getCommuneClaimsById(this.$route.params.id);
  },
  methods: {
    ...Vuex.mapActions(['getCommuneClaimsById']),
  },
}
</script>

<style scoped>
  .media-left {
    background-color: rgb(197, 199, 240);
    border-radius: 12px;
    padding: 15px;
  }
  .media-content {
  background-color: #e6e5f5;
  border-radius: 9px; 
  padding: 22px;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  text-align: center;
}

.is-area {
  align-items: unset !important;
  justify-content: unset !important;
}
@media (max-width: 600px) {
  .media {
    margin: 10px;
  }
  .columns {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>