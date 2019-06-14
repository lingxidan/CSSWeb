<template>
  <div class="registe" ref="registe">
    <div class="img"></div>
    <div v-if="user=='volunteer'" class="teacher">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="right" label-width="130px" class="form-cont">
        <el-form-item prop="user" label="邮箱">
          <el-input v-model="ruleForm.user" autocomplete="off" placeholder="邮箱">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass" label="密码">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass" label="确认密码">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="再次输入密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkUser" label="邮箱验证码">
          <el-input v-model="ruleForm.checkUser" autocomplete="off" placeholder="验证码">
          </el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-button style="width:100%" type="primary" >登录</el-button>
        </el-form-item> -->
      </el-form>
        <el-button style="width:100%" type="primary" >成为志愿教师</el-button>
        <label class="login">已有账号？现在就登录</label>
    </div>
    <div v-if="user=='school'" class="school">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="32px" class="form-cont">
        <div class="login-form-middle">
          <el-form-item prop="user">
            <el-input v-model="ruleForm.user" autocomplete="off" placeholder="邮箱/手机号">
              <i slot="prepend" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" @keyup.enter.native="login" placeholder="请输入密码">
              <i slot="prepend" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <!-- <el-form-item class="registe"> -->
          <!-- </el-form-item> -->
          <el-form-item>
            <el-button style="width:100%" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from '../request/api.js'
export default {
  name: 'registe',
  data() { 
    var validateUser = (rule, value, callback) => {
          // sendToMail("lingxi_danx@sina.com", 123123)
          // sendToMail("1106469850@qq.com", 123123)
      let formData = {
        name: "asd",
        email: "1106469850@qq.com",
      };
      request.email(formData).then(res=>{console.log("success")})
      .catch(error=>{console.log(error)})
      // if (value === '') {
      //   callback(new Error('请输入邮箱'));
      // }else{
      //   var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      //   if(reg.test(value)){
      //     callback();
      //   }else{
      //     callback(new Error('邮箱格式不正确'));
      //   }
      // }
    };
    var validateUser2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      user: this.$route.path.split('/')[2],
      ruleForm: {
        user: '',
        pass: '',
        checkPass: '',
        checkUser: ''
      },
      rules: {
        user: [
          { validator: validateUser, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass:[
          { validator: validatePass2, trigger: 'blur' }
        ],
        checkUser:[
          { validator: validateUser2, trigger: 'blur' }
        ]
      }
    }
  },
  props: {

  },
  components:{
  },
  created(){
    
  },
  mounted() {
    console.log(this.user)
    let screenWidth = document.documentElement.clientHeight || document.body.clientHeight
    this.$refs.registe.style.height = screenWidth + "px"
  },
  methods:{

  },
 }
</script>

<style lang="less">
@import '../../static/css/main';
.registe{
  .el-input__inner, .el-checkbox__inner, .el-textarea__inner, .el-button {
    border-radius: 13px 0 13px 0;
    border-color: @mainColor;
    // display: inline;
    z-index:10;
  }
  .el-icon-arrow-up:before{
    color:@mainColor;
  }
  .el-button{
    background-color: @secondColor;
    width: 10%;
    color:white;
    padding-bottom: 13px;
    border-radius: 3px;
  }
  .el-button:hover,.el-button:focus{
    background-color: @hoverColor;
  }
  .el-input__inner:hover,.el-input__inner:focus{
    border-color: @secondColor;
  }
  .el-form-item__label{
    // letter-spacing: 3px;
    font-family: @thirdFont;
    font-size: 17px;
    // font-weight: bold;
  }
}
</style>


<style lang="less" scoped>
@import '../../static/css/main';
.registe{
  z-index: 1;
  position: relative;
  padding-left: 100px;
  // padding-right: 80px;
  // background:  linear-gradient(60deg,#fff 30%,@hoverColor 30%, @secondColor 90%);
  // background: linear-gradient(60deg, #fff 33.3%, @hoverColor 0, @hoverColor 66.6%,@secondColor 0); 
  background: linear-gradient(60deg, @secondColor 33.3%, @hoverColor 0, @hoverColor 67%,#fff 0); 
  overflow: hidden;
  display: flex;
  align-items: center;
  // justify-content: center;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba(252,233,199,0.4);
    z-index: -1;
  }
  .img{
    width: 33%;
    height: 55%;
    background: url('../../static/img/registe_bc.jpg') no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-size: cover;
    border-radius: 0 50% 0 50%;
    box-shadow: 0 0 10px 10px @mainColor;
    z-index: -3;
  }
  .teacher,.school{
    margin-left: -20px;
    background-color: rgba(255, 255, 255, 1);
    width: 45%;
    height: 85%;
    padding-top: 40px;
    // padding-left: 50px;
    // color:white;
    // line-height: 300px;
    // font-size: 30px;
    // letter-spacing: 3px;
    .form-cont{
      padding: 30px;
      // padding-right: 100px;
    }
    .login{
      position: relative;
      display: block;
      height: 10px;
      line-height: 10px;
      font-size: 13px;
      margin-top: 20px;
      text-decoration: underline;
      cursor: pointer;
      &:hover{
        color: @hoverColor;
      }
    }
  }
  // .school{
  //   background-color: rgba(250,184,62,0.5);
  //   background:  radial-gradient(rgba(250,184,62,0.5),#fff);
  // }
}
</style>