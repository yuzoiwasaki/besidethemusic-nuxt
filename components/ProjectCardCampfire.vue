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

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    projectId: {
      type: String,
      requred: true
    }
  },
  computed: {
    projectUrl: function() {
      return 'https://camp-fire.jp/projects/' + this.projectId + '/widget';
    }
  }
}
</script>

<style>
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
