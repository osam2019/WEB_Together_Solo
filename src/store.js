import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    counter: 22,
    card:{
      title:'네네 치킨 같이 시키실 분~',
      username: 'admin',
      place: '기숙사',
      postTime:'10.24 17:00',
      bigOption:'배달',
      innerOption:'치킨',
      limitTime:'마감시간:없음',
      presentNum:'4',
      maxNum:'4',
      content:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ',
      id:999,
    },
    username: 'admin',
    parties:[
      {

      },
    ]
  },

  getters:{
    getCard: state => {
      return state.card;
    },
    getUser: state =>{
      return state.username;
    }
  },

  mutations:{
    setCard: (state,payload) =>{
      state.card = payload;
    },
    setCardCounter:(state,payload)=>{
      state.card.presentNum = payload;
    }
  }

});
