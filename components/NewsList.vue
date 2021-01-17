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

<style scoped>
tr td a {
  color: #4a4a4a;
}
</style>
