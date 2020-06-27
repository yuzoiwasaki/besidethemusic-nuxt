<template>
  <div id="main">
    <Hero />
    <Statement />

    <SupportSite />
    <Crowdfunding />

    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Statement from '@/components/Statement.vue'
import SupportSite from '@/components/SupportSite.vue'
import Crowdfunding from '@/components/Crowdfunding.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
    Statement,
    SupportSite,
    Crowdfunding,
    Footer
  }
}
</script>

<style>
.body-title {
  margin-bottom: 5rem;
}

@media screen and (max-width: 768px) {
  .body-title {
    margin-bottom: 2.5rem;
  }
}
</style>
