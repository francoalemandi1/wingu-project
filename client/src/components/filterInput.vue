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
</style>