<template lang="html">
  <router-link to="/partymanage/1" class="partyManage" tag="el-button">
    <span>파티 관리</span>
  </router-link>
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
.partyManage{
  z-index: 1000;
  position: fixed;
  right: 1%;
  top:10px;
  width: 18%;
  height: 100px;
  color: rgb(151, 186, 186);
}

i, span{
  font-size: 32px;
  font-weight: 700;
}


</style>
