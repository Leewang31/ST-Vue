<template>
  <div v-if="step===0">
    <Post :postData="postDummy" v-for="(postDummy,i) in postDummy" :key="i"/>
  </div>

  <!-- 필터선택페이지 -->
  <div v-else-if="step===1">
    <div class="upload-image" :class="selectFilter" :style="`background-image:url(${imgUrl})`"></div>
    <div class="filters m-1">
      <FilterBox v-for="(filter,i) in filters" :key='i' :imgUrl="imgUrl" :filter="filter" @selectFilter="selectFilter=$event"></FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-else-if="step===2">
    <div class="upload-image" :class="selectFilter" :style="`background-image:url(${imgUrl})`"></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('wrtiePost',{content:$event.target.value,filter:selectFilter})"/>
    </div>
  </div>

  <div v-else-if="step===3">
    <Mypage>
    </Mypage>
  </div>
</template>

<script>
import Post from "@/components/Post";
import FilterBox from "@/components/FilterBox";
import Mypage from "@/components/Mypage";

export default {
  name: "Container",
  data() {
    return {
      myWrite: '',
      filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      selectFilter:'',
    }
  },
  components: {
    FilterBox,
    Post,
    Mypage,
  },
  props: {
    postDummy: Array,
    step: Number,
    imgUrl: String,
  }
}
</script>

<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background-size: cover;
  background-color: cornflowerblue;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
.m-1{
  margin: 10px;
}
</style>