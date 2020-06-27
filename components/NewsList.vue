<template>
  <li class="entry">
    <a :href="url" target="_blank">{{ title }}</a>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      requred: true
    }
  }
}
</script>

<style scoped>
.entry {
  margin: 30px 0;
}
</style>
