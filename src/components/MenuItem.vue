<template>
  <div class="MenuItem">
    <button class="itemAdd" v-on:click="addItem"></button>
    <div class="item">
      <h4>{{ item.title }}... {{ item.price }} kr</h4>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: Object
  },

  methods: {
    addItem() {
      const newItem = {
        id: this.item.id,
        title: this.item.title,
        price: this.item.price,
        amount: 1,
        sumprice: this.item.price
      };
      this.$store.dispatch("addMenuItem", newItem);
    }
  }
};
</script>

<style scoped>
.MenuItem {
  display: flex;
  flex-direction: row;
}
.item {
  width: 65%;
  text-align: left;
}

h4,
p {
  margin-bottom: -25px;
  margin-top: 30px;
}
.itemAdd {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 3rem;
  margin: 2rem 1rem 1rem 1rem;
  background: url("../assets/graphics/add.svg") no-repeat #38220f;
  background-size: 55%;
  background-position: center;
}
</style>
