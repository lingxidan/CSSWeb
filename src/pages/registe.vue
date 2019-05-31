<template>
  <div class="registe" ref="registe">
    <div class="teacher">
      我想成为志愿教师
    </div>
    <div class="school">
      我需要志愿教师
    </div>
  </div>
</template>

<script>
export default {
  name: 'registe',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
  },
  mounted() {
    let screenWidth = document.documentElement.clientHeight || document.body.clientHeight
    this.$refs.registe.style.height = screenWidth + "px"
  },
  methods:{

  },
 }
</script>

<style lang="less" scoped>
@import '../../static/css/main';
.registe{
  position: relative;
  background: url('../../static/img/registe_bc.jpg') no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .teacher,.school{
    margin: 80px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(252,233,199,0.5);
    // color:white;
    line-height: 300px;
    font-size: 30px;
    letter-spacing: 3px;
  }
  .school{
    background-color: rgba(250,184,62,0.5);
    background:  -webkit-radial-gradient(rgba(250,184,62,0.5),#fff);
  }
}
</style>