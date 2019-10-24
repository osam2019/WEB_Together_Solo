<template lang="html">
  <router-link to="/board/" class="side-button" tag="el-button">
    <i class="el-icon-back"></i>
  </router-link>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.side-button{
  z-index: 1000;
  position: fixed;
  top:10px;
  left: 1%;
  width: 100px;
  height: 100px;
  padding: 0;
  font-size: 80px;
  color: rgb(173, 199, 199);
}
</style>
