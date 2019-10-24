<template>
  <div>
    <el-select class="filter" v-model="bigOption" placeholder="종류" @change="bigOption_change">
    <el-option
      v-for="option in bigOptions"
      :key="option.value"
      :label="option.label"
      :value="option.value">
    </el-option>
  </el-select>
  <el-select class="filter"
             v-model="innerOption"
             v-if="bigOption == '교통'"
             placeholder="세부 종류"
             style="margin-left:1%"
             @change="innerOption_change">
  <el-option
    v-for="option in innerOptions"
    :key="option.value"
    :label="option.label"
    :value="option.value">
  </el-option>
</el-select>
<el-select class="filter"
           v-model="place"
           v-if="bigOption"
           placeholder="장소"
           style="float:right;"
           @change="place_change">
<el-option
  v-for="option in places"
  :key="option.value"
  :label="option.label"
  :value="option.value">
</el-option>
</el-select>

  </div>
</template>

<script>
import {data} from '../../data'
import {eventBus} from '../../main.js'


export default {
   data() {
     return {
       bigOptions:data.bigOptions,
       innerOptions:data.innerOptions,
       places:data.places,
       bigOption: '',
       innerOption:'',
       place:'',
     }
   },
   methods:{
     bigOption_change(){
       this.$emit('bigOption_change',this.bigOption,'bigOption');
       // console.log(data.bigOptions)
     },
     innerOption_change(){
       this.$emit('innerOption_change',this.innerOption,'innerOption');
     },
     place_change(){
       this.$emit('place_change',this.place,'place');
     }
   },
   created(){
     eventBus.$on('reset',(big)=>{
       this.innerOption='';
       this.place='';
     })
   }
 }
</script>

<style lang="css" >
.filter{
  width: 32%;
  height: 80px;
}

.el-input--suffix .el-input__inner {
    padding-right: 30px;
    height: 80px;
    font-size: 40px;
}


.el-select-dropdown {
 width: 89%;
 /* height: 100%; */
 max-height: 750px;
}

.el-select-dropdown{
  position:fixed !important;
  top:250px !important;
  left:5.5% !important;
  /* top:0 !imp; */
}

.popper__arrow{
  display: none !important;
}

.el-select-dropdown__wrap {
    max-height: 750px;
}

.el-select-dropdown__item {
  font-size: 35px;
  height: 150px;
  line-height: 150px;
}
</style>
