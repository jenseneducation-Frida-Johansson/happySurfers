<template>
  <div class="about">
    <div class="about-container">
      <div class="text-container">
        <h1>Vårt kaffe</h1>
        <p class="about-h2">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.
        </p>
        <p class="about-p">
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
          <br />
          <br />Roast id macchiato, single shot siphon mazagran milk fair trade
          est aroma a half and half and, so, galão iced to go, whipped as cream
          cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed
          half and half at, that, percolator macchiato trifecta and body as
          arabica dripper. In galão black java milk sit trifecta, robusta,
          acerbic café au lait instant shop latte. Seasonal bar shop filter
          aroma id, crema, affogato viennese cultivar aftertaste, seasonal,
          percolator cream black, galão flavour, milk aromatic turkish skinny
          crema.
        </p>
      </div>
      <div class="profile-container">
        <img class="eva-cortado" src="../views/eva-cortado.jpg" alt />
        <h3>Eva Cortado</h3>
        <p class="VD">VD & Grundare</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
    this.$store.state.showCart = false;
    this.$store.state.bgColor.color = "pink";
  }
};
</script>

<style>
.about {
  width: 375px;
  background: linear-gradient(248.3deg, hsl(10, 43%, 92%), hsla(0, 0%, 100%, 0)),
    #f3e4e1;
  color: black;
}
.about-container {
  text-align: left;
  line-height: 20px;
}

.text-container {
  padding: 30px;
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about-h2 {
  font-size: 14px;
  font-weight: bold;
}
.about-p {
  font-size: 12px;
}
.eva-cortado {
  border-radius: 50px;
}

h3 {
  margin-top: -10px;
}
.VD {
  margin-top: -40px;
  font-size: 12px;
}
</style>
