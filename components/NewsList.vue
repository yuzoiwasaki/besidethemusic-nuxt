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

<script>
export default {
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
}
</script>

<style scoped>
td a {
  color: #4a4a4a;
}
</style>
