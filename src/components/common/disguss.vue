<template>
  <div class="main">
    <div class="inner">
      <slot name="num"></slot>
      <div class="title">
        <div class="name">{{disguss.title}}</div>
        <div class="content">{{disguss.content}}</div>
        <div class="bottom">
          <span>
            <i class="el-icon-self-yuedu"></i>
            {{disguss.viewCnt}}次阅读
          </span>
          <span>
            <i class="el-icon-self-taolunhui"></i>
            {{disguss.disCnt}}个讨论
          </span>
        </div>
      </div>
      <div class="image">
        <img :src="disguss.img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'disguss',
  data() { 
    return {

    }
  },
  props: {
    disguss:{
      type:Object,
      default:function(){
        return {
          title:"志愿过程中的费用如何解决?",
          content:"当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取",
          img:"../../../static/img/panel_3.jpg",
          viewCnt:13000,
          disCnt:300
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
@import url('../../../static/css/main');
.main .inner{
  display: flex;
  border-bottom: 1px solid @mainColor;
  margin-left: 20px;
  margin-right: 20px;
  padding: 13px;
  cursor: pointer;
  .num{
    font-size: 35px;
    width: 100px;
    color:@secondColor;
    font-family: @secondFont;
    font-weight: bold;
    transition: .2s;
  }
  .title{
    width: 65%;
    display: flex;
    flex-direction: column;
    .name{
      text-align: left;
      height: 30px;
      font-size: 18px;
      font-weight: bold;
    }
    .content{
      width: 100%;
      height: 50px;
      font-size: 16px;
      text-align: left;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .bottom{
      width: 100%;
      height: 20px;
      padding-left:100px;
      line-height: 20px;
      text-align: left;
      span{
        font-size: 14px;
        color:rgb(192, 192, 192);
        display: inline-block;
        width: 20%;
      }
    }
  }
  .image img{
    width: 200px;
    height: 100px;
    border-radius: 10px;
  }

}
.inner:hover{
  .num{
    font-size: 40px;
    text-shadow: 0 0 3px @mainColor;
    transform: translateY(5px); 
  }
  .name{
    color:@hoverColor;
  }
}
</style>