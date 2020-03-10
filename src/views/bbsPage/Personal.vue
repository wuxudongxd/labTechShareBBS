<template>
  <div id="home">
    <div id="content">

      <el-container>
        
        <el-main>
          <el-card :body-style="{ padding: '0px' }">
            <div class="head">
              <div class="headpic">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              </div>
              <span>好吃的汉堡</span>
            </div>
            <div >
              <el-container>
                <el-aside width="200px">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                      </template>
                      <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                      </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                      <i class="el-icon-document"></i>
                      <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <i class="el-icon-setting"></i>
                      <span slot="title">导航四</span>
                    </el-menu-item>
                  </el-menu>
                </el-aside>
                <el-main>Main</el-main>
              </el-container>
            </div>
          </el-card>
        </el-main>
      </el-container>

      <!-- <div id="right_bar">

        <userBar/>
        <HorizonSpace/>
        <rankBar/>
      </div>
      <div id="Main">
        <router-view></router-view>
        
      </div> -->
    </div>
  </div>
</template>

<script>
  import HorizonSpace from '@/components/common/HorizonSpace'
  
  export default {
    name: "Home",
    components: {
      //Carousel,
      //Selector,
      HorizonSpace,
      
    }
  }
</script>

<style scoped>
.head{
  display: flex;
  border-bottom: 1px solid #DCDFE6;
}
.head .headpic img{
  margin: 30px 50px 30px 50px;
  border-radius: 100px;
  border-style: solid;
  border-width: 3px;
  border-color: white;
  width:  100px;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.5)
}
#content{
    min-width: 800px;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 60px;
    
    height: 100%;
}
#right_bar{
width: 270px;
    float: right;
    margin-right: 20px;
}
#Main{
    margin: 0 310px 0 20px;
    
}
#sidebar{
  margin-right: 20px;
}
</style>
