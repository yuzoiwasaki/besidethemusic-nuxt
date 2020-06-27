<template>
  <div id="main">
    <Hero />
    <News />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import News from '@/components/News.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
    News,
    Footer
  },
  data () {
    return {
      title: 'News | Beside the Music'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
