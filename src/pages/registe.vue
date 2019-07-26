<template>
  <div class="registe" ref="registe">
    <div class="img"></div>
    <div class="teacher">
      <h1 v-if="registeForm.identy=='volunteer'" class="registe_top">欢迎加入志愿教师大家庭</h1>
      <h1 v-else class="registe_top">一站招募式平台</h1>
      <el-form :model="registeForm" status-icon :rules="rules" ref="registeForm" label-position="right" label-width="130px" class="form-cont">
        <el-form-item prop="user" label="邮箱">
          <el-input v-model="registeForm.user" autocomplete="off" placeholder="邮箱">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass" label="密码">
          <el-input type="password" v-model="registeForm.pass" autocomplete="off" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass" label="确认密码">
          <el-input type="password" v-model="registeForm.checkPass" autocomplete="off" placeholder="再次输入密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkUser" label="邮箱验证码" class="input-with-select">
          <el-input v-model="registeForm.checkUser" autocomplete="off" placeholder="验证码">
            <el-button type="info" plain slot="append" ref="code" @click="sendCode">发送验证码</el-button>
          </el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-button style="width:100%" type="primary" >登录</el-button>
        </el-form-item> -->
      </el-form>
        <el-button v-if="registeForm.identy=='volunteer'" 
          class="login_bottom" 
          @click="registe"
          style="width:70%" 
          type="primary" >开启志愿之旅</el-button>
        <el-button v-else
          class="login_bottom" 
          @click="registe"
          style="width:70%" 
          type="primary" >开启招募大门</el-button>
        <label class="login">已有账号？现在就登录</label>
    </div>
  </div>
</template>

<script>
import request from '../request/api.js'
export default {
  name: 'registe',
  userTime: {},
  data() { 
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      }else{
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(reg.test(value)){
          callback();
        }else{
          callback(new Error('邮箱格式不正确'));
        }
      }
    };
    var validateUser2 = (rule, value, callback) => {
      if(this.registeForm.user === ''){
        callback(new Error('请输入邮箱'));
      }
      if (value === '') {
        callback(new Error('请输入邮箱验证码'));
      }
      // let formData = {
      //   name: "asd",
      //   email: "1106469850@qq.com",
      // };
      // request.email(formData).then(res=>{console.log("success")})
      // .catch(error=>{console.log(error)})
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registeForm.checkPass !== '') {
          this.$refs.registeForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registeForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      panels:{},
      codeTime:{},
      registeForm: {
        user: '',
        pass: '',
        checkPass: '',
        checkUser: '',
        identy:this.$route.path.split('/')[2]
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
    // console.log(this.user)
    let screenWidth = document.documentElement.clientHeight || document.body.clientHeight
    this.$refs.registe.style.height = screenWidth + "px"
    this.panels.codeBtn = this.$refs.code
    console.log()
  },
  methods:{
    sendCode(){
      this.codeTime.startTime = new Date()
      // setTimeout(()=>{
      //   let endTime = new Date()
      //   alert(endTime-this.codeTime.startTime)
      // },1000)
      this.panels.codeBtn.innerText="已发送，请在60s内输入"
      // alert(this.codeTime.startTime)
    },
    registe(){
      let identy = this.registeForm.identy
      this.$router.push('/user/'+identy)
    }
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
  .el-button,.el-input-group__append{
    background-color: @secondColor;
    // width: 10%;
    color:white;
    padding-bottom: 13px;
    border-radius: 3px;
    border:none;
  }
  .el-input-group__append{
    padding-bottom: 0;
  }
  .el-button:hover,.el-button:focus,.el-input-group__append:hover,.el-input-group__append:focus{
    background-color: @hoverColor;
    border: none;
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
    width: 37%;
    height: 59%;
    background: url('../../static/img/registe_bc.jpg') no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-size: cover;
    border-radius: 0 50% 0 50%;
    box-shadow: 0 0 10px 10px @mainColor;
    z-index: -3;
    margin-left: 60px;
  }
  .registe_top{
    width: 100%;
    height: 33px;
    line-height: 33px;
    font-family: @secondFont;
    font-size: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color:rgba(250,184,62,0.5);
  }
  .teacher,.school{
    margin-left: -10px;
    background-color: rgba(255, 255, 255, 1);
    width: 42%;
    height: 79%;
    // display: flex;
    // flex-direction: column;
    padding-top: 40px;
    // padding-left: 50px;
    // color:white;
    // line-height: 300px;
    // font-size: 30px;
    // letter-spacing: 3px;

    // box-shadow: -9px 9px 3px 0px @mainColor;
    border-radius: 10px;
    .form-cont{
      padding: 40px 50px 30px 20px;
      // height: 70%;
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
    // .login_bottom{
    //   margin-top: 50px;
    // }
  }
  // .school{
  //   background-color: rgba(250,184,62,0.5);
  //   background:  radial-gradient(rgba(250,184,62,0.5),#fff);
  // }
}
</style>