<template lang="html">
  <el-row>
    <el-col>
      <div class="formContainer">
      <div class="form-controll">
      <el-input class="text-input" placeholder="제목" v-model="card.title"></el-input>
    </div>

  <div class="form-controll">
    <span class="help">종류</span>
    <el-select v-model="card.bigOption" placeholder="종류">
      <el-option
        v-for="item in bigOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span class="help">세부</span>
    <el-select v-model="card.innerOption" placeholder="세부">
      <el-option
        v-for="item in innerOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>

  <div class="form-controll">
    <span class="help">최대</span>
    <el-input class="num-input" placeholder="최대 인원" v-model="card.maxNum"></el-input>
    <span class="help">장소</span>
    <el-select v-model="card.place" placeholder="장소">
      <el-option
        v-for="item in places"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
</div>

  <div class="form-controll">
    <el-input
    type="textarea"
    :rows="5"
    placeholder="내용"
    v-model="card.content">
  </el-input>
</div>
<div style="width:100%">
<el-button type="primary"
           style="width:25%; height:80px; float:right"
           @click="submit">
  <span style="font-size:30px;"> 파티생성 </span></el-button>
</div>
</div>
    </el-col>
  </el-row>
</template>

<script>
import {data} from '../../data'

export default {
  data(){
    return{
      card:{
        title:'title',
        username: '1',
        place: '학술정보관',
        postTime:'3',
        bigOption:'교통',
        innerOption:'택시',
        limitTime:'마감시간:없음',
        presentNum:'1',
        maxNum:'4',
        content:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ',
        id:0,
        // img:
      },
      bigOptions:data.bigOptions,
      innerOptions:data.innerOptions,
      places:data.places,
      node:'cards',
      resource:{},

    }
  },

  methods:{
        submit(){
          var vm = this.card;
          vm.username = this.$store.getters.getUser;
          var t = new Date();
          vm.postTime = t.getMonth()+'.'+t.getDate()+' '+t.getHours()+':'+t.getMinutes();
          this.$http.get('id.json')
          .then(response => {
            return response.json();
          }).then(id => {
            console.log(vm.id);
            vm.id = id;
            this.$http.put('id.json',id+1);
          }).then(()=>{
            this.$http.post('cards.json',vm);
          }).then(()=>{
            let self = this;
            setTimeout(function() {
              self.$router.push({path: '/board/'});
            },500)
          });
            // console.log(this.card.id);
          // .then(response =>{
          //   console.log(response)
          // }, error=>{
          //   console.log(error)
          // });
          // console.log("submit run");

          // this.resource.save({node: this.node},this.card);
          // this.$router.push({path: '/'});
        },
      },

      created(){
        this.resource = this.$resource('{node}.json',{});
      }

}

</script>

<style>
  .el-input__inner{
    height: 80px;
    font-size: 40px;
  }

  .el-textarea__inner{
    font-size: 40px;
  }

</style>

<style lang="css" scoped>
  .formContainer{
    margin-top: -100px;
    background-color: rgb(255, 255, 255);
    padding: 50px;
    padding-bottom: 120px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .el-select{
    width: 32%;
  }

  .form-controll{
    margin-bottom: 18px;
  }

  .text-input{
    height: 90px;
  }

  .num-input{
    width: 32%;
  }

  .el-input{
    height: 80px;
  }

  .help{
    font-size: 40px;
    margin-right: 3.2%;
    margin-left: 3%;
  }
  /* el-row{

  } */

</style>
