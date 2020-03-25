<template>
  <div class="Profile">
    <img src="../assets/graphics/Profile.svg" alt="" />
    <h2>{{ user.userName }}</h2>
    <p>{{ user.userEpost }}</p>
    <div class="history" v-if="history">
      <h2>Order History</h2>
      <HistoryItem
        v-for="item in purchase"
        v-bind:key="item.id"
        v-bind:item="item"
      />
    </div>
    <h2 v-if="history">Total spend: {{ totalSpend }} kr</h2>

    <div v-if="!history">
      <h2>There's no purchase history</h2>
    </div>
  </div>
</template>

<script>
import HistoryItem from "../components/history/HistoryItem.vue";
export default {
  name: "Profile",
  components: {
    HistoryItem
  },
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
  },
  computed: {
    history() {
      const history = localStorage.getItem("userHistory");
      return history;
    },
    user() {
      const getUser = localStorage.getItem("user");
      const user = JSON.parse(getUser);

      return user;
    },
    purchase() {
      const getPurchase = localStorage.getItem("userHistory");
      const purchase = JSON.parse(getPurchase);
      return purchase;
    },
    totalSpend() {
      const getPurchase = localStorage.getItem("userHistory");
      const purchase = JSON.parse(getPurchase);
      var totalSpend = 0;
      purchase.forEach(item => {
        totalSpend += item.orderPrice;
      });
      return totalSpend;
    }
  }
};
</script>

<style scoped>
.Profile {
  height: 650px;
}
.history {
  text-align: left;
  border-bottom: 3px solid black;
}
</style>
