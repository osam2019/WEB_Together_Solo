<template>
  <div>

      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <div style="float:left; width:12%"> <img src="../../../public/user_icon.png" class="user_img" style="width:100%"></div>
    <div style="float:right; width:88%">
      <span class="username">{{card.username}}</span>
      <span class="post_time" style='font-size:30px; float:right'>{{card.postTime}}</span>
      <p class="title"><span>{{card.title}}</span></p>
    </div>
<div class="clear"></div>

  </div>

  <div class="text item">
    <span>{{card.bigOption}}</span>
  </div>
  <div class="text item">
    <span>{{card.innerOption}}</span>
  </div>
  <div class="text item">
    <span>{{card.place}}</span>
  </div>
  <div class="text item">
    <span>모집중</span>
  </div>
  <div class="text item">
    <span>{{card.limitTime}}</span>
  </div>
  <div class="text item">
    <span>구인 : {{card.presentNum}}/{{card.maxNum}}</span>
  </div>
<div class="clear"></div>

</el-card>

  </div>
</template>

<script>
  export default{
    props:[
      'card',
    ],

  }
</script>

<style scoped>

.clearfix{
  /* font-size: 45px; */
}

.username{
  font-size: 40px;
}

.text {
   font-size: 38px;
   /* text-align: center; */
 }

 .item {
   margin-bottom: 18px;
   float: left;
   width: 50%;
 }

 .box-card {
   /* width: 480px; */
   height: 100%;
   margin-bottom: 50px;
   background-color: rgb(253, 255, 250);
 }

 .user_img{
   width: 100%;
 }

.title{
  font-size: 35px;
  margin-top: 10px;
  margin-bottom: 0;
}

 .clear{
   clear: both;
 }
</style>
