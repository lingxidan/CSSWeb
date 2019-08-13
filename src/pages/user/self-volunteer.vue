<template>
  <div class="volInfo">
    <div class="top">
      <topNav @login="login" @registe="registe"></topNav>
    </div>
    <div class="content">
      <div class="jingli">
        <div class="part selfInfo">
          <div class="title">个人优势</div>
          <div class="partContent">{{teacher.describe}}</div>
        </div>
        <div class="part zhiwei">
          <div class="title">期望职位</div>
          <div class="partContent">
            <div class="zhiweiContent" v-for="(zhiwei,idx) in teacher.zhiwei" :key="idx">
              <span>
                <i class="el-icon-self-yingpinzhiwei"></i>
                {{zhiwei.qiwang}}
              </span>
              <span>
                <i class="el-icon-self-dingwei"></i>
                <label v-for="(addr,addrIdx) in zhiwei.city" :key="addrIdx">
                  {{addr.province+addr.city+addr.county}}
                </label>
              </span>
            </div>
          </div>
        
        </div>
        <div class="part shengya">
          <div class="title">工作经历</div>
          <div class="partContent">{{teacher.describe}}</div>
        </div>
        <div class="part jiaoyu">
          <div class="title">教育经历</div>
          <div class="partContent">{{teacher.describe}}</div>
        </div>
        <div class="part shejiao">
          <div class="title">社交主页</div>
          <div class="partContent">{{teacher.describe}}</div>
        </div>
      </div>
      <div class="self">
        <div class="name">
          <h2 class="show">{{teacher.name}}</h2>
          <p class="sex" v-if="teacher.sex==1">♀</p>
          <p class="sex" v-if="teacher.sex==0">♂</p>
        </div>
        <div class="base">
          <p>
            <i class="el-icon-self-gongzuojingyan"></i>
            <label for="">工作经验:</label>
            {{teacher.gongzuojingyan}}年
          </p>
          <p>
            <i class="el-icon-self-edu"></i>
            <label for="">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历:</label>
            {{teacher.education}}
          </p>
          <p>
            <i class="el-icon-self-touxiang"></i>
            <label for="">当前状态:</label>
            {{teacher.status}}
          </p>
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
          <p>
            <i class="el-icon-self-dianhua"></i>
            <label for="">联系电话:</label>
            {{teacher.dianhua}}
          </p>
          <p>
            <i class="el-icon-message"></i>
            <label for="">联系邮箱:</label>
            {{teacher.email}}
          </p>
        </div>
      </div>
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
        email:"dajuj@mail.com",
        describe:"本人性格开朗，双料硕士学位，现任广播电视主持人。唱歌累人，尤其喜欢在洗澡时唱歌，拥有打嗝特长的特殊技能。",
        zhiwei:[{
          qiwang:"数学教师",
          city:[{
            adcode:"75766",
            province:"山西省",
            city:"太原市",
            county:"小店区",
          },{
            adcode:"75766",
            province:"山东省",
            city:"潍坊市",
            county:"潍城区",
          }]
        },{
          qiwang:"英语教师",
          city:[{
            adcode:"75766",
            province:"内蒙古自治区",
            city:"呼和浩特市",
            county:"呼和浩特经济技术开发区",
          },{
            adcode:"75766",
            province:"山东省",
            city:"潍坊市",
            county:"潍城区",
          }]
        }]
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
    background:  @mainColor;
  }
  .content{
    margin-top: 40px;
    display: flex;
    // align-items: center;
    justify-content: center;
    .jingli{
      // box-shadow: 0 0 10px 0 #ffecb3;
      // box-shadow: 0 0 6px 0 @mainColor;
      background-color: #fff;
      width: 50%;
      padding: 48px 30px;
      margin-right: 20px;
      .part{
        padding: 0 30px;
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
        .title{
          border-left: 5px solid @secondColor;
          text-align: left;
          padding-left: 28px;
          font-size: 24px;
          font-weight: 500;
        }
        .partContent{
          // background-color: #aaa;
          margin: 20px;
          // margin-bottom: 10px;
          text-align: left;
          font-size: 20px;
          line-height: 26px;
          // letter-spacing: 1px;
          color: #61687c;
        }
      }
      .selfInfo{
        // height: 100px;
      }
      .zhiwei{
        // height: 100px;
        .zhiweiContent{
          margin-top: 12px; 
          span{
            margin-right: 10px;
          }
          &:first-child{
            margin-top: 0;
          }
        }
      }
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
      // width: 210px;
      height: 300px;
      // background-color: rgba(0, 100, 0);
      display: flex;
      flex-direction: column;
      padding: 30px;
      // background: rgb(250, 250, 250);
      // box-shadow: 0 0 5px 0 @mainColor;
      background-color: #fff;
      .name{
        text-align: left;
        margin-top: 30px;
        p,h2{
          display: inline-block;
        }
        .show{
          font-size: 28px;
          font-weight: bold;
          line-height: 33px;
          letter-spacing: 3px;
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
      .base{
        margin-top: 15px;
        p{
          text-align: left;
          height: 40px;
          font-weight: 600;
          font-size: 20px;
          label{
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>