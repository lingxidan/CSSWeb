<template>
<div class="index">
  <div class="top" ref="top">
    <topNav></topNav>
    <div class="show">
      <!-- <div class="panels"> -->
      <carousel></carousel>
      <!-- </div> -->
    </div>
  </div>
  <div class="main">
    <div class="search" ref="search">
      <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="info">
      <div class="teachers"></div>
      <div class="volunteers"></div>
    </div>
    <div class="articles"></div>
    <div class="postCard"></div>
  </div>
  <div class="footer"></div>
  <div class="rightNav" ref="rightNav">
    <ul>
      <li>登录</li>
      <li>注册</li>
      <!-- <li>我的信息</li> -->
      <li>聊天室</li>
      <!-- <li>传播分享</li> -->
      <el-popover
        placement="top-start"
        width="200"
        trigger="hover">
        <input type="text" id="copy_url" :data-clipboard-text="test" v-model="test"/>
        <button ref="copy"  data-clipboard-action="copy"
        data-clipboard-target="#copy_url" @click="copy">
          复制网址
        </button>
        <!-- <label id="copy_url" :data-clipboard-text="test">{{test}}</label> -->
        <li slot="reference">传播分享</li>
        <!-- <li>传播分享</li> -->
      </el-popover>
    </ul>
  </div>
  <div class="leftNav" ref="leftNav">
    <ul>
      <li>招募信息</li>
      <li>文章</li>
      <li>交流区</li>
      <li class="top"
      @mouseenter.self="handleTopEnter" 
      @mouseleave.self="handleTopLeave">
        <p class="arrow" v-if="moveArrow">&lt;</p>
        <p v-else>返回顶部</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import topNav from '@/components/common/topNav.vue'
import carousel from '@/components/common/carousel.vue'
import Clipboard from 'clipboard';
export default {
  components: {
    topNav,
    carousel
  },
  data() {
    return {
      test:"赋值",
      panels: {},
      moveArrow: true,
      input3: "",
      select: ""
    }
  },
  mounted() {
    this.panels.top = this.$refs.top
    this.panels.search = this.$refs.search
    this.panels.rightNav = this.$refs.rightNav
    this.panels.leftNav = this.$refs.leftNav
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  methods: {
    handleScroll() {
      let _top = this.panels.top
      let _search = this.panels.search
      let _rightNav = this.panels.rightNav
      let _leftNav = this.panels.leftNav

      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let topHeight = _top.clientHeight
      let searchHeight = _search.clientHeight
      let searchWidth = _search.clientWidth
      if (scrollTop > topHeight) {
        _search.style.position = "fixed"
        _search.style.top = "10px"
        _search.style.width = searchWidth + "px"
        _rightNav.style.opacity = "1"
        _leftNav.style.opacity = "1"
      } else {
        _search.style.position = "relative"
        _rightNav.style.opacity = "0"
        _leftNav.style.opacity = "0"
      }
    },
    handleTopEnter(){
      this.moveArrow = false
    },
    handleTopLeave(){
      this.moveArrow = true
    },
    copy() {
      // this.copyBtn = new this.$clipboard(this.$refs.copy)
      // let clipboard = this.copyBtn  
      let clipboard = new Clipboard(this.$refs.copy)
      console.log(clipboard)
      console.log("clipboard")
      clipboard.on('success', e => {  
        console.log("复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
        // 释放内存  
        clipboard.destroy()  
      })  
      clipboard.on('error', e => {  
        // 不支持复制  
        console.log('该浏览器不支持自动复制')  
        // 释放内存  
        clipboard.destroy()  
      })  
    },
  }
}
</script>

<style lang="less" scoped>
@import '../../../static/css/main';

.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .top {
    background-color: @mainColor;
    width: 100%;

    .show {
      padding: 20px;
    }
  }
}

.index>.main {
  margin: 10px;
  width: 80%;
  height: 1000px;
}

.leftNav,
.rightNav {
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  opacity: 0;
  transition: opacity .5s ease;

  li {
    width: 100%;
    line-height: 30px;
    background-color: #fff;
    font-size: 14px;
    border: 1px solid @mainColor;
    border-top: 0;
    padding: 5px;
    text-align: center;
    overflow: hidden;
  }

  li:first-child {
    border-top: 1px solid @mainColor;
  }
}

.leftNav {
  left: 0;

  li.top {
    p.arrow {
      display: block;
      color: white;
      transform: rotate(90deg) scaleX(3) scaleY(8);
      margin-left: -10px;
    }
  }
}

.rightNav {
  right: 10px;
}
</style>
