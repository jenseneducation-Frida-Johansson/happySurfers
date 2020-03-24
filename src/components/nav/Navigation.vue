<template>
  <div class="Navigation">
    <div class="closeBtn">
      <button class="emitCloseNav" v-on:click="emitCloseNav"></button>
    </div>
    <ul>
      <router-link to="/" tag="li">
        <a v-on:click="emitCloseNav">Menu</a>
      </router-link>
      <router-link to="/about" tag="li">
        <a v-on:click="emitCloseNav">Vårt Kaffe</a>
      </router-link>
      <router-link to="/order" tag="li">
        <a v-on:click="emitCloseNav">Orderstatus</a>
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
  background: #38220f;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
  display: block;
}
.emitCloseNav {
  width: 4rem;
  height: 4rem;
  background: url("../../assets/graphics/close.svg") no-repeat white;
  background-size: 60%;
  background-position: center;
  padding: 1rem;
  border-radius: 10rem;
  margin: 1.5rem 20rem 1rem 1.8rem;
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