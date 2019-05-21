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
      <el-input v-model="input3"  placeholder="请输入内容" 
      class="input-with-select searchInput">
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
      <el-popover placement="top-start" trigger="hover">
        <input type="text" id="copy_url" v-model="url" readonly/>
        <button ref="copyBtn" class="copyBtn"
        data-clipboard-target="#copy_url" @click="copy">
          复制网址
        </button>
        <!-- <label id="copy_url" :data-clipboard-text="test">{{test}}</label> -->
        <li slot="reference">传播分享</li>
      </el-popover>
    </ul>
  </div>
  <div class="leftNav" ref="leftNav">
    <ul>
      <li>招募信息</li>
      <li>文章</li>
      <li>交流区</li>
      <li class="top" @mouseenter.self="handleTopEnter" @mouseleave.self="handleTopLeave" @click="scrollTop">
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
      url: "https://lingxidan.github.io/",
      panels: {},
      moveArrow: true,
      input3: "",
      select: "",
      searchSel:[
        {
          id:0,
          label:"学校",
          value:"学校"
        }
      ]
    }
  },
  mounted() {
    this.panels.top = this.$refs.top
    this.panels.search = this.$refs.search
    this.panels.rightNav = this.$refs.rightNav
    this.panels.leftNav = this.$refs.leftNav
    this.handleScroll()
    // 复制按钮
    this.clipboard = new Clipboard(this.$refs.copyBtn)
    window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  methods: {
    // 滚动条事件
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
    // 回到顶部的鼠标移入移出
    handleTopEnter() {
      this.moveArrow = false
    },
    handleTopLeave() {
      this.moveArrow = true
    },
    // 回到页面顶部
    scrollTop() {
      let speed = 80
      let timer = setInterval(function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        window.scrollTo(0, scrollTop - speed)
        if (scrollTop <= 0) {
          clearInterval(timer)
        }
      }, 50)
      window.addEventListener('click', function () {
        clearInterval(timer)
      }, true);
    },
    // 复制网址分享
    copy() {
      let _this = this
      let clipboard = _this.clipboard
      clipboard.on('success', e => {
        // alert("复制成功")
        let h = _this.$createElement
        _this.$notify({
          title: '',
          message: h('i', {
            style: 'color: teal'
          }, '复制成功'),
          duration: 1500,
          type: "success"
        });
        // 释放内存  
        clipboard.destroy()
        _this.clipboard = new Clipboard(_this.$refs.copyBtn)
      })
      clipboard.on('error', e => {
        // 不支持复制
        let h = _this.$createElement
        _this.$notify({
          title: '',
          message: h('i', {
            style: 'color: teal'
          }, '复制失败，请手动复制'),
          duration: 1500,
          type: "warning"
        });
        // 释放内存  
        clipboard.destroy()
        _this.clipboard = new Clipboard(_this.$refs.copyBtn)
      })
    }
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

#copy_url{
  display: inline-block;
  background-color: #fff;
  border:none;
  border: 1px solid @mainColor;
  margin-bottom: 5px;
  padding: 5px;
  padding-bottom: 3px;
  text-align: center;
}
.copyBtn{
  display: inline-block;
  background-color: @mainColor;
  border: none;
  padding: 5px;
}

.searchInput{
  box-shadow: 0 0 5px 5px @mainColor;
}
</style>
