<template>
  <div class="Menu">
    <h1>Meny</h1>
    <MenuItem v-for="item in menu" v-bind:key="item.id" v-bind:item="item" />
  </div>
</template>

<script>
import MenuItem from "../components/MenuItem.vue";
export default {
  name: "Menu",
  components: {
    MenuItem
  },
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
    this.$store.state.showCart = true;
    this.$store.state.bgColor.color = "pink";
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  }
};
</script>

<style scoped>
.Menu {
  background: #f3e4e1;
  padding: 15px;
}
</style>
