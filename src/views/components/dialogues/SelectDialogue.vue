<template>
  <div shadow="hover" class="back">
    <!-- <div class="btn" :style="css"><i :class="iconClass"></i> {{text}}</div> -->
    <!-- <div class="SelectedTagsBarOut">
      <SelectedTagsBar class="SelectedTagsBar"/>
    </div>
    <div class="SelectedTagsContainers">
      <SelectedTagsBar class="SelectedTagsBar2"/>
    </div> -->
    <div class="content">
      <div class="SelectedTagsBarOut ShadowBox">
        <div class="buttons">
          <el-button icon="el-icon-close" type="primary" plain circle
          @click="cancel"
          ></el-button>
          <el-button icon="el-icon-check" type="primary" plain circle
          @click="confirm"
          >
          </el-button>
        </div>
        <div style="font-size:22px;">
          已选择
        </div>
        
        <SelectedTagsBar class="SelectedTagsBar"
          :detailCatData="tagChosen"
          :closeable="true"
          @onUnselectTag="onUnselectTag"
          ref="SelectedTagsBar"
        />
        
        
      </div>
      <div class="tagsContainers">
        <TagsContainerBar class="TagsContainerBar ShadowBox"
        :key="i"
        v-for="(item,i) in tagUnchosen"
        :catName="item.name"
        :tags="tagUnchosen"
        :catIndex="i"
        :ref="'tagsContainers'+i"
        @onSelectTag="onSelectTag"
        />
        <!-- <TagsContainerBar class="TagsContainerBar"/>
        <TagsContainerBar class="TagsContainerBar"/>
        <TagsContainerBar class="TagsContainerBar"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import SelectedTagsBar from '@/views/components/bars/SelectedTagsBar'
