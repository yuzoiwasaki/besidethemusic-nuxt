<template>
  <section id="crowdfunding" class="section has-background-white">
    <div class="container is-small has-text-centered">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h3 class="title is-spaced body-title">
            ライブハウスのクラウドファンディング一覧
          </h3>
        </div>
      </div>
      <div class="columns is-multiline">
        <ProjectCardCampfire
          v-for="project in campfire_projects"
          :title="project.title"
          :caption="project.caption"
          :project-id="project.id"
        />
        <ProjectCardMotiongallery
          v-for="project in motiongallery_projects"
          :title="project.title"
          :caption="project.caption"
          :project-id="project.id"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectCardCampfire from '@/components/ProjectCardCampfire.vue'
import ProjectCardMotiongallery from '@/components/ProjectCardMotiongallery.vue'
import campfire_projects from '@/assets/data/projects/campfire.json'
import motiongallery_projects from '@/assets/data/projects/motiongallery.json'

export default Vue.extend({
  components: {
    ProjectCardCampfire,
    ProjectCardMotiongallery
  },
  data () {
    return {
      campfire_projects: campfire_projects,
      motiongallery_projects: motiongallery_projects
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins';

#crowdfunding {
  @include sp {
    padding-top: 0;
  }
}
</style>
