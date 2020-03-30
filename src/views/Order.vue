<template>
  <div class="Order">
    <div class="showOrder" v-if="order.orderNr">
      <h4>Order number #{{ order.orderNr }}</h4>
      <img src="../assets/graphics/drone.svg" alt="deliver" class="orderPic" />
      <h2>Din beställning är på väg!</h2>
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

<style>
.Order {
  width: 375px;
  height: 100%;
  margin-top: -115px;
  background: #e5674e;
  color: white;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 40px;
}
.orderPic {
  margin: 2rem;
}
.backHome {
  width: 60%;
  background: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10rem;
  padding: 0.8rem;
}

h2 {
  font-size: 2.5rem;
  font-family: serif;
  padding: 0 40px 0 40px;
}
</style>
