<template>
  <div class="volInfo">
    <div class="top">
      <topNav @login="login" @registe="registe"></topNav>
    </div>
    <div class="content">
      <div class="jingli">
        <div class="part baseInfo">
          <div class="left">
            <div class="name">
              <h2 class="show">{{teacher.name}}</h2>
              <p class="sex" v-if="teacher.sex==1">♀</p>
              <p class="sex" v-if="teacher.sex==0">♂</p>
            </div>
            <div class="base">
              <p class="row-base">
                <span>
                  <i class="el-icon-self-gongzuojingyan"></i>
                  {{teacher.gongzuojingyan}}年经验
                </span>
                <span>
                  <i class="el-icon-self-edu"></i>
                  {{teacher.education}}学历
                </span>
                <span>
                  <i class="el-icon-self-touxiang"></i>
                  {{teacher.status}}
                </span>
                <!-- <span>
                  <i class="el-icon-suitcase"></i>
                  <i class="el-icon-message"></i>
                  <i class="el-icon-self-dianhua"></i>
                  <i class="el-icon-self-dingwei"></i>
                  <i class="el-icon-self-gongzuojingyan"></i>
                  <i class="el-icon-self-edu"></i>
                  <i class="el-icon-self-touxiang"></i>
                  <i class="el-icon-self-ico"></i>
                  <i class="el-icon-self-yingpinzhiwei"></i>
                </span> -->
              </p>
              <p class="row-contact">
                <span>
                  <i class="el-icon-self-dianhua"></i>
                  {{teacher.dianhua}}
                </span>
                <span>
                  <i class="el-icon-message"></i>
                  {{teacher.email}}
                </span>
              </p>
            </div>
          </div>
          <div class="right"></div>
        </div>
        <div class="part selfInfo"></div>
        <div class="part zhiwei"></div>
        <div class="part shengya"></div>
        <div class="part jiaoyu"></div>
        <div class="part shejiao"></div>
      </div>
      <div class="self"></div>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/common/topNav.vue'
export default {
  name: 'volInfo',
  data() { 
    return {
      teacher:{
        name:"曾小贤",
        sex:1,
        gongzuojingyan:2,
        education:"本科",
        status:"暂不考虑",
        dianhua:456423578,
        email:"dajuj@mail.com"
      }
    }
  },
  props: {

  },
  components:{
    topNav
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style lang="less" scoped>
@import '../../../static/css/main';
.volInfo{
      // background-color: #fafafa;
  .top{
    background:  linear-gradient(@mainColor 40%, transparent);
  }
  .content{
  margin-top: 60px;
    display: flex;
    // align-items: center;
    justify-content: center;
    .jingli{
      // box-shadow: 0 0 10px 0 #ffecb3;
      box-shadow: 0 0 10px 0 #ffe57f;
      width: 770px;
      padding: 58px 0;
      margin-right: 30px;
      .part{
        padding: 0 30px;
        margin-bottom: 10px;
      }
      .baseInfo{
        height: 100px;
        // background-color: rgb(104, 104, 104);
        display: flex;
        .left{
          width: 80%;
          padding: 10px;
          .name{
            text-align: left;
            p,h2{
              display: inline-block;
            }
            .show{
              font-size: 24px;
              font-weight: 400;
              line-height: 33px;
            }
            .sex{
              border: 1px solid @secondColor;
              color:  @secondColor;
              font-weight: 900;
              line-height: 33px;
              width: 33px;
              text-align: center;
              border-radius: 50% 50% 50% 0;
              margin-left: 5px;
            }
          }
        }
      }
      .selfInfo{
        height: 100px;
        background-color: rgb(179, 5, 5);}
      .zhiwei{
        height: 100px;
        background-color: rgb(46, 20, 20);}
      .shengya{
        height: 100px;
        background-color: rgb(211, 106, 106);}
      .jiaoyu{
        height: 100px;
        background-color: rgb(129, 114, 114);}
      .shejiao{
        height: 100px;
        background-color: rgb(102, 18, 18);}
    }
    .self{
      width: 210px;
      height: 100px;
      background-color: rgba(0, 100, 0);
    }
  }
}
</style>