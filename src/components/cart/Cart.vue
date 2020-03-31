<template>
  <div class="Cart">
    <div v-if="show">
      <LoadingPage class="LoadingPage" />
    </div>
    <div class="CloseCartBtn">
      <button class="emitCloseCart" v-on:click="emitCloseCart">
        <div class="itemsNr" v-if="itemsNr !== 0">{{ itemsNr }}</div>
      </button>
    </div>

    <div class="purchase" v-if="itemsNr !== 0">
      <h3>Din beställning</h3>
      <div class="yourOrder">
        <cart-item
          v-for="cartItem in cartItems"
          v-bind:key="cartItem.id"
          v-bind:cartItem="cartItem"
        />
        <h5 v-if="totalPrice !== 0">Total........................... {{ totalPrice }} kr</h5>
        <p>inkl moms + drönarleverans</p>
      </div>
      <button @click="show = true" class="payBtn" v-on:click="setorder">Take my money!</button>
    </div>
    <div v-else class="noPurchase">
      <h3>Du har ingen beställning</h3>
      <button class="payBtn" v-on:click="goHome">Go to shop</button>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
    LoadingPage: () => import("../LoadingPage.vue")
  },

  data() {
    return {
      cart: false,
      show: false
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
      }
    },
    goHome() {
      this.$emit("close", this.cart);
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
  width: 375px;
  height: 120%;
  margin-top: -95px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 2;
  cursor: pointer;
  display: block;
}
.emitCloseCart {
  width: 4rem;
  height: 4rem;
  background: url("../../assets/graphics/bag.svg") no-repeat #2f2926;
  background-position: center;
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  border-radius: 12rem;
  border: none;
  margin: 1rem 0 1rem 17.6rem;
}
.purchase,
.noPurchase {
  margin: auto;
  width: 90%;
  background: white;
  color: black;
  border-radius: 2px;
}
.payBtn {
  background: #2f2926;
  color: white;
  width: 60%;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  margin: 30px;
  font-family: serif;
}

.yourOrder {
  width: 85%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 20px 0 20px;
}

h5 {
  font-size: 24px;
  font-family: serif;
}

.LoadingPage {
  animation-duration: 100s;
}
</style>
