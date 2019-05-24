<template>
  <div class="login">
    <div class="login-bgmask">
      <div class="form-out-cont">
        <!-- <div class="form-top-button">
          <span>没有账号？点击注册</span>
        </div> -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="form-cont">
          <div class="login-form-top">
            <span>二污普农业源数据质量控制系统</span>
          </div>
          <div class="login-form-middle">
            <el-form-item label="账号" prop="user">
              <el-input v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </div>
          <div class="hr"></div>
          <div class="login-form-bottom">
            <div class="text">第二次全国农业污染源普查推进工作组办公室</div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
  <!-- 登录 end -->
</template>

<script>
// export default {
//   name: 'login',
//   data() {
//     return {
//       ruleForm: {
//         user: '',
//         pass: ''
//       },
//       rules: {
//         user: [
//           { required: true, message: '请输入用户名', trigger: 'blur' }
//         ],
//         pass: [
//           { required: true, message: '请输入密码', trigger: 'blur' }
//         ],
//       }
//     };
//   },
//   components:{
//   },
//   mounted() {
//   },
//   methods:{
//     submitForm(formName) {
//       this.$refs[formName].validate((valid) => {
//         if (valid) {
//           this.login(this.ruleForm.user, this.ruleForm.pass)
//         } else {
//           console.log('error submit!!');
//           return false;
//         }
//       });
//     },
//     resetForm(formName) {
//       this.$refs[formName].resetFields();
//     },
//      //登录
//     login(username, password){
//       requestAuth.login({username:username, password:password})
//       .then(
//         res=>{
//           if (typeof(res.data.user) !== 'undefined') {
//             this.$store.commit('user', res.data.user);
//           }
//           this.$message.success('登录成功!');
//           this.$store.commit("routerActive",1);
//           this.$router.push('/app');
//         },
//         error=>{
//           console.log(error)
//           this.$message.error(error.msg);
//         }
//       )
//     },
//   },
// }
</script>

<style scoped>
.login{
  width: 100%;
  height: 100vh;
  position: relative;
  /* background-image: url('../../assets/img/main-background.jpg'); */
  /* background-size: cover; */
}
.login-bgmask{
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 99, 0.2);
}
.form-out-cont{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
}
.form-top-button{
  width: 100%;
  height: 3.2rem;
  border: 2px solid #64bee3;
  border-radius: 5px;
  margin-bottom: 1.25rem;
}
.form-top-button span{
  display: inline-block;
  width: 100%;
  color: #64bee3;
  font-size: 1rem;
  text-align: center;
  line-height: 3.2rem;
}
.form-cont{
  width: 100%;
  height: auto;
  padding-top: 1.5rem;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.95);
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.login-form-top{
  text-align: center;
  font-size: 1.25rem;
  color: #64bee3;
}
.login-form-middle{
  padding: 1rem 2rem 1rem 0rem;
}
.login-form-bottom{
  padding: 0rem 0rem 1rem 0rem;
}
.form-cont .text{
  width: 100%;
  text-align: center;
  font-size: .8rem;
  color: gray;
  /*padding-top:15%;*/
}
/* 登录页面 end */
</style>