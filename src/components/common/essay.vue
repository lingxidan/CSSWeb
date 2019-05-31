<template>
  <!-- <div class="main"> -->
    <el-col :span="6" class="elCol">
      <el-card :body-style="{ padding: '0px' }" class="card">
        <img :src="essay.img" class="image">
        <div class="bottom_text">
          {{essay.title}}
        </div>
        <div class="mask"></div>
      </el-card>
    </el-col>
    
  <!-- </div> -->
</template>

<script>
export default {
  name: 'essay',
  data() { 
    return {
    }
  },
  props: {
    essay:{
      type:Object,
      default:function () {
        return {
          title:"记支教XX县XX小学的趣事",
          img:"../../../static/img/panel_2.jpg",
          autor:"XXX",
          autor_img:"../../assets/logo_vue.png",
        }
      }
    }
  },
  components:{
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style lang="less" scoped>
@import url("../../../static/css/main");
.elCol{
  cursor: pointer;
}
.bottom_text {
  // margin-top: 13px;
  line-height: 13px;
  padding: 12px;
  text-align: left;
  font-family: @thirdFont;
}

.image {
  width: 100%;
  display: block;
}
.mask {
  position: absolute;
  // top: -height;
  left: 0;
  width: 100%;
  color: #ffffff;
  transition: .5s;
}
.card{
  position: relative;
  margin-top:5px;
}
.card:hover{
  transform: translateZ(1px) scale(1.01,1.01);
  .mask{
    // border-top:5px solid @secondColor;
    top:0;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>