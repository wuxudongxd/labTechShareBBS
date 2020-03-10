<template>
  <div class="selectBar">
    <el-card  shadow="hover">
      <div class="articlehead">
        <div>
          类型：
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <el-button type="primary" icon="el-icon-check" circle></el-button>
      </div>
      <HorizonSpace/>
      <el-input
        type="text"
        placeholder="请输入标题"
        v-model="title"
        maxlength="20"
        show-word-limit
      >
      </el-input>

    </el-card>
    <HorizonSpace/>
      <mavon-editor 
            v-model="content" 
            ref="md" 
            @change="change" 
            style="min-height: 600px"
        />
    
    <HorizonSpace/>
  </div>
</template>

<script>
  import HorizonSpace from '@/components/common/HorizonSpace'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: "selectBar",
    components: {
        mavonEditor,
    
      HorizonSpace,
    },
    data(){
      return{
        content:'', // 输入的markdown
            html:'',    // 及时转的html
            options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        title:'',
      }
    },
    methods:{
      change(value, render){
            // render 为 markdown 解析后的结果[html]
            this.html = render;
      },
    }
  }
</script>

<style scoped>
.articlehead{
  display: flex;
  justify-content:space-between;
}
</style>
