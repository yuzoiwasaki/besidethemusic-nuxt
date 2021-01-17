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
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      requred: true
    }
  }
})
</script>

<style scoped>
tr td a {
  color: #4a4a4a;
}
</style>
