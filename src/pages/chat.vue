<template>
  <div class="chat">
    <div class="chatList">
      <div class="top">
        <div class="name">{{user.name}}</div>
        <div class="search">
          <el-input placeholder="查找联系人">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
      <ul>
        <li v-for="(chat,idx) in chatList" :key="idx" @click="chatCurrent(chat)">
          <div class="info">
            <p class="name">{{chat.name}}</p>
            <p class="last">{{chat.lastDt}}</p>
          </div>
          <div class="msg">
            <p class="last">{{chat.lastMsg}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="chatInfo">
      <template v-if="!current.name">
        <p class="notCurrent">
          您还未选中或发起聊天，快去聊一聊吧
        </p>
      </template>
      <template v-else>
        <div class="top">
          <p class="name">{{current.name}}</p>
        </div>
        <div class="messages">

        </div>
        <div class="input">
          <div class="emojis">
            <ul>
              <li v-for="(item,idx) in emojijs" :key="idx" @click="addEmoji(item)">{{item.char}}</li>
            </ul>
          </div>
          <el-input class="msgInput" type="textarea" placeholder="输入聊天内容" v-model="msg" 
          @keyup.native.enter.alt="onEnter" 
          @keyup.native.enter="onSubmit"></el-input>
          <!-- <el-button type="primary" @click="submit">提交</el-button> -->
        </div>
      </template>
    </div>
  </div>
</template>

<script>
const emojijs = require("../assets/emojijs.json");
export default {
  name:"chat",
  data() { 
    return {
      msg:"",
      user:{
        name:"张XX"
      },
      current:{},
      chatList:[{
        name:"曾老师",
        lastDt:"2019年8月1日",
        lastMsg:"aihgiabfjnjfa"
      },{
        name:"张老师",
        lastDt:"2019年8月1日",
      },{
        name:"王老师",
        lastDt:"2019年8月1日",
      }],
      emojijs:emojijs,
      msgs:[]
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
    },
    addEmoji(emoji){
      this.msg+=emoji.char
    },
    onSubmit(e){
      console.log(e.keyCode)
      this.msg=""
    },
    onEnter(){
      this.msg+="\n"
    }
  },
}
</script>

<style lang="less">
.chat{
  display: flex;
  width: 90%;
  height: 900px;
  .chatList{
    width: 22%;
    background-color: rgb(59, 59, 59);
    .top{
      background-color: inherit;
      .name{
        height: 50px;
        line-height: 50px;
        color:#f7f7f7;
        text-align: left;
        padding-left: 20px;
      }
      .search{
        .el-input__inner{
          background-color: #2e2e2e;
          border: none;
        }
      }
    }
    li{
      cursor: pointer;
      display: block;
      line-height: 30px;
      // padding-bottom: 30px;
      padding-top: 10px;
      border-bottom: 1px solid rgb(75, 75, 75);
      color:#f7f7f7;
      .info{
        display: flex;
      }
      p.name{
        width: 50%;
        font-size: 16px;
        font-weight: bold;
      }
      p.last{
        width: 46%;
        font-size: 4px;
        text-align: right;
        color: #7a7a7a;
      }
      &:hover{
        background-color: rgb(29, 29, 29);
      }
      
      .msg{
        height: 40px;
        .last{
          margin: 0 auto;
          width:70%;
          font-size: 4px;
          text-align: left;
          color: #b6b6b6;
        }
      }
    }
  }
  .chatInfo{
    width: 78%;
    height: 100%;
    border: 1px solid #f9f9f9;
    background-color: #f9f9f9;
    .top{
      height: 5%;
      background-color: #f9f9f9;
      display: flex;
      p.name{
        text-align: center;
        padding-left: 50px;
        width: 100%;
        height: 100%;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        // line-height: 100%;
      }
    }
    .messages{
      height: 60%;
      background-color: white;
      // border: 1px solid #fcfcfc;
    }
    .input{
      height: 35%;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      // padding-top: 30px;
      .emojis{
        width: 100%;
        height: 50px;
        margin: 10px;
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            cursor: pointer;
            padding: 3px;
            width: 20px;
            height: 20px;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
      .msgInput{
        height: 100%;
        .el-textarea__inner{
          height: 100%;
        }
      }
    }
  }
  
  .notCurrent{
    display: block;
    margin-top: 50px;
  }
}
</style>