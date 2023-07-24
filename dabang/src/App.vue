<template>
  <transition name="fade">
    <Modal @closeModal="modalIsOpen=false" :modalIsOpen="modalIsOpen" :products="products" :clickNum="clickNum"/>
  </transition>
  <div class="menu">
    <a v-for="(m,i) in menus" :key="i">{{ m }}</a>
  </div>
  <transition name="fade">
    <Discount v-if="showBanner"/>
  </transition>
  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>
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
      originalData: [],
      products: [],
      clickNum: 0,
      h2_blue: 'color : darkslateblue',
      sortEvent: 0,
      showBanner: true
    }
  },
  methods: {
    priceSort() {
      this.products.sort((a, b) => a.price - b.price
      )
    },
    sortBack() {
      this.products = [...this.originalData]
    }
  },
  created() {
    axios.get(this.URL)
        .then(response => {
          this.originalData = response.data
        }).then(() => this.products = [...this.originalData])
        .catch(error => {
          console.error("Error fetching data:", error);
        });
  },
  mounted() {
    setTimeout(() => {
      this.showBanner = false
    }, 2000)
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

.fade-enter-from {
  opacity: 0
}

.fade-enter-active {
  transition: all 0.4s
}

.fade-enter-to {
  opacity: 1
}

.fade-leave-from {
  opacity: 1
}

.fade-leave-active {
  transition: all 0.4s
}

.fade-leave-to {
  opacity: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #88e0e0;
  background: #545454;
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
