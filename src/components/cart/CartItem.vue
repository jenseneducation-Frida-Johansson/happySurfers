<template>
  <div class="CartItem">
    <div class="itemDetail">
      <h4>{{ cartItem.title }}</h4>
      <p>{{ cartItem.sumprice }}</p>
    </div>
    <div class="itemAmount">
      <button class="itemPlus" v-on:click="itemPlus"></button>
      <p>{{ cartItem.amount }}</p>
      <button class="itemMin" v-on:click="itemMin"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartItem: Object
  },
  methods: {
    itemPlus() {
      this.$store.dispatch("plusAmount", this.cartItem.id);
    },
    itemMin() {
      if (this.cartItem.amount === 1) {
        this.$store.dispatch("deleteCartItem", this.cartItem.id);
      } else {
        this.$store.dispatch("minusAmount", this.cartItem.id);
      }
    }
  }
};
</script>

<style scoped>
.CartItem {
  display: flex;
  flex-direction: row;
}
.itemDetail {
  width: 70%;
  text-align: left;
  margin-left: 2rem;
}
.itemAmount {
  width: 20%;
  text-align: center;
}
.itemPlus {
  height: 1rem;
  background: url("../../assets/graphics/arrow-up.svg") no-repeat;
  background-position: center;
  border: none;
}
.itemMin {
  height: 1rem;
  background: url("../../assets/graphics/arrow-down.svg") no-repeat;
  background-position: center;
  border: none;
}
</style>
