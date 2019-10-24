<template>
  <div>
    <!-- <div @click="detail" style="background-color : black; height: 100px; width:100px;"></div> -->
    <!-- <button @click="aaa"></button> -->
    <!-- {{getCards}} -->

    <el-button class="search" @click="searchBarShow = !searchBarShow">
      <i class="el-icon-search"></i>
    </el-button>
    <transition name="fade">
      <div class="search_bar_box" v-if="searchBarShow">
        <input class="search_bar" type="text" v-model="searchContents">
      </div>
    </transition>

    <app-filter @bigOption_change="fetchData"
                @innerOption_change="filter"
                @place_change="filter"
                ></app-filter>
    <div class="contain">
      <template v-if="show">
        <el-row>
          <el-col @click.native="cardDetail(card)" v-for="card in cards">
            <app-card :card='card'
            ></app-card>
          </el-col>
        </el-row>
      </template>
    </div>
    <el-button class="up_btn" icon="el-icon-arrow-up" @click.prevent="goTop"circle></el-button>
</div>


</template>

<script>
import Card from './Card.vue'
import Filter from '../filter/Filter.vue'
import { mapGetters } from 'vuex'
import {filter_func} from './FilterFuncs'
import {eventBus} from '../../main.js'
import { mapMutations } from 'vuex'

  export default{
    data(){
      return{
        show: true,
        cards:[],
        bigOptionCards:[],
        innerOptionCards:[],
        placeCards:[],
        bigOption: '',
        innerOption:'',
        place:'',
        innerOptionCheck: false,
        placeCheck: false,
        searchContents: '',
        searchBarShow: false,
      }
    },
    methods:{
        goTop(){
          window.scrollTo(0, 0);
        },
        ...mapMutations([
          'setCard',
        ]),
        cardDetail(card){
          this.setCard(card);
          let vm = this;
          setTimeout(()=>{
            vm.$router.push({
                              path:'/board/carddetail/'+card.id,
                            });
          },100);
        },

      // consol(card){
      //   console.log(card);
      // },
      fetchData(value, prop){
        this.$http.get('cards.json')
        .then(response => {
          return response.json();
        }).then(cards => {
          const resultArray = [];
          if(value){
            eventBus.$emit('reset',this.bigOption);
            this.innerOptionCheck = false;
            this.placeCheck = false;
          for(let key in cards){
            if(cards[key][prop] == value)
              resultArray.push(cards[key]);
            }
          }
          else{
            for(let key in cards){
              resultArray.push(cards[key]);
            }
          }
          resultArray.reverse();
          this.cards = resultArray;
          this.$forceUpdate();
          this.bigOptionCards = resultArray;
          return resultArray;
        });
      },

      filter(value, prop){
        if(value){
        if(prop == 'innerOption'){
          console.log('in');
          const resultArray = [];
          var cards = this.placeCheck ? this.placeCards : this.bigOptionCards;
          for(let key in cards){
            if(cards[key][prop] == value)
              resultArray.push(cards[key]);
            }
            console.log('in');
          this.cards = resultArray;
          var cards2 = this.bigOptionCards;
          const resultArray2= [];
          for(let key in cards2){
            if(cards2[key][prop] == value)
              resultArray2.push(cards2[key]);
            }

          this.innerOptionCards = resultArray2;
          this.innerOptionCheck = true;
        }
        else{
          const resultArray = [];
          var cards = this.innerOptionCheck ? this.innerOptionCards : this.bigOptionCards;
          for(let key in cards){
            if(cards[key][prop] == value)
              resultArray.push(cards[key]);
            }
          this.cards = resultArray;
          var cards2 = this.bigOptionCards;
          const resultArray2= [];
          for(let key in cards2){
            if(cards2[key][prop] == value)
              resultArray2.push(cards2[key]);
            }
          this.placeCards = resultArray2;
          this.placeCheck = true;
        }
      }
      },



    },
    components:{
      appCard:Card,
      appFilter:Filter,
    },
    computed: {

      ...mapGetters([
        'getCard',
    ])
  },
  // computed:{
  //   getCards(){
  //     return this.$store.getters.getCards;
  //   }
  // }
    created(){
      console.log('created');
      // setTimeout(200);
      var vm = this;
      this.fetchData();
    },
  }
</script>

<style scoped>
  .search{
      z-index: 1000;
      position: fixed;
      right: 12%;
      top:10px;
      width: 100px;
      height: 100px;
      font-size: 60px;
      color: rgb(173, 199, 199);
      }

  .search_bar_box{
    z-index: 1000;
    position: fixed;
    right: 26%;
    top:4px;
    width: 60%;
    height: 104px;
    background-color: #ffffff;
    /* color: rgb(173, 199, 199); */
    /* padding-top: 10px; */
  }

  .search_bar{
    font-size: 40px;
    width: 97%;
    margin-top: 25px;
    border: 2px solid rgb(173, 199, 199);
    border-radius: 20px;
    color: rgb(59, 82, 82);
    padding: 10px;
  }

  .fade-enter{
    opacity: 0;
  }

  .fade-enter-active{
    transition: opacity .5s;
  }

  .fade-leave-active{
    transition: opacity .5s;
    opacity: 0  ;
  }


  .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }

  .contain{
    margin-top: 30px;
  }

  .up_btn{
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 800;
    height: 100px;
    font-size: 75px;
    border: 1px;
    color:rgb(154, 176, 176);
    border: 1px solid rgb(173, 199, 199);
  }
</style>
