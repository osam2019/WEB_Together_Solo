<template lang="html">
<div>
  <div class="allHeader">

      <span class="logo"
            @click="$router.push('/board/')">Together</span>

  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.allHeader{
  z-index: 1000;
  position: fixed;
  top:0;
  left: -.1%;
  width: 100%;
  height: 120px;
  padding: 0;
  font-size: 80px;
  color: rgb(173, 199, 199);
  background-color: #ffffff;
  border-bottom: 1px solid rgb(183, 194, 193);
  text-align: center;
}

.logo{
  font-size:50px;
  position: fixed;
  top:20px;
  left: 41%;
  font-family: 'Pacifico', cursive;
}
</style>
