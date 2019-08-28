<template>
  <div class="chat">
    <div class="chatList">
      <ul>
        <li v-for="(chat,idx) in chatList" :key="idx" @click="chatCurrent(chat)">
          <p class="name">{{chat.name}}</p>
          <p class="last">{{chat.lastDt}}</p>
        </li>
      </ul>
    </div>
    <div class="chatInfo">
      <div class="top">
        <p class="name">{{current.name}}</p>
      </div>
      <div class="messages">

      </div>
      <div class="input">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"chat",
  data() { 
    return {
      current:{},
      chatList:[{
        name:"曾老师",
        lastDt:"2019年8月1日",
      },{
        name:"张老师",
        lastDt:"2019年8月1日",
      },{
        name:"王老师",
        lastDt:"2019年8月1日",
      }]
    }
  },
  props: {

  },
  components:{
  },
  mounted() {
  },
  methods:{
    chatCurrent(chat){
      this.current=chat
    }
  },
}
</script>

<style lang="less">
.chat{
  display: flex;
  width: 90%;
  .chatList{
    width: 22%;
    height: 560px;
    background-color: rgb(59, 59, 59);
    li{
      cursor: pointer;
      display: block;
      display: flex;
      line-height: 30px;
      padding-bottom: 30px;
      padding-top: 10px;
      border-bottom: 1px solid rgb(75, 75, 75);
      color:#f7f7f7;
      p.name{
        width: 50%;
        font-size: 16px;
        font-weight: bold;
      }
      p.last{
        width: 46%;
        font-size: 8px;
        text-align: right;
      }
      &:hover{
        background-color: rgb(29, 29, 29);
      }
    }
  }
  .chatInfo{
    width: 78%;
    border: 1px solid #f9f9f9;
    // background-color: #f9f9f9;
    .top{
      height: 60px;
      background-color: #f9f9f9;
      display: flex;
      p.name{
        text-align: center;
        padding-left: 50px;
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        line-height: 60px;
      }
    }
    .messages{
      height: 350px;
      border: 1px solid #f7f7f7;
    }
    .input{
      height: 150px;
      background-color: #f9f9f9;
    }
  }
}
</style>