import TagsContainerBar from '@/views/components/bars/TagsContainerBar'
import {
  getCategories,
  getUserCategories
} from "@/network/articles";
export default {
  name: "SelectDialogue",
  components: {
    SelectedTagsBar,
    TagsContainerBar
  },
  data() {
    return {
      tagCats:[
        "aasdas",
        "bassssda",
        "asdasc",
        "dasd",
        "asdse",
        "ssf",
        "ssssssssg",
        "hss",
        'ssadi',
        'asdadsj',
        'ak',
        'ssl'
      ],
      categories:[],
      tagChosen:{},
      tagUnchosen:{},
      realTagChosen:{},
      realTagUnchosen:{},
    };
  },
  mounted:function(){
    // this.loadCats();
  },
  methods: {
    chooseTagWithoutCat(tags) {
      // console.log("yag:");
      // console.log(tag.id);
      // console.log("cat:");
      // console.log(cat);
      console.log(this.tagUnchosen)
      console.log(this.tagChosen)
      for (var key in this.tagUnchosen) {
        var catId=key

        for (var tagId in this.tagUnchosen[key].tags) {

          //遍历json对象的每个key/value对,p为key
          // var cat=this.tagUnchosen[catId]
          if (tags.indexOf("" + tagId) >= 0) {
            //当前tagid已经找到分类
            console.log(catId)
            console.log(this.tagChosen[catId])
            console.log(this.tagUnchosen[catId])
            this.tagChosen[catId].tags[tagId]=this.tagUnchosen[catId].tags[tagId]
            // this.$set(this.tagUnchosen[catId].tags,tagId,{
            //           })
            delete this.tagUnchosen[catId].tags[tagId]
            
            // cat.tag_chosen[tags_info[key].id] = tags_info[key]; //选中当前tag
            // delete cat.tag_unchosen[tags_info[key].id];
            // break;
          }
        }
        // for (var key in cat.tag_info) {
        //   // console.log("tag:");
        //   // console.log(cat.tag_chosen[tag]);
        //   var id = cat.tag_info[key].id;
        //   // console.log(tags+"tag:indexOf"+id);
        //   //   console.log(tags.indexOf(""+id));
        //   if (tags.indexOf("" + id) >= 0) {
        //     cat.tag_chosen[id] = cat.tag_info[key];
        //     delete cat.tag_unchosen[id];
        //   }
        // }
      }
      this.realTagChosen=JSON.parse(JSON.stringify(this.tagChosen))
      this.realTagUnchosen=JSON.parse(JSON.stringify(this.tagUnchosen))
      this.$refs.SelectedTagsBar.$forceUpdate()
      this.$refs['tagsContainers'+catId][0].$forceUpdate()
    },
    setTags(tags_info) {
      for (var key in tags_info) {
        var tagId=tags_info[key].id
        //遍历tag
        for (var catId in this.tagUnchosen) {
          //遍历json对象的每个key/value对,p为key
          var cat=this.tagUnchosen[catId]
          if (cat.tags.hasOwnProperty(tagId)) {
            //当前tagid已经找到分类
            this.tagChosen[catId].tags[tagId]=this.tagUnchosen[catId].tags[tagId]
            // this.$set(this.tagUnchosen[catId].tags,tagId,{
            //           })
            delete this.tagUnchosen[catId].tags[tagId]
            
            // cat.tag_chosen[tags_info[key].id] = tags_info[key]; //选中当前tag
            // delete cat.tag_unchosen[tags_info[key].id];
            break;
          }
        }
      }
      this.realTagChosen=JSON.parse(JSON.stringify(this.tagChosen))
      this.realTagUnchosen=JSON.parse(JSON.stringify(this.tagUnchosen))

      this.$refs.SelectedTagsBar.$forceUpdate()
      this.$refs['tagsContainers'+catId][0].$forceUpdate()
    },
    onUnselectTag(catId,tagId){
      // console.log(catId,tagId,this.$refs)
      this.tagUnchosen[catId].tags[tagId]=this.tagChosen[catId].tags[tagId]
      this.$refs.SelectedTagsBar.$forceUpdate()
      this.$refs['tagsContainers'+catId][0].$forceUpdate()
      // this.$set(this.tagUnchosen[catId].tags,tagId,{
      //           })
      delete this.tagChosen[catId].tags[tagId]
    },
    onSelectTag(view,catId,tagId){
      // console.log(catId,tagId)
      this.tagChosen[catId].tags[tagId]=this.tagUnchosen[catId].tags[tagId]
      // this.$set(this.tagUnchosen[catId].tags,tagId,{
      //           })
      delete this.tagUnchosen[catId].tags[tagId]
      view.$forceUpdate()
      this.$refs.SelectedTagsBar.$forceUpdate()
      // console.log(this.tagUnchosen)
      // console.log(this.tagChosen)
    },
    cancel(){
      this.$emit("cancel");
      this.tagChosen=JSON.parse(JSON.stringify(this.realTagChosen))
      this.tagUnchosen=JSON.parse(JSON.stringify(this.realTagUnchosen))
    },
    confirm(){
      this.$emit("cancel");
      this.realTagChosen=JSON.parse(JSON.stringify(this.tagChosen))
      this.realTagUnchosen=JSON.parse(JSON.stringify(this.tagUnchosen))

     
      this.$emit("updateChosenTags",this.getChosenTags());
    },
    getChosenTags(){
      var tags=[]
      for (var index1 in this.tagChosen) {
        // cat.tag_chosen = {};
        // cat.tag_unchosen = {};
        var cat=this.tagChosen[index1]
        for (var index2 in cat.tags) {
          var tag=cat.tags[index2];

          tags.push(parseInt(tag.tagId));
          
          //cat.tag_unchosen[cat.tag_info[tag].id] = cat.tag_info[tag];

        }
      }
      return tags
    },
    loadCats(){
      var result;
      if (this.writing) {
        result = getUserCategories();
        console.log("getUserCategories");
      } else {
        result = getCategories();
        console.log("getCategories");
      }
      return result.then(res => {
        console.log("getCats:");
        
        switch (res.status) {
          case 200: //成功读取分类后的tag列表
            this.categories = res.data;
            this.tagChosen={}
            this.tagUnchosen={}
            for (var cat of this.categories) {
              // //do something
              
              this.tagChosen[cat.id]=({
                tags:{},
                name:cat.name
              })
              this.tagUnchosen[cat.id]=({
                tags:{},
                name:cat.name
              })
              this.$set(this.tagChosen[cat.id],'tags',{})
              this.$set(this.tagUnchosen[cat.id],'tags',{})
              // cat.tag_chosen = {};
              // cat.tag_unchosen = {};
              for (var index in cat.tag_info) {
                var tagsObj=this.tagUnchosen[cat.id].tags;
                var tagId=cat.tag_info[index].id
                this.$set(tagsObj,tagId,{
                  tagId:cat.tag_info[index].id,
                  tagName:cat.tag_info[index].name,
                })
                
                //cat.tag_unchosen[cat.tag_info[tag].id] = cat.tag_info[tag];

              }
            }
            this.realTagChosen=JSON.parse(JSON.stringify(this.tagChosen))
            this.realTagUnchosen=JSON.parse(JSON.stringify(this.tagUnchosen))
            // console.log(this.categories);
            this.$forceUpdate()
            this.$emit("onTagsLoaded");
            return 1;
            break;
          default:
            return null;
            break;
        }
      });
    }
  },
  props: {
    writing: {
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: Boolean,

      default() {
        return false;
      },
    },
  },
};
</script>

<style scoped>
.btn {
  text-align: center;
}
.back{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.618);
  z-index: 2000;
  padding-left: 10%;
  padding-right: 10%;
  overflow-y: scroll;
}
.SelectedTagsBar{
  margin-top: 10px;
  margin-bottom: 50px;
  margin-left: -10px;
}
.SelectedTagsBar2{
  width: 1100px;
  height: 1020px;
}
.SelectedTagsBarOut{
  position: fixed;
  width: 300px;
  padding: 14px;
  background: white;
  border-radius: 10px;
  top: 20px;
  min-height: 500px;
}
.content{
    padding: 20px;
    min-width: 800px;
    max-width: 1100px;
    margin: 0 auto;
    
    height: 100%;
}
.tagsContainers{
  padding-left: 320px;
  display: flex;
  flex-wrap: wrap;
}
.TagsContainerBar{
  width: 350px;
  height: 250px;
  background: white;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-right:20px ;
}

.ShadowBox{
    box-shadow: 0px 5px 5px 5px rgba(10,10,10,0.2); 
      transition: box-shadow 0.3s ease 0s;
    -o-transition: box-shadow 0.35s ease 0s;
    -moz-transition: box-shadow 0.35s ease 0s;
    -webkit-transition: box-shadow 0.3s ease 0s;
  }
  .ShadowBox:hover{
      box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.2); 
  }
  .buttons{
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
</style>
