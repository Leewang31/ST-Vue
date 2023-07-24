<template>
  <Modal @closeModal="modalIsOpen=false" :modalIsOpen="modalIsOpen" :products="products" :clickNum="clickNum"/>
  <div class="menu">
    <a v-for="(m,i) in menus" :key="i">{{ m }}</a>
  </div>
  <Discount/>
  <div v-for="(a,i) in products" :key="i">
    <Card @openModal="modalIsOpen=true;clickNum=$event" :a="a" :i="i"/>
  </div>

</template>

<script>
import axios from "axios";
import Discount from "./components/Discount.vue";
import Modal from "@/components/Modal";
import Card from "@/components/Card";

export default {
  name: 'App',
  data() {
    return {
      URL: "http://localhost:3001/data",
      modalIsOpen: false,
      menus: ['Home', 'Shop', 'About'],
      products: [],
      clickNum: 0,
      h2_blue: 'color : darkslateblue'
    }
  },
  mounted() {
    axios.get(this.URL)
        .then(response => {
          this.products = response.data
        }).then(() => console.log("전송 성공"))
        .catch(error => {
          console.error("Error fetching data:", error);
        });
  },
  components: {Modal, Discount, Card}
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
