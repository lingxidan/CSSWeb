<template>
<div class="index">
  <!--导航栏以及轮播图-->
  <div class="top" ref="top">
    <topNav></topNav>
    <div class="show">
      <carousel></carousel>
    </div>
  </div>
  <!--左右导航-->
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
  <!-- 主板块显示 -->
  <div class="main">
    <!-- 搜索栏 -->
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
    <!-- 招募职位、志愿者信息查看 -->
    <div class="info" ref="info">
      <div class="title">招募信息</div>
      <div class="teachers">
        <teacher v-for="(teacher,index) in teachers" :key="index"
        :teacher="teacher"></teacher>
      </div>
      <div class="volunteers">
        <volunteer v-for="(volunteer,index) in volunteers" :key="index"
        :volunteer="volunteer"></volunteer>
      </div>
    </div>
    <!-- 热门帖子 -->
    <div class="postCard">
      <div class="title">讨论交流区</div>
      <el-tabs tab-position="top" type="card" class="elTabs">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-self-hot"></i> 热榜</span>
          <disguss v-for="(index,o) in 4" :key="index" :disguss="disgussHot">
            <div slot="num"><div class="num">{{index}}</div></div>
          </disguss>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-star-on"></i> 关注</span>
          <disguss v-for="(index,o) in 5" :key="index" :disguss="disgussStar">
            <div slot="num"><div class="num"></div></div>
          </disguss>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 日志文章 -->
    <div class="articles">
      <div class="title">日志文章</div>
      <el-row :gutter="10">
        <!-- <el-col :span="6"  class="el-col"> -->
          <article-info v-for="(index, o) in 8" :key="index"></article-info>
        <!-- </el-col> -->
        
      </el-row>
    </div>
  </div>
  <div class="footer">
    <div class="main">
      <div class="report">
        <ul>
          <li>侵权举报</li>
          <li>有害信息举报</li>
          <li>违法和不良信息举报</li>
        </ul>
      </div>
      <div class="license">
        <ul>
          <li>电信与服务业务经营许可证</li>
          <li>网络文化经营许可证</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>
    <div class="bottom">师者教师志愿者平台 ©2019 </div>
  </div>

</div>
</template>

<script>
import topNav from '@/components/common/topNav.vue'
import carousel from '@/components/common/carousel.vue'
import teacher from '@/components/common/teacher.vue'
import volunteer from '@/components/common/volunteer.vue'
import articleInfo from '@/components/common/article.vue'
import disguss from '@/components/common/disguss.vue'
import Clipboard from 'clipboard'

