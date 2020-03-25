<template>
  <div>
    <h1>ABOUT</h1>
  </div>
</template>

<script>
export default {
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
