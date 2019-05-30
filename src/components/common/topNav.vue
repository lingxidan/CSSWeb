<template>
  <div class="main">
  	<img class="logo" src="../../../static/img/logo.png" />
    <nav class="mainNav">
      <a href="#nowhere" title="首页">首页</a>
      <a href="#nowhere" title="教职岗位">教职岗位</a>
      <a href="#nowhere" title="支教志愿者">支教志愿者</a>
      <a href="#nowhere" title="支教学校">支教学校</a>
      <a href="#nowhere" title="心得交流">心得交流</a>
    </nav>
    <nav class="want">
      <a href="#nowhere" title="我想支教">我想支教</a>
      <a href="#nowhere" title="招募教师">招募教师</a>
    </nav>
    <div class="user">
      <button>注册</button>
      <button>登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import '../../../static/css/main.less';
.main{
  // background-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(252,233,199);
  // background-color: rgba(231, 206, 158, 0.7);
  padding: 8px;
  text-align: center;
  img{
  	width:60px;
    height:30px;
    vertical-align:middle;
  }
  nav{
    display:inline-block;
    background-size:cover;
    padding-left: 25px;
    padding-right: 10px;
    height: 30px;
    margin-left: 10px;
    vertical-align:middle;
  }
  a{
    position: relative;
    line-height:30px;
    height:30px;
    width: 90px;
    text-align: center;
    font-size: 13px;
  }
  nav.mainNav{
    background: url("../../../static/img/nav_bc.png") no-repeat;
    margin-right: 40px;
    a{
      color:whitesmoke;
      border: 1px solid transparent;
    }
    a:hover{
      box-shadow: 0 0 3px 2px white;
      background-color: rgba(240,240,240,0.3);
      top: -1px;
      // box-shadow: 0 0 3px 2px #e0b36a;
    }
  }
  nav.want{
    a{
      box-shadow: 0 0 3px 2px white;
      background-color: rgba(240,240,240,0.3);
      border-radius: 20px;
      color:#472600;
      font-weight: bold;
      letter-spacing: 1px;
      margin-right: 5px;
    }
    a:hover{
      box-shadow: 0 0 3px 2px white;
      background-color: rgba(117,62,0,0.3);
      color:whitesmoke;
      // box-shadow: 0 0 3px 2px #e0b36a;
    }
  }
  .user{
    display: inline-block;
    vertical-align:middle;
    button{
      position: relative;
      width: 80px;
      height: 25px;
      border:0;
      border-radius: 10px;
      border-bottom: 1px solid #753e00;
      background-color: transparent;
      // border-top: 0;
    }
    button:hover{
      color:#753e00;
      // border-bottom: 1px solid whitesmoke;
      box-shadow: 0px 3px 1px rgba(117,62,0,0.3);
      top:-1px;
      // left:-5px;
    }
  }
}
</style>