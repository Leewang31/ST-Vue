<template>
  <div class="filter-wrapper" @click="$emit('selectFilter',filter)">
    <div>{{filter}}</div>
    <div class="filter-item" :class="filter" :style="`background-image:url(${imgUrl})`"></div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imgUrl: String,
    filter: String,
  }
}
</script>

<style scoped>
.filter-wrapper{
  display: inline-block;
  text-align: center;
}
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>