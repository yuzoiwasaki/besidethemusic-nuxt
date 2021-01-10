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
          <table class="table">
            <tbody>
              <NewsList
                v-for="news in news_list"
                :date="news.date"
                :title="news.title"
                :url="news.url"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsList from '@/components/NewsList.vue'
import news_list from '@/assets/data/news.json'

export default {
  components: {
    NewsList
  },
  data () {
    return {
      news_list: news_list
    }
  }
}
</script>
