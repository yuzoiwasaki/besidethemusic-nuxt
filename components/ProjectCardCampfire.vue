<template>
  <div class="column is-3 has-padding-30 is-aligned">
    <p class="title is-5 is-spaced">
      {{ title }}
    </p>
    <p class="subtitle is-6">
      {{ caption }}
    </p>
    <iframe frameborder="0" height="365" scrolling="no" :src="projectUrl" width="245" class="iframe-card-content lazyload"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const SITE_URL = 'https://camp-fire.jp'

export default Vue.extend({
  props: {
    title: String,
    caption: String,
    projectId: String
  },
  computed: {
    projectUrl(): string {
      return SITE_URL + '/projects/' + this.projectId + '/widget';
    }
  }
})
</script>

<style scoped>
.has-padding-30 {
  padding: 30px !important;
}

.is-aligned {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.iframe-card-content {
  margin-top: auto;
}
</style>
