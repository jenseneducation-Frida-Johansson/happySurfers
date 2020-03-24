<template>
  <div class="MenuItem">
    <button class="itemAdd" v-on:click="addItem"></button>
    <div class="item">
      <h3>{{item.title}}...... {{item.price}} kr</h3>
      <p>{{item.desc}}</p>
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
      const itemInfo = {
        id: this.item.id,
        title: this.item.title,
        price: this.item.price,
        amount: 1
      };
      this.$store.state.cart.push(itemInfo);
      console.log(this.item.title + " added");
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
.itemAdd {
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  margin: 2rem 1rem 1rem 1rem;
  background: url("../assets/graphics/add.svg") no-repeat #38220f;
  background-size: 60%;
  background-position: center;
}
</style>