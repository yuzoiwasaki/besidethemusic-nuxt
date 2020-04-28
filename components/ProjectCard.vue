<template>
  <div class="column is-3 has-padding-30">
    <p class="title is-5 is-spaced">
      {{ title }}
    </p>
    <p class="subtitle is-6">
      {{ caption }}
    </p>
    <iframe frameborder="0" :height="projectHeight" scrolling="no" :src="projectUrl" width="245"></iframe>
  </div>
</template>

<script>
const projectHeightCampfire = 365;
const projectHeightMotionGallery = 452;

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
    },
    site: {
      type: String,
      default: 'campfire',
      requred: true
    }
  },
  computed: {
    projectHeight: function() {
      if (this.site === 'campfire') {
        return projectHeightCampfire;
      } else if (this.site === 'motiongallery') {
        return projectHeightMotionGallery;
      }
    },
    projectUrl: function() {
      if (this.site === 'campfire') {
        return 'https://camp-fire.jp/projects/' + this.projectId + '/widget';
      } else if (this.site === 'motiongallery') {
        return 'https://motion-gallery.net/projects/' + this.projectId + '/widget';
      }
    }
  }
}
</script>

<style>
.has-padding-30 {
  padding: 30px !important;
}
</style>
