<template lang="html">
  <div>

    <transition-group name="introPage">
      <div class="intro" v-if="show" key="a">
        <div class="intro-container">
          <div> <span class="logo">Together</span> </div>
          <div class="introduce">
            <p>새로운 파티 매칭 플랫폼</p>
            <p>for 외로운 대학생 in 기숙사, 자취방 </p>
          </div>
          <div>
            <el-button class="start" name="button" round @click.native="show=false">start</el-button>
          </div>
        </div>
      </div>
    </transition-group>

    <div class="choose"><span>학교를 선택해주세요</span></div>

    <el-row :gutter="20" id="c">
        <el-col :span="6" v-for="i in 12"><div @click="goBoard" class="grid-content bg-purple">
          <img :src="'../../../public/university'+i+'.jpg'" style="width:100%;">
         </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:true,
    }
  },
  methods:{
    goBoard(){
      this.$router.push("/board");
    }
  }
}
</script>

<style lang="css" scoped>

#c{
  background-color: #ffffff;
  padding-top: 30px;
  box-shadow: 0 15px 52px 0 rgba(0,0,0,.1);
}

.introduce{
  font-size: 32px;
  font-family: 'Jua', sans-serif;
}

.intro{
  z-index: 2000;
  position: absolute;
  background-color: white;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
  /* width: 100vh; */
  /* height: 100vh; */
}

.logo{
  font-size:130px;
  font-family: 'Pacifico', cursive;
}

.intro-container{
  width: 70%;
  /* height: 800px; */
  /* border: 1px solid black; */
  position: relative;
  top: 30%;
  left: 17%;
  text-align: center;
}

.start{
  width: 40%;
  font-size: 50px;
  margin-top: 100px;
  /* background-color: rgb(200, 237, 255); */
  /* color: white; */
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    /* height: 230px; */
    margin-bottom: 30px;
  }

  .grid-content {
    border-radius: 4px;
    height: 200px;
    background-color: #ffffff;
    margin-bottom: 18px;
    overflow: hidden;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .choose{
    text-align: center;
    font-size: 80px;
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: 'Jua', sans-serif;
    color: rgb(121, 140, 140);
    margin-bottom: 100px;
    margin-top: 350px;
  }

  .introPage-enter{
    opacity: 0;
  }

  .introPage-enter-active{
    transition: opacity .5s;
  }

  .introPage-leave-active{
    transition: opacity .5s;
    opacity: 0  ;
  }


</style>
