<template>
  <div class="selectBar">
    <el-row :gutter="20" id="selector">
      <el-col :span="8">
        <el-select
          v-model="value"
          style="width:100%"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="选择类别进行筛选">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select
          v-model="value"
          style="width:100%"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="选择实验室进行筛选">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select
        
        v-model="value"
        style="width:100%"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="选择技术栈进行删选">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
    </el-row>
    <HorizonSpace/>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }"  shadow="hover">
          <div style="padding: 14px;">
            <span>这里放官方教学</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }"  shadow="hover">
          <div style="padding: 14px;">
            <span>这里放问答版块</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <HorizonSpace/>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }"  shadow="hover">
          <div style="padding: 14px;">
            <span>这里放官方教学</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }"  shadow="hover">
          <div style="padding: 14px;">
            <span>这里放问答版块</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import HorizonSpace from '@/components/common/HorizonSpace'
  export default {
    name: "selectBar",
    components: {
      
      HorizonSpace,
    },
    data(){
      return{
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        img:null,
        value: [],
      }
    }
  }
</script>

<style scoped>
</style>
