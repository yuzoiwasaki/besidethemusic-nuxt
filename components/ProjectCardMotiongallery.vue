<template>
  <div class="column is-3 has-padding-30">
    <p class="title is-5 is-spaced">
      {{ title }}
    </p>
    <p class="subtitle is-6">
      {{ caption }}
    </p>
    <iframe frameborder="0" height="452" scrolling="no" :src="projectUrl" width="245" class="lazyload"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String
    },
    caption: {
      type: String
    },
    projectId: {
      type: String
    }
  },
  computed: {
    projectUrl(): string {
      return 'https://motion-gallery.net/projects/' + this.projectId + '/widget';
    }
  }
})
</script>

<style scoped>
.has-padding-30 {
  padding: 30px !important;
}
</style>
