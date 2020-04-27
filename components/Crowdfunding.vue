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
