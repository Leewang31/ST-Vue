<template>
  <div class="black-bg" v-if="modalIsOpen">
    <div class="white-bg">
      <img :src="products[clickNum].image" class="room-img" alt="">
      <h4>{{ products[clickNum].title }}</h4>
      <p>{{ products[clickNum].content }}</p>
      <select v-model="month">
        <option v-for="(n,i) in 24" :key="i" :value="i+1">{{ i + 1 }}</option>
      </select>
      <p>{{ month }}개월 가격 : {{ products[clickNum].price * month }}원</p>
      <button @click="$emit('closeModal')">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1
    }
  },
  watch:{
    month(a){
      if(a>12){
        alert('13개월 이상은 계약이 어려워요!')
        this.month = 1
      }
    }
  },
  updated() {
  },
  props: {
    modalIsOpen: Boolean,
    products: Array,
    clickNum: Number
  }
}
</script>

<style scoped>
.room-img{
  width: 80%;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: gray;
  border-radius: 8px;
  padding: 20px;
}
</style>