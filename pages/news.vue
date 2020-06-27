<template>
  <div id="main">
    <Hero />

    <section id="notifications" class="section has-background-white">
      <div class="container is-small has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h2 class="title is-spaced">
              News
            </h2>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <ul>
              <li class="entry">
                <a href="http://save-our-space.org/tokyogovernorelection2020/" target="_blank">2020/06/24：【東京都知事選候補者へ聞きたいこと】縮小営業を余儀なくされているライブハウス/クラブに関しての対応を聞きました。</a>
              </li>
              <li class="entry">
                <a href="https://mainichi.jp/articles/20200619/k00/00m/040/336000c" target="_blank">2020/06/19：「とにかく長かった」　都内のライブハウス、休業要請全面解除で3カ月ぶり再開</a>
              </li>
              <li class="entry">
                <a href="https://mainichi.jp/articles/20200616/ddl/k13/040/009000c" target="_blank">2020/06/16：新型コロナ　ライブハウス助成へ　杉並区、法人最大４０万円　／東京</a>
              </li>
              <li class="entry">
                <a href="https://news.yahoo.co.jp/articles/bcea0536ec53f94ad4f9b27a6ed2510350be7fd9" target="_blank">2020/06/11：接待伴う店やライブハウス19日に可　東京アラート解除</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
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

<style>
@import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);

#main {
  font-family: "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.entry {
  margin: 30px 0;
}
</style>
