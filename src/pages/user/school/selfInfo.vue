<template>
  <div class="main">
    <div class="info">
      <h3>个人信息</h3>
      <el-form label-position="right" :model="schoolUser" class="demo-form-inline" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="schoolUser.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="身份证">
          <el-input v-model="schoolUser.identiCard" placeholder="身份证"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="schoolUser.phone" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱">
          <el-input v-model="schoolUser.email" placeholder="联系邮箱"></el-input>
        </el-form-item>
        <el-form-item label="登录密码">
          <el-input v-model="schoolUser.password" placeholder="登录密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="zhaomu">
      <h3>招募信息</h3>
      <el-form label-position="right" :model="schoolUser" class="demo-form-inline" label-width="80px">
        <el-form-item label="管理学校" class="form-sub">
          <label>{{schoolUser.schoolCnt}}个</label>
          <router-link to="school">查看详情</router-link>
        </el-form-item>
        <el-form-item label="管理职位" class="form-sub">
          <router-link to="zhiwei">查看详情</router-link>
          <el-form label-position="right" :model="schoolUser" class="demo-form-inline">
            <el-form-item label="总数" class="form-form-label">
              <label>{{schoolUser.zhiwei.cnt}}个</label>
            </el-form-item>
            <el-form-item label="已关闭" class="form-form-label">
              <label>{{schoolUser.zhiwei.closed}}个</label>
            </el-form-item>
            <el-form-item label="招募中" class="form-form-label">
              <label>{{schoolUser.zhiwei.opened}}个</label>
            </el-form-item>
          </el-form>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selfInfo',
  data() { 
    return {
      schoolUser:{
        name:"张XX",
        identiCard:"142729********20",
        phone:"1738200****",
        email:"ajoheobn@ss.com",
        schoolCnt:8,
        zhiwei:{
          cnt:10,
          opened:6,
          closed:4
        },
      }
    }
  },
  props: {

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
.main{
  display: flex;
  .info,.zhaomu{
    padding-right: 80px;
    width: 50%;
    h3{
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      display: block;
      border-left: 3px solid #fce9c7;
      padding-left: 30px;
      margin-bottom: 20px;
      letter-spacing: 2px;
    }
  }
  .info{
    border-right: 1px solid #f7f7f7;
  }
  .zhaomu{
    margin-left: 30px;
    a{
      display: inline-block;
      margin-left: 8px;
      cursor: pointer;
      font-size: 10px;
      text-decoration: underline;
      color:#fba400;
    }
    a:hover{
      color:#fab83e;

    }
  }
}
</style>
<style lang="less">
.form-sub{
  .el-form-item__label{
    font-weight: bold;
  }
  .el-form-item__content{
    text-align: left;
  }
}
.form-form-label {
  .el-form-item__label{
    font-weight: normal;
    font-size: 12px;
  }
  .el-form-item__content{
    text-align: left;
  }
}
</style>