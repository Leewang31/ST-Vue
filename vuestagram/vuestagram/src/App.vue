<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step!==0" @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step===1" @click="step = 2">Next</li>
      <li v-if="step===2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo"/>
  </div>

  <Container :postDummy="postDummy" :step="step" :imgUrl="imgUrl" @wrtiePost="myPost=$event"/>
  <button @click="more" v-if="step===0">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "@/components/Container";
import postDummy from './assets/data'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      postDummy,
      axiosCount: 0,
      step: 0,
      imgUrl: '',
      myPost: {},
    }
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.axiosCount}.json`).then((res) => {
        this.postDummy = [...this.postDummy].concat(res.data);
        this.axiosCount++;
      }).catch(e => console.error("error : " + e))
    },
    upload(e) {
      let file = e.target.files
      console.log(file[0])
      let url = URL.createObjectURL(file[0]);
      this.imgUrl = url
      this.step = 1;

    },
    getMonth(month) {
      switch (month) {
        case 1:
          return 'Jan'
        case 2:
          return 'Feb'
        case 3:
          return 'Mar'
        case 4:
          return 'Apr'
        case 5:
          return 'May'
        case 6:
          return 'Jun'
        case 7:
          return 'Jul'
        case 8:
          return 'Aug'
        case 9:
          return 'Sep'
        case 10:
          return 'Oct'
        case 11:
          return 'Nov'
        case 12:
          return 'Dec'
      }
    },
    publish() {
      let today = new Date();
      let month = this.getMonth(today.getMonth() + 1);
      let day = today.getDate();
      let myData = {
        name: "Kiwan Lee",
        userImage: "https://picsum.photos/100?random=1",
        postImage: this.imgUrl,
        likes: 0,
        date: month+' '+day,
        liked: false,
        content: this.myPost.content,
        filter: this.myPost.filter,
      };
      this.postDummy.unshift(myData)
      this.step = 0
    },
  },
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  z-index: 9999;
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  padding-right: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
