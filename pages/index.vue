<template>
  <div id="main">
    <section class="hero-container">
      <div class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container is-small has-text-centered">
            <h1 class="title is-1 is-spaced">
              Beside the Music
            </h1>
            <h2 class="subtitle">
              みんなで音楽を支援しよう！いつも音楽のそばに
            </h2>
        </div>
        </div>
      </div>
    </section>

    <section class="section has-background-light">
      <div class="container is-small has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <p>
              現在コロナウイルスの影響で営業することができず、苦しんでいるライブハウスがたくさんあります。中にはすでに店を閉めざるを得ない選択をしたところもあります。<br><br>
              私自身がそうであったように、音楽などの文化は苦しい時にこそ必要とされるものだと思います。大切な音楽の灯を消さないために、少しでも支援していただけたら嬉しいです。<br><br>
              誰かにとっての大切な場所がこれからもずっと存続できますように。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-white is-medium">
      <div class="container is-small has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h3 class="title is-spaced body-title">
              ライブハウス支援サイト一覧
            </h3>
          </div>
        </div>
        <div class="columns is-spaced sites">
          <div class="column is-6 centered">
            <a href="https://savelivehouse.com" target="_blank">
              <figure class="image">
                <img src="https://savelivehouse.com/assets/img/ogp.png">
              </figure>
            </a>
          </div>
          <div class="column is-6">
            <p class="title is-5 is-spaced">
              MUSIC UNITES AGAINST COVID-19
            </p>
            <p class="subtitle is-6">
              MUSIC UNITES AGAINST COVID-19 フォルダのアクセス権をダウンロード購入することで、自分が応援したいライブハウスを支援することができます<br>
              5種類の価格の中から自分が支援したい金額を選んで購入できます<br>
              どこのストアでどの金額で購入しても商品内容は同じです<br>
              <br>
              フォルダの中には「プロジェクトに賛同した約70組のミュージシャンが提供する楽曲データ」が置いてあります<br>
              これらは皆さまの支援へのお礼です<br>
              期間内(2020年6月末日まで)であれば好きな時に聴いて楽しむことができます<br>
              <br>
              <a href="https://savelivehouse.com" target="_blank">https://savelivehouse.com</a>
            </p>
          </div>
        </div>
        <div class="columns is-spaced sites">
          <div class="column is-6">
            <p class="title is-5 is-spaced">
              SAVE THE LIVEHOUSE
            </p>
            <p class="subtitle is-6">
              "SAVE THE LIVEHOUSE"とは？<br>
              全国のライブハウスにドリンク代金を事前に支払うことでライブハウスを応援することができるサービスです。<br>
              <br>
              新型コロナウィルスの影響により営業自粛を余儀なくされ全国的に経済的な打撃を受けているライブハウス。この状態が続けば多くのライブハウスが閉店せざるを得ない状況です。<br>
              <br>
              また以前と同じようにライブハウスで音楽を楽しめるように。ライブハウスが今を乗り越えられるように。ひとりひとりが直接応援できるプラットフォームを立ち上げました。<br>
              <br>
              （支払われた代金はすぐにライブハウスの元に届きます！）<br>
              <br>
              <a href="https://savelivethehouse.com" target="_blank">https://savelivethehouse.com</a>
            </p>
          </div>
          <div class="column is-6 centered">
            <a href="https://savelivethehouse.com" target="_blank">
              <figure class="image container">
                <img src="https://savethelivehouse.com/img/logo/logo_2.png">
              </figure>
            </a>
          </div>
        </div>

        <div id="crowdfunding">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <h4 class="title is-spaced body-title">
                現在クラウドファンディング実施中の東京のライブハウス一覧
              </h4>
            </div>
          </div>
          <div class="columns is-multiline">
            <ProjectCard
              v-for="project in projects"
              :title="project.title"
              :caption="project.caption"
              :project-id="project.id"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/assets/data/project.json'

export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: projects
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);

#main {
  font-family: "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.hero.is-primary {
  background-color: #0a0a0a;
  color: #fff;
}

.body-title {
  margin-bottom: 5rem;
}

.sites {
  margin-bottom: 5rem !important;
}

.image.container {
  height: 256px;
  width: 256px;
}

#crowdfunding {
  margin-top: 10rem;
}
</style>
