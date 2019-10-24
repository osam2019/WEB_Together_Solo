<template lang="html">
  <div>
    <router-link to="/board/makecard" class="makeCard" tag="el-button">
      <i class="el-icon-edit"></i>
    </router-link>

  </div>
</template>

<script>
export default {
  data(){
    return{
    card:{

      }
    }
  }
}

</script>

<style lang="css" scoped>
.makeCard{
  z-index: 1000;
  position: fixed;
  right: 1%;
  top:10px;
  width: 100px;
  height: 100px;
  font-size: 60px;
  color: rgb(173, 199, 199);
}




</style>
