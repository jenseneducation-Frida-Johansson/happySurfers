<template>
  <div class="header">
    <div class="buttons">
      <!--  {{showNav ? 'X' : '='}}  -->
      <button class="show-nav" v-on:click="nav"></button>
      <button class="show-cart" v-on:click="cart">
        <span class="itemsNr" v-if="itemsNr !== 0"> {{ itemsNr }} </span>
      </button>
    </div>
    <app-navigation v-if="showNav" v-on:close="closeNav"></app-navigation>
    <app-cart v-if="showCart" v-on:close="closeCart"></app-cart>
  </div>
</template>

<script>
import Navigation from "./nav/Navigation.vue";
import Cart from "./cart/Cart.vue";
//import showNavPic from "../assets/graphics/navicon.svg";
export default {
  components: {
    appNavigation: Navigation,
    appCart: Cart
  },
  data() {
    return {
      showNav: false,
      showCart: false
    };
  },
  computed: {
    itemsNr() {
      return this.$store.state.itemsNr;
    }
  },
  methods: {
    nav() {
      this.showNav = true;
    },
    cart() {
      this.showCart = true;
    },
    closeNav(nav) {
      this.showNav = nav;
    },
    closeCart(cart) {
      this.showCart = cart;
      //this.showCart = !this.showCart;
    }
  }
};
</script>

<style scoped>
.header {
  background: url("../assets/graphics/graphics-header.svg") no-repeat #f3e4e1;
  height: 7rem;
}
.show-nav,
.show-cart {
  width: 4rem;
  height: 4rem;
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  border-radius: 12rem;
}
.show-nav {
  background: url("../assets/graphics/navicon.svg") no-repeat white;
  background-position: center;
  margin: 1rem 6rem 1rem 0rem;
}
.show-cart {
  background: url("../assets/graphics/bag.svg") no-repeat #38220f;
  background-position: center;
  margin: 1rem 0rem 1rem 6rem;
}
.itemsNr {
  width: 2rem;
  height: 2rem;
  margin: 0 0 3rem 2rem;
  background: brown;
  color: white;
  font-size: 20px;
  border-radius: 5rem;
}
</style>
