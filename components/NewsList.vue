<template>
  <tr>
    <th>
      {{ date }}
    </th>
    <td>
      <a :href="url" target="_blank">{{ title }}</a>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    date: String,
    title: String,
    url: String
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables';

tr td a {
  color: $text-color-black;
}
</style>
