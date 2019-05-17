<template>
  <div>
    <div class="top">
      <topNav></topNav>
      <div class="show">
        <!-- <div class="panels"> -->
          <carousel></carousel>
        <!-- </div> -->
      </div>
    </div>
    <div class="main">
      <div class="search"></div>
    </div>
  </div>
</template>
<script>
import topNav from '@/components/common/topNav.vue'
import carousel from '@/components/common/carousel.vue'
export default {
  components:{
    topNav,
    carousel
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.top{
  background-color: #fce9c7;
  .show{
    // display: flex;
    padding: 20px;
  }
}
</style>