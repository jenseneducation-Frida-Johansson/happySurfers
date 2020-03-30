<template>
  <div class="Footer" v-bind:class="bgcolor.color"></div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    bgcolor() {
      return this.$store.state.bgColor;
    }
  }
};
</script>

<style scoped>
.Footer {
  height: 4.4rem;
}
.pink {
  background: url("../assets/graphics/graphics-footer.svg") no-repeat #f3e4e1;
}
.brown {
  background: url("../assets/graphics/graphics-footer.svg") no-repeat #2f2926;
}
</style>
