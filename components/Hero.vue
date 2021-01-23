<template>
  <section id="hero" class="hero-container">
    <div id="main-visual">
      <Header />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'

export default Vue.extend({
  components: {
    Header
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins';

#main-visual {
  background: url("/images/main2_pc.jpg") center 0 no-repeat;
  background-size: cover;
  min-height: 700px;
  background-position: bottom;

  @include sp {
    background: url("/images/main2_sp.jpg") center 0 no-repeat;
    background-size: cover;
    min-height: 600px;
    background-position: bottom;
  }
}
</style>