export default {
  components: {
    topNav,
    carousel,
    teacher,
    volunteer,
    articleInfo,
    disguss
  },
  data() {
    return {
      url: "https://lingxidan.github.io/",
      panels: {},
      moveArrow: true,
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
      teachers:[
        {
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
        {
          name:"语文教师",
          during:"1-5年",
          education:"本科",
          teacherCert:true,
          schoolName:"XXX小学",
          schoolAddr:"北京市 北京市 朝阳区",
          contactImg:"/src/assets/logo_vue.png",
          contactPerson:"张先生",
          contactJob:"校长",
        },
        {
          name:"语文教师",
          during:"1-5年",
          education:"本科",
          teacherCert:true,
          schoolName:"XXX小学",
          schoolAddr:"北京市 北京市 朝阳区",
          contactImg:"/src/assets/logo_vue.png",
          contactPerson:"张先生",
          contactJob:"校长",
        },
        {
          name:"语文教师",
          during:"1-5年",
          education:"本科",
          teacherCert:true,
          schoolName:"XXX小学",
          schoolAddr:"北京市 北京市 朝阳区",
          contactImg:"/src/assets/logo_vue.png",
          contactPerson:"张先生",
          contactJob:"校长",
        },
        {
          name:"语文教师",
          during:"1-5年",
          education:"本科",
          teacherCert:true,
          schoolName:"XXX小学",
          schoolAddr:"北京市 北京市 朝阳区",
          contactImg:"/src/assets/logo_vue.png",
          contactPerson:"张先生",
          contactJob:"校长",
        }],
      volunteers:[{
          name:"张老师",
          during:"4-10年经验",
          education:"本科",
          projects:["数学","英语","语文"],
        },
        {
          name:"曾老师",
          during:"3-5年经验",
          education:"研究生",
          projects:["数学","语文"],
        },
        {
          name:"曾老师",
          during:"3-5年经验",
          education:"研究生",
          projects:["数学","语文"],
        },
        {
          name:"曾老师",
          during:"3-5年经验",
          education:"研究生",
          projects:["数学","语文"],
        },
        {
          name:"曾老师",
          during:"3-5年经验",
          education:"研究生",
          projects:["数学","语文"],
        }],
      searchMsg:{
        select: "",
        searchText:""
      },
      disgussHot:{
        title:"志愿过程中的费用如何解决?",
        content:"当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取当志愿教师的过程中的衣食住行的费用来自哪里，如何获取",
        img:"../../../static/img/panel_3.jpg",
        viewCnt:13000,
        disCnt:300
      },
      disgussStar:{
        title:"志愿过程中会遇到什么不可预计的事情?",
        content:"志愿过程中，会有哪些需要预防的事情，有什么应急处理方法志愿过程中，会有哪些需要预防的事情，有什么应急处理方法志愿过程中，会有哪些需要预防的事情，有什么应急处理方法",
        img:"../../../static/img/panel_1.jpg",
        viewCnt:13000,
        disCnt:300
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
        _search.style.paddingBottom = "8px"
        _rightNav.style.opacity = "1"
        _leftNav.style.opacity = "1"
        _rightNav.style.display = ""
        _leftNav.style.display = ""
        _info.style.marginTop = searchHeight + "px"
      } else {
        _search.style.position = "relative"
        _search.style.top = "0px"
        _search.style.backgroundColor = "inherit"
        _search.style.paddingBottom = "0"
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
  margin: 20px;
  margin-top: 0px;
  // height: 1000px;
  .search{
    padding-top: 10px;
    // padding-bottom: 10px;
    .searchSel{
      width: 10%;
    }
    .searchInput{
      width: 60%;
    }
  }
  .info{
    position: relative;
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .teachers{
      border-top: 5px solid @secondColor;
      display: inline-block;
      width: 50%;
    }
    .volunteers{
      border-top: 5px solid @secondColor;
      display: inline-block;
      width: 50%;
    }
  }
}

.leftNav,
.rightNav {
  
  cursor: pointer;
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
    border-bottom: 1px solid @mainColor;
    border-top: 0;
    padding: 5px;
    text-align: center;
    overflow: hidden;
  }

  li:first-child {
    border-top: 5px solid @secondColor;
  }
  li:hover{
    background-color:@mainColor;
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
.info,.articles,.postCard{
  .title{
    position: relative;
    width:100%;
    margin-top:20px;
    margin-bottom:15px;
    letter-spacing: 20px;
    font-size: 25px;
    background: url('../../static/img/nav_bc.png') no-repeat center;
    color: rgb(255,255,255,1);
    font-family: @secondFont;
  }
  .title:before{
    content: "";
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    background-color: rgba(255,255,255,.2);
  }
  .title:hover{
    color:@mainColor;
  }
}
.elTabs{
  background-color: #fff;
}

.footer {
  width: 100%;
  background-color: @mainColor;
  .main{
    width: 100%;
    display:flex;
    margin: 20px;
    margin-bottom: 5px;
    .report,.license{
      font-size: 30px;
      width: 48%;
      ul li{
        height: 20px;
        text-align: left;
      }
      ul li:hover{
        font-size: 13px;
        cursor: pointer;
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
      text-align: center;
      margin-bottom: 5px;
    }
}
</style>
