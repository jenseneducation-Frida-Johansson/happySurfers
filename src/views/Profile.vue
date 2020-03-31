<template>
  <div class="Profile">
    <img src="../assets/graphics/Profile.svg" alt />

    <h4 class="userName">{{ user.userName }}</h4>
    <p class="userEpost">{{ user.userEpost }}</p>
    <div class="history" v-if="history">
      <h3 class="OrderHistory">Orderhistorik</h3>
      <HistoryItem v-for="item in purchase" v-bind:key="item.id" v-bind:item="item" />
    </div>
    <div class="totalSpend">
      <p>Totalt spenderat</p>
      <p v-if="history">{{ totalSpend }} kr</p>
    </div>
    <div v-if="!history">
      <h2>Ingen orderhistorik</h2>
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
    this.$store.state.bgColor.color = "brown";
    this.$store.state.showCart = false;
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

<style>
.Profile {
  width: 375px;
  height: 812px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #2f2926;
  color: white;
}

.OrderHistory {
  margin-left: -20px;
  font-family: serif;
  font-size: 1.5rem;
}
.history {
  text-align: left;
  width: 85%;
  border-bottom: 1px solid white;
}

.totalSpend {
  width: 85%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
}

.userEpost {
  margin: -30px 0 4rem 0;
}
</style>
