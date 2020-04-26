<template>
  <div id="main">
    <Hero />
    <Statement />
    <SupportSite />

    <section id="crowdfunding" class="section has-background-white">
      <div class="container is-small has-text-centered">
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
    </section>
  </div>
</template>

<script>
import Hero from '@/components/hero.vue'
import Statement from '@/components/Statement.vue'
import SupportSite from '@/components/SupportSite.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/assets/data/project.json'

export default {
  components: {
    Hero,
    Statement,
    SupportSite,
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

.body-title {
  margin-bottom: 5rem;
}

@media screen and (max-width: 768px) {
  .body-title {
    margin-bottom: 2.5rem;
  }
}
</style>
