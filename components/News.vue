<template>
  <section id="news" class="section has-background-white">
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
            <NewsList
              title="2020/07/07：文化庁による新たな芸術支援、7月10日に受付開始。最高で150万円"
              url="https://bijutsutecho.com/magazine/news/headline/22294"
            />
            <NewsList
              title="2020/06/24：【東京都知事選候補者へ聞きたいこと】縮小営業を余儀なくされているライブハウス/クラブに関しての対応を聞きました。"
              url="http://save-our-space.org/tokyogovernorelection2020"
            />
            <NewsList
              title="2020/06/19：「とにかく長かった」　都内のライブハウス、休業要請全面解除で3カ月ぶり再開"
              url="https://mainichi.jp/articles/20200619/k00/00m/040/336000c"
            />
            <NewsList
              title="2020/06/16：新型コロナ　ライブハウス助成へ　杉並区、法人最大４０万円　／東京"
              url="https://mainichi.jp/articles/20200616/ddl/k13/040/009000c"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsList from '@/components/NewsList.vue'

export default {
  components: {
    NewsList
  }
}
</script>

<style>
.entry {
  margin: 30px 0;
}
</style>
