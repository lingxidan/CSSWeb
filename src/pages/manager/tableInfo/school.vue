<template>
  <div class="table">
    <h1>学校信息</h1>
    <div class="schoolTop">
      <div class="feature">
        <el-button type="primary" :id="addSchool">添加学校</el-button>
      </div>
      <input-select ref="totalSel" :inputs="inputData" :selects="selectData" :searchBtn="true" @search="search"></input-select>

    </div>
    <tablePage ref="tbMain" :tableTitles="tableTitles"
      :tableData="tableData"
      :isLoading="false"
      :tableConf="tableConf" class="tablepage"></tablePage>
    <pagination :paginationConf="paginationConf" :currentPage="paginationConf.currentPage" @pageChange="pageChange"></pagination>
  </div>
</template>

<script>
import inputSelect from '../../../components/common/input-select.vue'
import tablePage from '../../../components/common/table-page.vue'
import pagination from '../../../components/common/pagination.vue'
export default {
  name: 'schManage',
  data() { 
    return {
      tableData:[{
        schoolName:"光明小学",
        schoolAddr:"XX省XX市XX区XX镇XX村",
        schoolScale:"80人",
        schoolDesc:"2000年10月10日建立，学校学生由10人增加到80人",
        schoolEstablish:"2000年10月10日",
        },{
        schoolName:"希望小学",
        schoolAddr:"XX省XX市XX区",
        schoolScale:"80人",
        schoolDesc:"2000年10月10日建立，学校学生由10人增加到80人",
        schoolEstablish:"2000年10月10日",
        },{
        schoolName:"光明小学",
        schoolAddr:"XX省XX市XX县XX镇XX村",
        schoolScale:"80人",
        schoolDesc:"2000年10月10日建立，学校学生由10人增加到80人",
        schoolEstablish:"2000年10月10日",
        }],
      tableTitles:[{
          prop: "schoolName",
          label: "学校名称",
          width: "170",
          fixed: true,
        },{
          prop: "schoolAddr",
          label: "学校地址",
          width: "170"
        },{
          prop: "schoolScale",
          label: "学校规模",
          width: "100"
        },{
          prop: "schoolEstablish",
          label: "创建时间",
          width: "180"
        },{
          prop: "schoolDesc",
          label: "学校简介",
          width: "230"
        }],
      tableConf:{
        // 表格按钮操作列(是否需要，列头，操作按钮列表)
        operation:true,
        // operaHeader:{
        //   id:"edit",
        //   text:"修改信息",
        //   size:"medium",
        //   type:"primary",
        //   click:()=>{
        //     console.log(this.$refs.tbMain.$refs.elTb.tableData)
        //   }
        // },
        btns:[{
          id:"volunteer",
          text:"招募教师",
          size:"medium",
          type:"primary",
          click:(val)=>{
            console.log(val)
          }
        },{
          id:"edit",
          text:"修改信息",
          size:"medium",
          type:"primary",
          click:(val)=>{
            console.log(val)
          }
        },{
          id:"delete",
          text:"删除学校",
          size:"medium",
          type:"primary",
          click:(val)=>{
            console.log(val)
          }
        }]
      },
      paginationConf:{
        sizes: [10, 20, 50, 100],
        size: 20,
        total: 500,
      },
      inputData:[{
          placeholder: "学校名称",
          model: "schoolName",
          width: 170
        }],
      selectDataAddr: [{
          placeholder: "省",
          model: "province",
          label: "name",
          value: "code",
          width: 170,
          change: (val) => {
            let _this = this
            if (!val) {
              return
            }
            _this.selectDataAddr[0].clear()
            request.getCity({
                code: val,
                level: 2
              })
              .then(
                res => {
                  _this.selectDataAddr[1].options = res.data
                }
              )
          },
          clear: () => {
            let _this = this
            _this.$set(_this.$refs.totalSel.searchData.selectData,
              'city','')
            _this.$set(_this.$refs.totalSel.searchData.selectData,
              'town','')
            _this.selectDataAddr[1].options = []
            _this.selectDataAddr[2].options = []
          },
          options: []
        },
        {
          placeholder: "市",
          model: "city",
          label: "name",
          value: "code",
          width: 170,
          change: (val) => {
            let _this = this
            if (!val) {
              return
            }
            _this.selectDataAddr[1].clear()
            request.getCity({
                code: val,
                level: 3
              })
              .then(
                res => {
                  _this.selectDataAddr[2].options = res.data
                }
              )
          },
          clear: () => {
            let _this = this
            _this.$set(_this.$refs.totalSel.searchData.selectData,
              'town','')
            _this.selectDataAddr[2].options = []
          },
          options: []
        },
        {
          placeholder: "县/区",
          model: "town",
          label: "name",
          value: "code",
          width: 170,
          change: (val) => {
            let _this = this
            if (!val) {
              return
            }
            _this.selectDataAddr[2].clear()
          },
          clear: () => {},
          options: []
        },
        {
          placeholder: "学校规模",
          model: "scale",
          label: "name",
          value: "code",
          width: 170,
          change: (val) => {
            let _this = this
            if (!val) {
              return
            }
            _this.selectDataAddr[2].clear()
          },
          clear: () => {},
          options: []
        }
      ],
      selectData:[],
    }
  },
  props: {

  },
  components:{
    tablePage,
    pagination,
    inputSelect
  },
  mounted() {
    this.selectData=this.selectDataAddr
  },
  methods:{

  },
 }
</script>

<style lang="less" scoped>
.table{
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 20px;
  }
  .schoolTop{
    width: 100%;
    display: flex;
    .feature{
      margin-left: 30px;
      width: 10%;
      display: flex;
      align-items: center;
    }
  }
  .tablepage{
    width: 100%;
  }

}
</style>