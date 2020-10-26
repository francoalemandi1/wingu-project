<template>
  <div id="app">
    <Header />
    <transition name='fade' mode='out-in'>
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/views/Header.vue';
import Footer from '@/views/Footer.vue';

export  default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(1em);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
</style>
