<template>
  <div>
    <div class="main">
      <!-- <div class="leftBtn">&lt;</div> -->
      <div class="lunbo before" ref="before">
        <div class="meng"></div>
      </div>
      <div class="lunbo current" ref="current">
      </div>
      <div class="lunbo after" ref="after">
        <div class="meng"></div>
      </div>
      <ul class="titleList">
        <li v-for="(info, index) in imgList"
        :key="index"
        :class="index == lunboList[1]?'activeli':''"
        >
        {{info.title}}
        </li>
      </ul>
      <!-- <div class="rightBtn">&gt;</div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunboList:[0,0,0],
      imgList:[
        {
          url:"../../../static/img/panel_1.1.jpg",
          title:"../../../static/img/panel_1.1.jpg",
        },
        {
          url:"../../../static/img/panel_2.1.jpg",
          title:"../../../static/img/panel_2.1.jpg",
        },
        {
          url:"../../../static/img/panel_3.1.jpg",
          title:"../../../static/img/panel_3.1.jpg",
        },
        {
          url:"../../../static/img/panel_4.1.jpg",
          title:"../../../static/img/panel_4.1.jpg",
        },
        {
          url:"../../../static/img/panel_5.1.jpeg",
          title:"../../../static/img/panel_5.1.jpg",
        },
        {
          url:"../../../static/img/panel_6.1.jpeg",
          title:"../../../static/img/panel_6.1.jpg",
        },
      ]
      // imgList:[
      //   {
      //     url:"../../assets/img/panel_1.1.jpg",
      //     title:"../../assets/img/panel_1.1.jpg",
      //   },
      //   {
      //     url:"../../assets/img/panel_2.1.jpg",
      //     title:"../../assets/img/panel_2.1.jpg",
      //   },
      //   {
      //     url:"../../assets/img/panel_3.1.jpg",
      //     title:"../../assets/img/panel_3.1.jpg",
      //   },
      //   {
      //     url:"../../assets/img/panel_4.1.jpg",
      //     title:"../../assets/img/panel_4.1.jpg",
      //   },
      //   {
      //     url:"../../assets/img/panel_5.1.jpeg",
      //     title:"../../assets/img/panel_5.1.jpg",
      //   },
      //   {
      //     url:"../../assets/img/panel_6.1.jpeg",
      //     title:"../../assets/img/panel_6.1.jpg",
      //   },
      // ]
    }
  },
  // computes
  mounted(){
    this.play()
  },
  methods: {
    play(){
      let _before = this.$refs.before
      let _current = this.$refs.current
      let _after = this.$refs.after
      // let _imgTitle = this.$refs.imgTitle
      _before.style.backgroundImage = 'url('+this.imgList[this.imgList.length-1].url+')'
      _current.style.backgroundImage = 'url('+this.imgList[0].url+')'
      _after.style.backgroundImage = 'url('+this.imgList[1].url+')'
      // _imgTitle.innerHTML = this.imgList[0].title
      this.lunboList=[this.imgList.length-1, 0, 1]
      this.timer = setInterval(()=>{
        this.move()
      }, 3000)
    },
    move(){
      // this.$refs.before.style.backgroundImage = 'url('+this.imgList[0].url+')'
      let _before = this.$refs.before
      let _current = this.$refs.current
      let _after = this.$refs.after
      // let _imgTitle = this.$refs.imgTitle
      this.lunboList = this.lunboList.map(idx=>{
        if(idx==this.imgList.length-1){
          idx = 0
        }else{
          idx++;
        }
        return idx
      })
      console.log()
      _before.style.backgroundImage = 'url('+this.imgList[this.lunboList[0]].url+')'
      _current.style.backgroundImage = 'url('+this.imgList[this.lunboList[1]].url+')'
      _after.style.backgroundImage = 'url('+this.imgList[this.lunboList[2]].url+')'
      // _imgTitle.innerHTML = this.imgList[this.lunboList[1]].title
    },
  }
}
</script>
<style lang="less" scoped>
.main{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lunbo{
  position: relative;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width:400px;
  height: 200px;
  display: inline-block;
  transition: background-image 1s ease-in;
}
.before,.after{
  width: 300px;
  height: 150px;
  overflow: hidden;
}
.before .meng,.after .meng{
  width:100%;
  height: 100%;
  background-color: rgba(255,255,255,0.5);
}
.after{
  left: -100px;
}
.current{
  z-index: 100;
  left: -50px;
}
.imgTitle{
  position: relative;
  padding: 5px;
  font-size: 15px;
  line-height: 15px;
  color:white;
  box-shadow: 0 0 30px rgba(255,255,255,1);
  top:83%;
  opacity: 1;
}
.titleList{
  position: absolute;
  right: 30px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 15px 0 rgb(226, 226, 226);
  li{
    height: 25px;
    line-height: 25px;
    margin-top: 5px;
    font-size: 14px;
    font-family: "黑体";
    transition: box-shadow 1s ease-in,
    height 1s ease-in,
    line-height 1s ease-in;
  }
  li:last-child{
    margin-bottom: 5px;
  }
  li.activeli{
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    box-shadow: 0 0 5px 5px #fce9c7;
  }
}
</style>