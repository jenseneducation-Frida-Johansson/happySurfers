<template>
  <div id="app">
    <LoadingPage />
    <app-header></app-header>
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import LoadingPage from "./components/LoadingPage.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  created() {
    this.$store.dispatch("getMenu");
  },
  components: {
    LoadingPage,
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
#app {
  width: 375px;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f3e4e1;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 40px;
  font-family: serif;
}

h3 {
  font-size: 30px;
  font-family: serif;
  padding: 20px;
}

h4 {
  font-size: 25px;
  font-family: serif;
}
</style>
