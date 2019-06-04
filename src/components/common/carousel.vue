<template>
<div>
  <div class="main">
    <div class="show">
      <div class="lunbo" ref="current"></div>
      <div class="content" ref="content"></div>
    </div>
    <ul class="idxList">
      <li v-for="(info, index) in imgList" 
      :key="index" 
      :class="index == lunboList[1]?'activeli':''"></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      lunboList: [0, 0, 0],
      panels: {},
      imgList: [{
          url: "../../../static/img/panel_1.1.jpg",
          title: "../../../static/img/panel_1.1.jpg",
        },
        {
          url: "../../../static/img/panel_2.1.jpg",
          title: "../../../static/img/panel_2.1.jpg",
        },
        {
          url: "../../../static/img/panel_3.1.jpg",
          title: "../../../static/img/panel_3.1.jpg",
        },
        {
          url: "../../../static/img/panel_4.1.jpg",
          title: "../../../static/img/panel_4.1.jpg",
        },
        {
          url: "../../../static/img/panel_5.1.jpeg",
          title: "../../../static/img/panel_5.1.jpg",
        },
        {
          url: "../../../static/img/panel_6.1.jpeg",
          title: "../../../static/img/panel_6.1.jpg",
        },
      ]
    }
  },
  // computes
  mounted() {
    this.panels.current = this.$refs.current
    this.play()
  },
  methods: {
    play() {
      let _current = this.panels.current
      _current.style.backgroundImage = 'url(' + this.imgList[0].url + ')'
      this.lunboList = [this.imgList.length - 1, 0, 1]
      this.timer = setInterval(() => {
        this.move()
      }, 3000)
    },
    move() {
      let _current = this.panels.current
      this.lunboList = this.lunboList.map(idx => {
        if (idx == this.imgList.length - 1) {
          idx = 0
        } else {
          idx++;
        }
        return idx
      })
      _current.style.backgroundImage = 'url(' + this.imgList[this.lunboList[1]].url + ')'
    },
  }
}
</script>

<style lang="less" scoped>
@import '../../../static/css/main.less';
.main {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .show{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.content{
  display: inline-block;
  width: 30%;
  background-color: #fff;
  height: 200px;
  margin-right: 10%;
}
.lunbo {
  position: relative;
  background-color: #fff;
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 60%;
  height: 200px;
  display: inline-block;
  transition: 1s;
  margin-left: 10%;
}

.before,
.after {
  width: 300px;
  height: 150px;
  overflow: hidden;
}

.before .meng,
.after .meng {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}

.before {
  left: 50px;
}
.after {
  left: -50px;
}

.imgTitle {
  position: relative;
  padding: 5px;
  font-size: 15px;
  line-height: 15px;
  color: white;
  box-shadow: 0 0 30px rgba(255, 255, 255, 1);
  top: 83%;
  opacity: 1;
}

.idxList {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:5px;

  li {
    width: 5%;
    height: 3px;
    transition: 1s;
    background-color: rgba(255, 255, 255, 1);
    border-left: 1px solid @mainColor;
    &:first-of-type{
      border-left: none;
    }
  }

  li.activeli {
    background-color: @secondColor;
  }
}
</style>
