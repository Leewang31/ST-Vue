<template>
  <div v-for="(a,i) in blogData" :key="i">
    <h5 style="cursor: pointer" @click="$router.push('/detail/'+i)">{{ a.title }}</h5>
    <p>{{ a.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    blogData: Array
  },
}

</script>

<style scoped>
</style>