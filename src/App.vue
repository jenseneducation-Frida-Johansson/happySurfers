<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  created() {
    this.$store.dispatch("getMenu");
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
#app {
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f3e4e1;
  text-align: center;
  color: #2c3e50;
}
</style>
