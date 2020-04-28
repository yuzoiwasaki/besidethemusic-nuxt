<template>
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

        <!-- MOTION GALLERY -->
        <div class="column is-3 has-padding-30">
          <p class="title is-5 is-spaced">
            新型コロナウイルスに負けない。ライブハウスＣＲＡＺＹＪＡＭから音楽で笑顔をつなぐプロジェクト。
          </p>
          <p class="subtitle is-6">
            17年目を迎える東京立川の小さなライブハウスＣＲＡＺＹＪＡＭは、新型コロナウイルスの影響で閉店の危機。次世代の為にも、スタッフの為にも、音楽で笑顔をつなぎたいのです。ご支援を何卒よろしくお願いします
          </p>
          <iframe frameborder="0" height="365" scrolling="no" src="https://motion-gallery.net/projects/crazyjam/widget" width="245"></iframe>
        </div>
      </div>
    </div>
  </section>
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
@media screen and (max-width: 768px) {
  #crowdfunding {
    padding-top: 0;
  }
}
</style>
