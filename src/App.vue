<template>
  <div>
    <header>
      <router-view name="allheader"></router-view>
      <vue-page-transition name="fade"><router-view name="header"></router-view></vue-page-transition>
      <vue-page-transition name="fade"><router-view name="make"></router-view></vue-page-transition>
    </header>
    <div class="container">
      <!-- <app-filter></app-filter> -->
      <!-- <router-view name="filter"></router-view> -->
      <!-- <app-board></app-board> -->
      <vue-page-transition name="fade"><router-view></router-view></vue-page-transition>
    </div>
  </div>

</template>

<script>
import Board from './components/board/Board.vue'
import AllHeader from './components/header_nav/AllHeader.vue'
import Header from './components/header_nav/Header.vue'
import Filter from './components/filter/Filter.vue'
// import

  export default{
    data(){
      return{

      }
    },
    components:{
      appBoard:Board,
      appHeader:Header,
      appFilter:Filter,
      appAllheader:AllHeader
    }
  }

</script>

<style scoped>
.container{
  margin-left: 5%;
  width: 90%;
  margin-top: 300px;
  /* background-color: #e9fdff; */
}


</style>
