<template>
  <div class="container">
    <app-navigation></app-navigation>
    <app-cart></app-cart>
  </div>
</template>

<script>
import Navigation from "./nav/Navigation.vue";
import Cart from "./cart/Cart.vue";
export default {
  components: {
    appNavigation: Navigation,
    appCart: Cart
  }
};
</script>

<style scoped>
.container {
  border: 1px solid black;
}
</style>