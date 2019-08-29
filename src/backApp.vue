<!-- <template>
  <div id="app">
    <img src="@/assets/logo.png">
    <span>{{msg}}</span>
    <span>{{html}}</span>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template> -->

<script>
// export default {
//   name: 'app',
//   data () {
//     return {
//       // html:'<p>html-vue</p>',
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
<template>
  <div class="app" ref="app">
    <div class="main">
      <!--导航栏-->
      <div class="top" ref="top">
        <div class="title">
          师者
        </div>
        <el-menu
          default-active="/manager/school"
          class="el-menu-vertical-demo"
          background-color="#fce9c7"
          active-text-color="#fba400"
          router>
          <el-menu-item index="/manager/school">
            <i class="el-icon-self-edu"></i>
            <span>学校信息</span>
          </el-menu-item>
          <el-menu-item index="/manager/zhiwei">
            <i class="el-icon-menu"></i>
            <span slot="title">招募职位</span>
          </el-menu-item>
          <el-menu-item index="/manager/chat">
            <i class="el-icon-self-taolunhui"></i>
            <span slot="title">聊天室</span>
          </el-menu-item>
          <el-menu-item index="/manager/user">
            <i class="el-icon-setting"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <router-view/>
      </div>

    </div>
    <!-- <img src="./assets/logo.png"> -->
    <!-- 页脚 -->
    <div class="footer">
      <div class="bottom">师者教师志愿者招募平台 ©2019 </div>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/common/topNav.vue'
export default {
  name: 'App',
  components: {
    topNav
  },
  methods:{
    registe(opt){
      console.log(opt)
      this.$router.push('/manager/school')
    },
    login(){
      let _login = this.panels.login
      _login.style.display ="block"
      // this.$router.push('/login')
    },

  }
  
}
</script>

<style lang="less">
@import '../static/css/main.less';
.app {
  width: 100%;
  height: 100%;
  font-family: @mainFont;
  // font-family: 'liukai';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


div.top {
  width: 100%;
  background:  @mainColor;
  .title{
    font-size: 30px;
    margin-top: 10px;
    font-weight: bolder;
    color: white;
    text-shadow: @secondColor 0 0 5px;
  }
}
div.main{
  display: flex;
  .content{
    position: relative;
    padding:20px 30px 20px 20px;
    // right: 30px;
    width: 85%;
    height: 100%;
  }
}
.footer {
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: @mainColor;
  .main{
    width: 100%;
    display:flex;
    margin-top: 20px;
    margin-bottom: 5px;
    .report,.license{
      // font-size: 30px;
      width: 48%;
      ul li{
        font-size: 14px;
        height: 24px;
        text-align: left;
        cursor: pointer;
        &:hover{
        font-size: 14px;
        font-weight: bold;
      }
      }
    }
    .report{
      border-right:1px solid @secondColor;
      ul{
        margin-right:20px;
      }
      ul li{
        text-align: right;
      }
    }
    .license{
      ul{
        margin-left:20px;
      }
    }
  }
  .bottom{
    cursor: pointer;
    text-align: center;
    margin-bottom: 5px;
    font-size: 16px;
    font-family: @thirdFont;
    &:hover{
      color: @hoverColor;
    }
  }
}
</style>
