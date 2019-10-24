<template lang="html">
  <div>
    <div>
      <el-button class="break"
                 type="danger"
                 @click="breakParty">해체</el-button>
    </div>
    <div class="chatContainer">
      <div class="chatHeader">
        <span>단체 채팅방</span>
      </div>
      <div class="chatBody">
        <div class="ownChat" :style="mystyle">
          <div class="clear"></div>

          <div class="speech-bubble2" v-for="i in 4">

          </div>

          <div class="speech-bubble">
            국민 xxxxxxx-xx-xxxx
          </div>

          <div class="speech-bubble">
            계좌로 돈 보내주세요~
          </div>

          <div class="speech-bubble" v-for="chat in chats">
            {{chat}}
          </div>
        </div>
      </div>
      <div class="chatFooter">
        <input class="chatInput" type="text" v-model="message" maxlength="40">
        <el-button id="chatSubmit"type="primary" @click="chat"> 전송 </el-button>
        <!-- <button type="button" name="button"></button> -->
      </div>
    </div>
    <div class="userContainer">
      <div class="user" v-if="show1!='1'">
        <div>
          <img src="../../../public/user_icon.png" class="user_img">
        </div>
        <div class="username">
          <span> 17 구윤회 </span>
        </div>
        <div>
          <el-button type="danger"class="btn" @click="show1='1'">삭제</el-button>
        </div>
      </div>
      <div class="user" v-if="show2!='2'">
        <div>
          <img src="../../../public/green_user.jpg" class="user_img">
        </div>
        <div class="username">
          <span> 16 권용석 </span>
        </div>
        <div>
          <el-button type="danger"class="btn" @click="show2='2'">삭제</el-button>
        </div>
      </div>
      <div class="user" v-if="show3!='3'" style="margin-right:0;">
        <div>
          <img src="../../../public/woman_user.jpg" class="user_img">
        </div>
        <div class="username">
          <span> 17 김수빈 </span>
        </div>
        <div>
          <el-button type="danger"class="btn" @click="show3='3'">삭제</el-button>
        </div>
      </div>
      <div class="clear"></div>
    </div>

    <router-link :to="'/board/carddetail/'+getCard.id" class="side-button" tag="el-button">
      <i class="el-icon-back"></i>
    </router-link>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
        message:'',
        chats:[],
        mystyle:{
      },
        show1:'0',
        show2:'0',
        show3:'0',
    }
},
methods:{
  breakParty(){
    if(confirm("정말로 해체하시겠습니까?")){
      this.$router.push('/');
    }
  },
  chat(){
      if(this.message){
        this.chats.push(this.message);
        this.message = '';
        this.mystyle.bottom = this.chats.length*105 + 'px';
      }
    },
  },
  computed:{
          ...mapGetters([
            'getCard',
          ]),
        },
}
</script>



<style lang="css" scoped>
  /* #popover{
    position: absolute;
    top:500px !important;
  } */
    .break{
      position: fixed;
      z-index: 1000;
      right: 1%;
      top:10px;
      width: 18%;
      height: 100px;
      font-size: 40px;
      color: #ffffff;
    }

   #chat{
     margin-right: 1%;
   }

   #chatSubmit{
     font-size: 32px;
     padding: 11px;
     padding-left: 2%;
     padding-right: 2%;
     margin-left: 1%;
     margin-top: 1px;
    }

   .chatContainer{
     height: 800px;
     width: 100%;
     position: relative;
     top:-150px;
     /* left:12%; */
     border-radius:20px;
     margin: 0 auto;
     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
     /* box-shadow: 2px 2px 2px; */
   }

   .chatHeader{
      width:100%;
      /* height:50px; */
      background-color:#3ef9d3;
      text-align: center;
      color: white;
      font-size: 50px;
   }

   .chatBody{
     width:100%;
     font-size: 32px;
     height: 655px;
     background-color: #d5feff;
     overflow: hidden;
   }

   .ownChat{
     position: relative;
     /* bottom: 300px; */
   }

    .speech-bubble {
    	position: relative;
      left: 400px;
      margin-bottom: 15px;
    	background: #ffffff;
    	border-radius: .4em;
      max-width: 50%;
      margin-right: 40px;
      z-index: 500;
      height: 90px;
      box-shadow: 2px 2px 2px;
    }

    .speech-bubble:after {
    	content: '';
      /* z-index: 5000; */
    	position: absolute;
    	right: 0;
    	top: 50%;
    	width: 0;
    	height: 0;
    	border: 25px solid transparent;
    	border-left-color: #ffffff;
    	border-right: 0;
    	border-top: 0;
    	margin-top: -10.5px;
    	margin-right: -25px;
    }

    .speech-bubble2 {
      position: relative;
      left: 30px;
      margin-bottom: 15px;
      background-color: #fffbbf;
      border-radius: .4em;
      max-width: 50%;
      margin-right: 40px;
      z-index: 500;
      height: 90px;
      box-shadow: 2px 2px 2px;
    }

    .speech-bubble2:after {
      content: '';
    	position: absolute;
    	left: 0;
    	top: 50%;
    	width: 0;
    	height: 0;
    	border: 20px solid transparent;
    	border-right-color: #ffffff;
    	border-left: 0;
    	border-bottom: 0;
    	margin-top: -10px;
    	margin-left: -20px;
    }

    .speech-bubble2:nth-child(2n){
      background-color: #ffdefe;
    }

    .speech-bubble2:nth-child(3n){
      background-color: #9fff93;
    }

    /* .speech-bubble2:after:nth-child(2n){
      background-color: black;
    } */

   .chatFooter{
     width: 98%;
     background-color: #b2c7c9;
     padding: 10px;
     /* position: relative; */
     /* top: 690px; */
   }

   .chatInput{
     width: 83%;
     font-size: 32px;
     border-radius: 15px;
     height: 50px;
   }

  .comment_input_box{
    /* background-color: rgb(172, 228, 228); */
    border:2px solid #6db0b0;
    padding: 18px;
    height: 120px;
  }

  .userContainer{
    margin-top: -100px;
  }

  .user{
    width: 32%;
    border: 1px solid black;
    float: left;
    margin-right: 1.5%;
    background-color: #ffffff;
  }

  .user_img{
    width: 100%;
  }

  .username{
    font-size: 50px;
    text-align: center;
  }

  .btn{
    width: 100%;
    /* height: 100px; */
    font-size: 50px;
  }

  .clear{
    clear: both;
  }

  .side-button{
    z-index: 1100;
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
