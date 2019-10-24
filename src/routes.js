import Home from './components/home/Home.vue';
import Board from './components/board/Board.vue';
import Header from './components/header_nav/Header.vue';
import Filter from './components/filter/Filter.vue';
import Makecard from './components/board/Makecard.vue'
import Headermake from './components/header_nav/Header_make.vue';
import Makeheader from './components/header_nav/Make_header.vue';
import AllHeader from './components/header_nav/AllHeader.vue';
import CardDetail from './components/board/carddetail/CardDetail.vue';
import Partyheader from './components/header_nav/Party_header.vue';
import PartyManage from './components/party/PartyManage.vue';



export const routes=[
  { path:'/',name:'home',components:{
      default:Home,
      'allheader':AllHeader,
  }
},

  {  path:'/board', name:'board', props: true,
    components:{
      default: Board,
      'header': Header,
      'filter': Filter,
      'make': Headermake,
      'allheader':AllHeader,
    }
  },
  { path:'/board/makecard', name:'makecard',components:{
      default: Makecard,
      'header': Makeheader,
      'allheader':AllHeader,
  },
},
  { path:'/board/carddetail/:id', name:'cardDetail',components: {
      default: CardDetail,
      'header': Makeheader,
      'make':Partyheader,
      'allheader':AllHeader,
  },
},
  { path:'/partymanage/:id', name:'partyManage',components: {
      default: PartyManage,
      'header': Makeheader,
      'allheader':AllHeader,
    },
}
];
