<template>
  <TopNavBar/>
  <div class="mt-4">
  <router-view  :blogData="blogData"/>
  </div>
</template>

<script>
import TopNavBar from './components/TopNavBar'
import blogData from './assets/blog'
export default {
  name: 'App',
  data(){
    return{
      blogData
    }
  },
  components: {
    TopNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
