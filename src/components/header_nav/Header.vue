<template>
  <div>
    <el-button class="side-button" icon="el-icon-menu" @click="side = !side" ></el-button>
    <transition name='slide'>
      <div class="side-bar" v-if="side" @click.self>
        <div style="margin-top:120px;">

          <div class="h"> <h1> 현재 가입중인 파티 </h1> </div>

            <el-card class="parties_wrap" v-for="card in parties" @click.native="partyClick(card)">

              <div  class="clearfix">
                <div style="float:left; width:12%"> <img src="../../../public/user_icon.png" class="user_img"></div>
                <div style="float:right; width:85%; margin-top:-20px; margin-bottom:20px;">
                  <span class="username">{{card.username}}</span>
                  <p class="title"><span>{{card.title}}</span></p>
                </div>
              </div>
            <div class="clear"></div>

              <div class="text item">
                <span>{{card.place}}</span>
              </div>
              <div class="text item">
                <span>{{card.bigOption}}</span>
              </div>
              <div class="text item">
                <span>{{card.innerOption}}</span>
              </div>

              <div class="text item">
                <span>구인 : {{card.presentNum}}/{{card.maxNum}}</span>
              </div>
            <div class="clear"></div>

          </el-card>

          <div class="h hh"> <h1> 모집이 완료된 파티 </h1> </div>

          <el-card class="parties_wrap" @click.native="partyClick(card2)" style="background-color:rgb(251, 236, 251)">

            <div  class="clearfix">
              <div style="float:left; width:12%"> <img src="../../../public/user_icon.png" class="user_img"></div>
              <div style="float:right; width:85%; margin-top:-20px; margin-bottom:20px;">
                <span class="username">{{card2.username}}</span>
                <p class="title"><span>{{card2.title}}</span></p>
              </div>
            </div>
          <div class="clear"></div>

            <div class="text item">
              <span>{{card2.place}}</span>
            </div>
            <div class="text item">
              <span>{{card2.bigOption}}</span>
            </div>
            <div class="text item">
              <span>{{card2.innerOption}}</span>
            </div>

            <div class="text item">
              <span>구인 : {{card2.presentNum}}/{{card2.maxNum}}</span>
            </div>
          <div class="clear"></div>

        </el-card>

        </div>
      </div>
    </transition>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

    export default{
      data(){
        return{
          side : false,
          parties:[],
          card2:{},
        }
      },
      methods:{
        ...mapMutations([
                  'setCard',
              ]),
        fetchData(){
          this.$http.get('cards.json')
          .then(response => {
            return response.json();
          }).then(cards => {
            const arr = [];
            const resultArray = [];
              for(let key in cards)
                arr.push(cards[key]);
              for(var i=0; i<2; i++)
                resultArray.push(arr[arr.length-1-i]);
            this.parties = resultArray;
            return resultArray;
          });
        },
          fetchData2(){
            this.$http.get('cards2.json')
            .then(response => {
              return response.json();
            }).then(cards => {
              const vm = [];
              for(let key in cards){
                vm.push(cards[key]);
              }
              this.card2 = vm[0];
            });
        },
      partyClick(card){
        let vm = this;
        this.setCard(card);
        vm.$router.push({path:'/board/carddetail/'+card.id});
        },
      },
      created(){
        this.fetchData();
        this.fetchData2();
      },
      computed:{
        ...mapGetters([
          'getCard',
        ]),
      }
    }
</script>

<style scoped>
  .h{
    /* margin-top: 130px; */
    padding: 1px;
    padding-left: 15px;
    color: rgb(138, 159, 159);
  }

  .hh{
    margin-top: -30px;
  }

  .username{
    font-size: 40px;
  }

  .user_img{
    width: 100%;
  }

  .side-bar{
    position: fixed;
    /* border-right: 2px solid rgb(183, 194, 193); */
    z-index: 1;
    background-color: white;
    max-height: 100%;
    width: 70%;
    overflow-y: scroll;
    top:0;
    /* bottom: 0; */
    left: 0;
    overflow: scroll;
  }

  .title{
    font-size: 35px;
    margin-top: 10px;
    margin-bottom: 0;
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

  .side-button{
    z-index: 1000;
    position: fixed;
    top:10px;
    left:1%;
    width: 100px;
    height: 100px;
    padding: 0;
    font-size: 90px;
    color: rgb(173, 199, 199);
  }

.slide-enter{
  opacity: 0;
}

.slide-enter-active{
  transition: opacity .5s;
  animation: slide-in .5s ease-out forwards;
}

.slide-leave-active{
  transition: opacity .5s;
  animation: slide-out .5s ease-out forwards;
  opacity: 0  ;
}

.parties_wrap{
  height: 300px;
  margin-bottom: 20px;
  background-color: rgb(245, 255, 250);
  /* border: 2px solid rgb(183, 194, 193); */
  /* border-radius: 20px; */
  padding: 18px;

}

@keyframes slide-in {
  from{
    transform: translate(-80%);
  }
  to{
    transform: translate(0);
  }
}

@keyframes slide-out {
  from{
    transform: translate(0);
  }
  to{
    transform: translate(-80%);
  }
}

</style>
