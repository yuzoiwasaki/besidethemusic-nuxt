<template>
  <section id="hero" class="hero-container">
    <div id="mainVisual-pc" class="is-hidden-mobile"></div>
    <div id="mainVisual-sp" class="is-hidden-tablet"><img src="/images/main2_sp.jpg"></div>
  </section>
</template>

<style scoped>
#mainVisual-pc{
  background: url("/images/main2_pc.jpg") center 0 no-repeat;
  background-size: cover;
  background-color:#000000;
  color:#FFFFFF;
  min-height: 900px;
  background-position: bottom;
}
#mainVisual-sp{
  background-color:#000000;
}
</style>