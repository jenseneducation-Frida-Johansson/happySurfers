<template>
  <div class="Order">
    <div class="showOrder" v-if="order.orderNr">
      <h4>Order number #{{ order.orderNr }}</h4>
      <img src="../assets/graphics/drone.svg" alt="deliver" class="orderPic" />
      <h2>Your order is on the way!</h2>
      <h4>{{ order.eta }} minutes</h4>
    </div>
    <div class="noOrder" v-else>
      <img src="../assets/graphics/drone.svg" alt="deliver" class="orderPic" />
      <h2>You have no order</h2>
    </div>
    <button class="backHome" v-on:click="goBack">Ok, cool!</button>
  </div>
</template>

<script>
export default {
  name: "Order",
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
  },
  computed: {
    order() {
      return this.$store.state.order;
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.Order {
  background: #e5674e;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
  display: block;
}
.orderPic {
  margin: 5rem;
}
.backHome {
  width: 60%;
  background: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10rem;
  padding: 0.8rem;
}
</style>
