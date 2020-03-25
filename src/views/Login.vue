<template>
  <div class="Login">
    <h2>Welcome to AirBean-family!</h2>
    <p>Create an account to see your purchase history</p>
    <div class="userInfo">
      <label for="name">Name</label>
      <input
        type="text"
        class="name"
        id="name"
        placeholder="Your Name"
        v-model="userName"
      />
      <label for="epost">Epost</label>
      <input
        type="text"
        class="epost"
        id="epost"
        placeholder="E-mail address"
        v-model="userEpost"
      />
    </div>
    <button class="signUpBtn" v-on:click="logIn">Brew me a cup!</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  created() {
    if (localStorage.getItem("user")) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      userId: Date.now(),
      userName: "",
      userEpost: ""
    };
  },
  methods: {
    logIn() {
      const user = {
        userId: this.userId,
        userName: this.userName,
        userEpost: this.userEpost
      };
      if (this.userName !== "" && this.userEpost !== "") {
        this.$store.dispatch("signUp", user);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.Login {
  margin: auto;
  width: 85%;
  padding: 1rem;
}
.signUpBtn {
  width: 80%;
  background: black;
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding: 1rem;
  margin: 5rem 0.5rem 5rem 0.5rem;
  border-radius: 5rem;
}
.userInfo {
  margin: auto;
  margin-top: 3rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: left;
}
label {
  font-size: 15px;
  font-weight: 700;
}
#name,
#epost {
  border: 1px solid black;
  background: #f3e4e1;
  font-size: 15px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 5px;
  margin: 0.5rem;
}
</style>
