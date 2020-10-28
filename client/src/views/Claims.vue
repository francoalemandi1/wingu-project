<template>
  <div>
    <claim-header />
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column mt-4 is-input-filter">
        <filter-input :subtitle='"Filtrá por reclamo"' />
      </div>
    </div>
    <div class="columns mt-6">
      <div class="column is-2"></div>
      <div class="column is-8">
        <article class="media"  v-for="(communeClaim, index) in communeClaimsById" :key="communeClaim.id+'id'+index">
          <figure class="media-left">
            <p class="image is-64x64">
              {{ communeClaim.area }}
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ communeClaim.title }}</strong>
                <br>
              {{ communeClaim.description }}
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
import FilterInput from '@/components/filterInput.vue';
import ClaimHeader from '@/components/claimHeader.vue';

export default {
  name: 'Reclamos',
  components: {
    FilterInput,
    ClaimHeader
  },
  computed: {
    ...Vuex.mapState(['communeClaimsById']),
  },
  created() {
    this.getCommuneClaimsById(this.$route.params.id);
  },
  beforeDestroy() {
    this.getCommuneClaimsById()
  },
  methods: {
    ...Vuex.mapActions(['getCommuneClaimsById']),
  }
}
</script>

<style scoped>
h1.title,
h2.subtitle {
  text-align: center;
}
.media-content {
  background-color: #e6e5f5;
  border-radius: 9px; 
  padding: 22px;
}

.media-left {
  background-color: rgb(197, 199, 240);
  border-radius: 12px;
  padding: 15px;
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
.is-input-filter {
  position: relative;
  top: 1.5rem;
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