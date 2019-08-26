<template>
  <div class="selfSch">
    <el-menu
      default-active="/user/school/schInfo"
      class="el-menu-vertical-demo"
      background-color="#fce9c7"
      active-text-color="#fba400"
      router>
      <el-menu-item index="/user/school/schInfo">
        <i class="el-icon-self-edu"></i>
        <span>学校信息</span>
      </el-menu-item>
      <el-menu-item index="/user/school/zhiweiInfo">
        <i class="el-icon-menu"></i>
        <span slot="title">招募职位</span>
      </el-menu-item>
      <el-menu-item index="/user/school/">
        <i class="el-icon-self-taolunhui"></i>
        <span slot="title">聊天室</span>
      </el-menu-item>
      <el-menu-item index="/user/school/schUser">
        <i class="el-icon-setting"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
    </el-menu>
    <div class="main">
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selfSch',
  data() { 
    return {

    }
  },
  props: {

  },
  computed:{
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
.selfSch{
  width: 100%;
  background-color: #fff;
  i{
    // color: ;
  }
  .el-menu-vertical-demo{
    width: 8%;
    padding:5px 0;
    span{
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: bold;
    }
    el-menu-item{
      height: 80px;
    }
  }
  .main{
    width: 100%;
    height: 100%;
    background-color: red;
  }
}
</style>
<style lang="less">
.selfSch{
  i{
    // color: ;
  }
  .el-menu-vertical-demo{
    width: 8%;
    padding:5px 0;
    .el-menu-item.is-active{
      background-color: #fff;
    }
    span{
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: bold;
    }
    el-menu-item{
      height: 80px;
    }
  }
}
</style>