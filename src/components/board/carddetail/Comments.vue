<template lang="html">
  <div>

  <el-card class="comment_input_box">
    <input type="text" class="comment_input" v-model="newComment.text" placeholder="파티에 참여하세요!"></input>
    <el-button type="primary" class="submit_btn" @click="submit">가입 요청</el-button>
    <div class="clear"></div>
  </el-card>

<div v-for="comment in comments">
  <div class="comment" :style="comment.partyStyle">


    <div style="float:left; width:12%">
      <img src="../../../../public/user_icon.png" class="user_img">
    </div>


    <div style="float:right; width:88%">
      <span class="username">{{comment.username}}</span>
      <span class="post_time" style='font-size:30px; float:right'>{{comment.postTime}}</span>
      <p class="title"><span>{{comment.text}}</span>

        <el-button v-if="comment.show" class="join-btn" type="success" @click="party(comment)">가입승인</el-button>
        <el-button v-else class="join-btn" type="danger" @click="party(comment)">퇴출</el-button>

        <el-popover
          id="popover"
          placement="right"
          trigger="click">
          <div class="chatContainer">
            <div class="chatHeader">
              <span>1대1 채팅</span>
            </div>
            <div class="chatBody">
              <div class="ownChat" :style="mystyle">
                <div class="clear"></div>
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

          <el-button id="chat" type="primary"class="join-btn" slot="reference">1대1 채팅</el-button>
        </el-popover>

      </p>

    </div>
<div class="clear"></div>

  </div>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'


export default {
  data(){
    return{
      comments:[
        {username: '17 구윤회',
         text: '함께하고 싶어요!',
        postTime: '17:30',
        show:true,
        partyStyle: {},
        },
        {username: '16 권용석',
         text: '저도요!',
        postTime: '17:32',
        show:true,
        partyStyle: {},
        },
        {username: '17 Jhonas',
         text: '시간 변경 가능한가요?',
        postTime: '17:35',
      show:true,
      partyStyle: {},
      },
      ],
      newComment:{
        username:"admin",
        text:'',
        postTime: '',
        show:true,
        partyStyle: {}
      },
      show:true,
      message:'',
      chats:[],
      mystyle:{
      },
      counter:'1',
    }
  },
  methods:{
    ...mapMutations([
      'setCardCounter'
    ]),
    chat(){
      if(this.message){
        this.chats.push(this.message);
        this.message = '';
        this.mystyle.bottom = -650+this.chats.length*105 + 'px';
      }
      // console.log(this.mystyle);
    },
    submit(){
      if(this.newComment.text){
      var t = new Date();
      this.newComment.postTime = t.getHours()+':'+t.getMinutes();
      this.comments.push(this.newComment);
      this.newComment = new Object({
        username:"admin",
        text:'',
        postTime: '',
        show:true,
        partyStyle: {}
      });
      // this.newComment.text = '';
    }
    },
    party(comment){



      console.log(this.getCard.presentNum);
      this.counter = this.getCard.presentNum;
      if(comment.show){
        if(this.getCard.presentNum>=this.getCard.maxNum){
          alert('이미 꽉 차있습니다.')
        }
        else{
          comment.show=!comment.show;
          this.counter++;
          comment.partyStyle={backgroundColor:'#c5f4ca'};
          this.setCardCounter(this.counter);
        }
      }
      else{
        comment.show=!comment.show;
        this.counter--
        comment.partyStyle={};
        this.setCardCounter(this.counter);
      }
      console.log(comment.partyStyle);
    }
  },
  computed: {
        ...mapGetters([
          'getCard',
      ])
    },
}
</script>

<style>
.el-popover{
  height: 800px !important;
  width: 70% !important;
  position: fixed !important;
  top:250px !important;
  left:12% !important;
  border-radius: 20px;
}

</style>

<style lang="css" scoped>
  /* #popover{
    position: absolute;
    top:500px !important;
  } */

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
      left: 300px;
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

   .chatFooter{
     width: 97%;
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
    /* border:2px solid #6db0b0; */
    padding: 18px;
    /* height: 150px; */
  }

  .join-btn{
    float: right;
    width: 25%;
    height: 100%;
    font-size: 30px;
  }

  .submit_btn{
    float: right;
    /* left: 40px; */
      height: 70px;
      /* margin-top: 40px; */
      width: 25%;
      font-size: 30px;
  }

  .comment_input{
    height: 70px;
    width: 70%;
    border-radius: 20px;
    font-size: 30px;
    /* position: relative;
    top: 10%; */
  }

  .el-input{
    font-size: 33px;
  }

  .el-input__inner{
    height: 80px !important;
  }

  .comment{
    margin-top:20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(113, 156, 162);
  }

  .username{
    font-size: 40px;
  }

  .text {
     font-size: 38px;
     /* text-align: center; */
   }
  .user_img{
     width: 100%;
   }

  .title{
    font-size: 35px;
    margin-top: 10px;
    margin-bottom: 0;
    height: 60px;
  }
  .clear{
     clear: both;
   }
</style>
