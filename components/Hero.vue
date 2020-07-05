<template>
  <section id="hero" class="hero-container">
    <div id="main-visual">
      <Header />
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
#main-visual {
  background: url("/images/main2_pc.jpg") center 0 no-repeat;
  background-size: cover;
  min-height: 700px;
  background-position: bottom;
}

@media screen and (max-width: 768px) {
  #main-visual {
    background: url("/images/main2_sp.jpg") center 0 no-repeat;
    background-size: cover;
    min-height: 600px;
    background-position: bottom;
  }
}
</style>