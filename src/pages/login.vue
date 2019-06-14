<template>
  <div class="login" ref="login">
    <div class="title">
      知识就是力量
    </div>
    <div class="form-out-cont">
      <el-button class="cancel" @click="cancel">X</el-button>
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
        <!-- <label class="registe" @click="registe">没有账号？加入我们</label></label> -->
        <div class="hr"></div>
        <div class="login-form-bottom">
          <div class="text">师者教师志愿者招募平台</div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() { 
    return {
      ruleForm: {
        user: '',
        pass: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  props: {

  },
  components:{
  },
  mounted() {
    let screenWidth = document.documentElement.clientHeight || document.body.clientHeight
    this.$refs.login.style.height = screenWidth + "px"
  },
  methods:{
    cancel(){
      this.$emit("cancel")
    },
    registe(){
      this.$router.push('/registe')
    },
    login(){
      console.log(this.ruleForm)
    }
  },
 }
</script>

<style lang="less" scoped>
@import '../../static/css/main';
.login{
  position: relative;
  // background: url('../../static/img/login_bc.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  .cancel{
    font-size: 16px;
    padding: 5px;
    width: 30px;
    height: 30px;
    position: relative;
    // border-color: #fff;
    border: none;
    // background-color: @mainColor;
    top: 30px;
    left: 180px;
    // color: white;
    &:hover{
      color: @hoverColor;
      // background-color:@hoverColor;
    }
  }
  .title{
    position: absolute;
    width: 100%;
    height: 80px;
    top:10%;
    // background-color: rgba(252,233,199,0.8);
    // background-color: rgba(250,184,62,0.5);
    // background-color: rgba(251,164,0,0.6);
    // background-color: rgba(255,255,255,1);
    line-height: 80px;
    font-size: 40px;
    color: white;
    letter-spacing: 5px;
    font-weight: bolder;
    text-shadow: 3px 3px 2px @hoverColor;
  }
  .form-out-cont {
    position: relative;
    width: 25rem;
    // height: auto;
    border-radius: 10px;
    margin:0 auto;
    top:46%;
    // margin-top: 50%;
    transform: translateY(-50%);
  }
  .form-top-button {
    width: 100%;
    height: 3.2rem;
    margin-bottom: 1.25rem;
    // border: 2px solid #64bee3;
    border-radius: 5px;
  }
  .form-top-button span {
    font-size: 1rem;
    line-height: 3.2rem;
    display: inline-block;
    width: 100%;
    text-align: center;
    // color: #64bee3;
  }
  .form-cont {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding-top: 1.5rem;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);
    // background-color: rgba(250,184,62,1);
    // background-color: rgba(252,233,199,0.7);
    justify-content: space-between;
  }
  .login-form-top {
    font-size: 1.25rem;
    text-align: center;
    // color: #64bee3;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 30px;
  }
  .login-form-middle {
    padding: 1rem 2rem 0rem 0rem;
  }
  .login-form-bottom {
    padding: 0rem 0rem 1rem 0rem;
  }
  .form-cont .text {
    font-size: .8rem;
    width: 100%;
    text-align: center;
    color:@secondColor;
    text-shadow: 0 0 3px white;
    letter-spacing: 2px;
    // color: white;
  }
  .registe{
    height: 10px;
    line-height: 10px;
    font-size: 13px;
    margin-bottom: 5px;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
      color: @hoverColor;
    }
  }
}
.login:before{
  content: "";
  position: absolute;
}
</style>
<style lang="less">
@import '../../static/css/main';
.login{
.el-input__inner{
  height: 42px;
  // border: none;
  border-color: @mainColor;
}
.el-input-group__prepend{
  background-color: @mainColor;
  // border-color: @mainColor;
  border: none;
  color:white;
}
.el-form-item.is-error .el-input__inner{
  border-color: @mainColor;
}
.el-form-item.is-success .el-input__inner{
  border-color: @mainColor;
}
.el-input__icon{
  font-size: 20px;
}
.el-form-item__error{
  position: absolute;
  top: 45%;
  left: 67%;
  transform: translate(0,-50%);
}
}
</style>
<style lang="less">
@import '../../static/css/main';
.el-message .el-message__content{
  color:@secondColor;
  display: inline-block;
  margin-left:30px;
}
.el-self-message{
  background-color: #fff;
  border-color: @mainColor;
}

.el-input__inner:hover,.el-input__inner:focus{
  border-color: @secondColor;
}
</style>