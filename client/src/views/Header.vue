<template>
  <div class="container">
    <nav class="level" @click='goBackHome()'>
      <div class="columns mt-1 is-header">
        <div class="column"></div>
        <div class="level-left">
          <div class="column is-8">
            <div class="level-item">
              <p class="subtitle is-5">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Seal_of_the_Buenos_Aires_City_%282003_-_2006%29.svg/149px-Seal_of_the_Buenos_Aires_City_%282003_-_2006%29.svg.png' class='image is-64x64' />
                <strong>Gobierno de la Ciudad de Buenos Aires</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goBackHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.level {
  cursor: pointer;
}
.subtitle {
  display: flex;
}
strong {
  margin: 8px;
}
img {
  position: relative;
  top: 1rem;
}
@media (max-width: 600px) {
  .container {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .level-item {
    margin: 0;
  }
  img {
    position: relative;
    left: 3vh;
    top: 0;
  }
  .columns {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>