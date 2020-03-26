<template>
  <transition>
    <div v-if="show" class="LoadingPage">
      <img id="leftGraphic" src="../assets/graphics/intro-graphic-left.svg" alt="img" />
      <div class="airbeanLogo">
        <img id="airBean" src="../assets/graphics/airbean-landing.svg" alt="Air bean" />
      </div>
      <img id="rightGraphic" src="../assets/graphics/intro-graphic-right.svg" alt="img" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoadingPage",
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.showToggle();
  },

  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    }
  }
};
</script>

<style>
.LoadingPage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 375px;

  background: #39846c;
  position: absolute;
  z-index: 9999;
  animation-name: scaleOut;
  animation-duration: 3s;
}

.airbeanLogo {
  display: flex;
  flex-direction: column;
}

#airBean {
  margin-left: -110px;
}

#rightGraphic {
  margin-left: -84px;
}

@keyframes scaleOut {
  to {
    opacity: 0;
    /*visibility: hidden;*/
  }
}
</style>