<template>
  <div class="Cart">
    <div class="CloseCartBtn">
      <button class="emitCloseCart" v-on:click="emitCloseCart"></button>
    </div>
    <div class="purchase">
      <h1>CART</h1>
      <cart-item v-for="cartItem in cartItems" v-bind:key="cartItem.id" v-bind:cartItem="cartItem" />
      <button class="payBtn">Take my money</button>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem
  },
  data() {
    return {
      cart: false
    };
  },
  methods: {
    emitCloseCart() {
      this.$emit("close", this.cart);
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style scoped>
.Cart {
  background: darkgray;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
  display: block;
}
.emitCloseCart {
  width: 4rem;
  height: 4rem;
  background: url("../../assets/graphics/bag.svg") no-repeat #38220f;
  background-position: center;
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  border-radius: 10rem;
  margin: 1.5rem 1rem 1rem 17rem;
}
.purchase {
  margin: auto;
  width: 85%;
  background: white;
  color: black;
}
.payBtn {
  background: black;
  color: white;
  width: 60%;
  border-radius: 50px;
  font-size: 18px;
  padding: 10px;
  margin: 30px;
}
</style>>