<template>
  <div>
    <img :src="a.image" class="room-img" alt="">
    <h4 @click="$emit('openModal',i)" style="cursor: pointer">{{ a.title }}</h4>
    <p>{{ a.price }}원</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    a: Object,
    i: Number
  }
}
</script>

<style scoped>
.room-img {
  width: 80%;
  margin-top: 40px;
}
</style>