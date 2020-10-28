<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="level-item is-area">
          <div class="field has-addons">
            <div class="container mr-2">
              <h1 class="subtitle mt-1">
                {{ subtitle }}
              </h1>
            </div>
            <p class="control">
              <input class="input" type="text" placeholder="" v-model='inputFilter'>
            </p>
            <button class='button is-link' @click='searchClaim()'>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputFilter',
  data() {
    return {
      inputFilter: '',
    };
  },
  props: {
    subtitle: { type: String, required: true },
  },
  computed: {
    id() { 
      return this.$route.params.id;
    },
  },
  methods: {
    searchClaim() {
      this.$router.push({ path: `/search/${this.id}`, query: { search: this.inputFilter } });
    }
  }
}
</script>

<style scoped>
  .is-area {
    align-items: unset;
    justify-content: unset;
  }
    @media (max-width: 600px) {
    .is-subtitle {
      position: relative;
      left: 0.75rem;
      margin: 0;
    }
    .control {
      position: relative;
      left: -1rem;
      top: 0.6rem;
    }
    .button {
      position: relative;
      top: 0.6rem;
      left: -0.75rem;
    }
    .columns {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>