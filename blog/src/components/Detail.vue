<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{blogData[$route.params.id].title}}</h5>
    <p>{{blogData[$route.params.id].content}}</p>
  </div>
  <div style="cursor: pointer" @click="$router.go(-1)">이전으로</div>
  <router-view/>
</template>

<script>
export default {
  name: "Detail",
  props: {
    blogData: Array,
  }
}
</script>

<style scoped>

</style>