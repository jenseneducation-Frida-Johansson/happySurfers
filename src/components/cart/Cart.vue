<template>
  <div class="Cart">
    <div class="CloseCartBtn">
      <button class="emitCloseCart" v-on:click="emitCloseCart">
        <span class="itemsNr" v-if="itemsNr !== 0"> {{ itemsNr }} </span>
      </button>
    </div>
    <div class="purchase" v-if="itemsNr !== 0">
      <h1>Your Order</h1>
      <cart-item
        v-for="cartItem in cartItems"
        v-bind:key="cartItem.id"
        v-bind:cartItem="cartItem"
      />
      <h3 v-if="totalPrice !== 0">Total..............{{ totalPrice }} kr</h3>
      <p>include tax and delivery price</p>
      <button class="payBtn" v-on:click="setorder">Take my money</button>
    </div>
    <div v-else class="noPurchase">
      <h1>You have no order</h1>
      <button class="payBtn" v-on:click="goHome">Go to shop</button>
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
    },
    async setorder() {
      const orderNr = this.$store.state.itemsNr;
      if (orderNr !== 0) {
        await this.$store.dispatch("getorder");
        this.$emit("close", this.cart);
        this.$router.push("/order");
        console.log("order on the way");
      }
    },
    goHome() {
      this.$emit("close", this.cart);
      this.$router.push("/");
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.state.totalPrice;
    },
    itemsNr() {
      return this.$store.state.itemsNr;
    }
  }
};
</script>

<style scoped>
.Cart {
  background: black;
  opacity: 0.9;
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
  border-radius: 12rem;
  margin: 1.5rem 1rem 1rem 17rem;
}
.purchase,
.noPurchase {
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
.itemsNr {
  background: brown;
  color: white;
  font-size: 20px;
  border-radius: 5rem;
}
</style>
