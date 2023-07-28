<template>
  <div>나는 {{ myName }}이다. 나이는 {{ myAge }}</div>
  <input type="text" @input="updateName"/>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="🔎" @input="(e)=>search(e)"/>
    <div class="post-header" v-for="(person,i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${person.image})`"></div>
      <span class="profile-name">{{ person.name }}</span>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";
import {mapMutations, mapState} from "vuex";

export default {
  name: "Mypage",
  setup() {
    let follower = ref([]);
    let originFollower = ref([]);
    onMounted(() => {
      axios.get('/follwer.json').then((res) => {
        originFollower.value = res.data
        follower.value = originFollower.value
      })
    })

    const search = (e) => {
      let mySearch = e.target.value;
      follower.value = originFollower.value.filter(a => a.name.includes(mySearch))
    }

    return {follower, search}
  }, methods: {
    updateName(e){
      this.changeName(e.target.value)
    }
  },
  computed: {
    ...mapState(["myName", "myAge"]),
    ...mapMutations(['changeName', "plusAge"]),
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}

.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}

.post-header {
  height: 30px;
  padding: 10px;
}
</style>