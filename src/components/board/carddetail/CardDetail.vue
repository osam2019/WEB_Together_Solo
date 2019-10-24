<template>
  <div>

      <el-card class="box-card" :class="myClass">
  <div slot="header" class="clearfix">
    <div style="float:left; width:12%"> <img src="../../../../public/user_icon.png" class="user_img"></div>
    <div style="float:right; width:88%">
      <span class="username">{{card.username}}</span>
      <span class="post_time" style='font-size:30px; float:right'>{{card.postTime}}</span>
      <p class="title"><span>{{card.title}}</span></p>
    </div>
<div class="clear"></div>

  <div class="text item">
    <span>{{card.bigOption}}</span>
  </div>
  <div class="text item">
    <span>{{card.innerOption}}</span>
  </div>
  </div>
  <div class="text item">
    <span>{{card.place}}</span>
  </div>
  <div class="text item">
    <span v-if="show">모집중</span>
    <span v-else>모집완료</span>
  </div>
  <div class="text item">
    <span>{{card.limitTime}}</span>
  </div>
  <div class="text item">
    <span>구인 : {{card.presentNum}}/{{card.maxNum}}</span>
  </div>
<div class="clear"></div>

<div class="img" v-if="card.bigOption == '교통'">
  <img src="../../../../public/taxi.jpg"  style="width:90%; position:relative; left:5%;">
</div>

<div class="img" v-else>
  <img src="../../../../public/chicken.jpg"  style="width:90%; position:relative; left:5%;">
</div>


<div class="content">
  {{card.content}}
</div>

<app-comment></app-comment>

</el-card>



  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Comment from './Comments.vue'

  export default{
    data(){
      return{
        card:{},
        myClass:'',
      }
    },
    computed: {
          show(){
            console.log(this.myClass);
            if(this.card.presentNum==this.card.maxNum){
              this.myClass = "turn_green";
              return false;
            }
            else{
              this.myClass = '';
              return true;
            }
          },
          ...mapGetters([
            'getCard',
        ])
      },
    created(){
      this.card = this.getCard;
      // console.log(this.getCard);
    },
    components:{
      appComment : Comment,
    },
    watch:{

    }
  }
</script>

<style scoped>

.turn_green{
  /* background-color: rgb(219, 254, 222) !important; */
  /* animation: blinker 1s linear 2; */
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

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
   /* max-height: 900px; */
   margin-bottom: 18px;
   margin-top: -130px;
   background-color: rgb(253, 255, 250);
   /* background-color: #f5fdff; */
 }

 .user_img{
   width: 100%;
 }

.title{
  font-size: 35px;
  margin-top: 10px;
  margin-bottom: 0;
}

.content{
  min-height: 100px;
  border-top:1px solid #EBEEF5;
  font-size: 32px;
  padding: 18px;
}

 .clear{
   clear: both;
 }
</style>
