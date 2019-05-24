<template>
<div class="index">
  <div class="top" ref="top">
    <topNav></topNav>
    <div class="show">
      <carousel></carousel>
    </div>
  </div>
  <div class="main">
    <div class="search" ref="search">
      <el-select name="" id="" 
      v-model="searchMsg.select.value"
      class="searchSel">
        <el-option v-for="sel in searchSel" 
        :key="sel.id" :value="sel.value"
        :label="sel.label"></el-option>
      </el-select><el-input v-model="searchMsg.searchText"  placeholder="请输入内容" 
      class="input-with-select searchInput">
      </el-input><el-button icon="el-icon-search">搜索</el-button>
    </div>
    <div class="info" ref="info">
      <div class="teachers">
        <teacher :teacher="teacher"></teacher>
        <teacher :teacher="teacher"></teacher>
      </div>
      <div class="volunteers">
        <volunteer></volunteer>
      </div>
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
        <li slot="reference" style="border-top:none;">传播分享</li>
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
import teacher from '@/components/common/teacher.vue'
import volunteer from '@/components/common/volunteer.vue'
import Clipboard from 'clipboard'

export default {
  components: {
    topNav,
    carousel,
    teacher,
    volunteer
  },
  data() {
    return {
      url: "https://lingxidan.github.io/",
      panels: {},
      moveArrow: true,
      input3: "",
      searchSel:[
        {
          id:0,
          field:"total",
          label:"全部",
          value:"全部"
        },
        {
          id:1,
          field:"school",
          label:"学校",
          value:"学校"
        },
        {
          id:2,
          field:"teacher",
          label:"教职",
          value:"教职"
        }
      ],
      teacher:{
        name:"数学教师",
        during:"4-10年",
        education:"本科",
        teacherCert:true,
        schoolName:"XXX小学",
        schoolAddr:"北京市 北京市 朝阳区",
        contactImg:"/src/assets/logo_vue.png",
        contactPerson:"刘女士",
        contactJob:"教育局代表人",
      },
      searchMsg:{
        select: "",
        searchText:""
      }
    }
  },
  mounted() {
    this.panels.top = this.$refs.top
    this.panels.search = this.$refs.search
    this.panels.rightNav = this.$refs.rightNav
    this.panels.leftNav = this.$refs.leftNav

    this.panels.info = this.$refs.info
    this.handleScroll()
    this.searchMsg.select = this.searchSel[0]
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
      let _info = this.panels.info

      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let topHeight = _top.clientHeight
      let searchHeight = _search.clientHeight
      let searchWidth = _search.clientWidth
      if (scrollTop > topHeight) {
        _search.style.position = "fixed"
        _search.style.top = "0px"
        _search.style.left = "0px"
        _search.style.right = "0px"
        _search.style.backgroundColor = "#fce9c7"
        _search.style.zIndex = "5"
        console.log(_search.style)
        _rightNav.style.opacity = "1"
        _leftNav.style.opacity = "1"
        _rightNav.style.display = ""
        _leftNav.style.display = ""
        _info.style.marginTop = searchHeight + "px"
      } else {
        _search.style.position = "relative"
        _search.style.top = "0px"
        _search.style.backgroundColor = "inherit"
        _rightNav.style.display = "none"
        _leftNav.style.display = "none"
        _rightNav.style.opacity = "0"
        _leftNav.style.opacity = "0"
        _info.style.marginTop = "0px"
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
@import '../../static/css/main';
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .top {
    background-color: @mainColor;
    width: 100%;
    topNav{
      padding: 5px;
    }

    .show {
      padding: 20px;
    }
  }
}
.index>.main {
  position: relative;
  padding: 3px;
  width: 85%;
  height: 1000px;
  .search{
    padding-top: 10px;
    padding-bottom: 10px;
    .searchSel{
      width: 10%;
    }
    .searchInput{
      width: 60%;
    }
  }
  .info{
    padding-top: 10px;
    width: 100%;
    display: flex;
    .circle{
      width: 50px;
      height: 50px;
      border:1px solid @mainColor;
      background-color: @mainColor;
      border-radius: 50%;
    }
    .teachers{
      width: 50%;
    }
    .volunteers{
      width: 50%;
    }
  }
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
    border: 1px solid @secondColor;
    border-top: 0;
    padding: 5px;
    text-align: center;
    overflow: hidden;
  }

  li:first-child {
    border-top: 1px solid @secondColor;
  }
}

.leftNav {
  left: 0;
  li.top {
    background-color:@secondColor;
    p.arrow {
      display: block;
      color: white;
      transform: rotate(90deg) scaleX(3) scaleY(8);
      margin-left: -10px;
    }
  }
  li.top:hover{
    background-color:@hoverColor;
    color:white;
  }
}

.rightNav {
  right: 10px;
}

#copy_url{
  display: inline-block;
  background-color: rgb(252, 252, 252);
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
.copyBtn:hover{
  background-color: @hoverColor;
  color:white;
}

</style>
