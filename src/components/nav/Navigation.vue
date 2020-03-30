<template>
  <div class="Navigation">
    <div class="closeBtn">
      <button class="emitCloseNav" v-on:click="emitCloseNav"></button>
    </div>
    <ul>
      <router-link to="/" tag="li">
        <a v-on:click="emitCloseNav">Meny</a>
      </router-link>
      <router-link to="/about" tag="li">
        <a v-on:click="emitCloseNav">Vårt Kaffe</a>
      </router-link>
      <router-link to="/order" tag="li">
        <a v-on:click="emitCloseNav">Orderstatus</a>
      </router-link>
      <router-link to="/me" tag="li">
        <a v-on:click="emitCloseNav">Min profil</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      nav: false
    };
  },
  methods: {
    emitCloseNav() {
      this.$emit("close", this.nav);
    }
  }
};
</script>

<style scoped>
.Navigation {
  display: block;
  width: 375px;
  height: 120%;
  margin-top: -95px;
  background: #2f2926;
  position: absolute;
  z-index: 9999;
  cursor: pointer;
  font-family: serif;
}
.emitCloseNav {
  width: 4rem;
  height: 4rem;
  background: url("../../assets/graphics/close.svg") no-repeat white;
  background-size: 40%;
  background-position: center;
  padding: 1rem;
  border-radius: 10rem;
  margin: 15px 290px 0 15px;
}
ul {
  list-style-type: none;
}
li {
  font-size: 30px;
  font-weight: bold;
  padding: 2rem;
}
a {
  text-decoration: none;
  color: white;
}
</style>
