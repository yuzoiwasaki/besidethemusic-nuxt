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
@import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);

#main {
  font-family: "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.body-title {
  margin-bottom: 5rem;
}

@media screen and (max-width: 768px) {
  .body-title {
    margin-bottom: 2.5rem;
  }
}
</style>
