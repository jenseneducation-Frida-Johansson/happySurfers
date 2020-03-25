<template>
  <div class="HistoryItem">
    <h5>{{ item.orderNr }} .................. {{ item.date }}</h5>
    <p>Total order price ................... {{ item.orderPrice }} kr</p>
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
  text-align: center;
}
</style>
