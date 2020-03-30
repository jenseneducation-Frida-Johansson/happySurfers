<template>
  <div class="HistoryItem">
    <div class="orderInfo">
      <h5>{{ item.orderNr }}</h5>
      <h6>{{ item.date }}</h6>
    </div>
    <div class="orderPrice">
      <p>total ordersumma</p>
      <p>{{ item.orderPrice }} kr</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryItem",
  props: {
    item: Object
  }
};
</script>

<style>
.HistoryItem {
  border-bottom: 1px solid white;
  opacity: 60%;
}

.orderInfo,
.orderPrice {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
}

.orderInfo {
  margin-top: -15px;
}

.orderPrice {
  margin-top: -30px;
}

p {
  font-size: 12px;
}
</style>
