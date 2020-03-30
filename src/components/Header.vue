<template>
  <div class="header" v-bind:class="bgcolor.color">
    <div class="buttons">
      <!--  {{showNav ? 'X' : '='}}  -->
      <button class="show-nav" v-on:click="nav"></button>
      <button class="show-cart" v-if="disableCart" v-on:click="cart">
        <div class="itemsNr" v-if="itemsNr !== 0">{{ itemsNr }}</div>
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
    },
    disableCart() {
      return this.$store.state.showCart;
    },
    bgcolor() {
      return this.$store.state.bgColor;
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

<style>
.header {
  height: 7rem;
  width: 100%;
}

.buttons {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
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
}
.show-cart {
  background: url("../assets/graphics/bag.svg") no-repeat #2f2926;
  background-position: center;
}
.itemsNr {
  padding: 7px;
  height: 10px;
  width: 10px;
  margin: 0 0 2rem 2rem;
  background: #e5674e;
  color: white;
  font-size: 15px;
  font-family: sans-serif;
  border-radius: 50%;
}
.pink {
  background: url("../assets/graphics/graphics-header.svg") no-repeat #f3e4e1;
}
.brown {
  background: url("../assets/graphics/graphics-header.svg") no-repeat #2f2926;
}
</style>
