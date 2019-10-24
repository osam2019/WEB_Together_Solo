<template lang="html">
  <div>
    <el-row :gutter="20">
      <el-col :span="24"><div class="choose"><span>학교를 선택해주세요</span></div></el-col>
      <el-col :span="6" v-for="i in 12"><div @click.native="goBoard" class="grid-content bg-purple">
        <img :src="'../../../public/university'+i+'.jpg'" style="width:100%;">
       </div></el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  methods:{
    goBoard(){
      this.$router.push("/board");
    }
  }
}
</script>

<style lang="css" scoped>

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    height: 300px;
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

  }
</style>
