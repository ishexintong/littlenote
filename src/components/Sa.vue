<template>
  <div class="row">
    <!--左边部分开始-->
    <div class="col-md-6">
      <div class="input-group" >
      <span class="input-group-addon" id="basic-addon1">标题</span>
      <input type="text" class="form-control" placeholder="请输入笔记" aria-describedby="basic-addon1" v-model="title">
      </div>
      <!--textarea-->
      <textarea class="form-control"  rows="36" style="margin-top: 10px;" v-model="content">
      </textarea>
    </div>
    <!--左边部分结束-->
    <!--右边部分开始-->
    <div class="col-md-6">
      <div>
        <button class="btn btn-success" v-on:click="addtitle">添加</button>

        <div class="form-control"  style="margin-top: 10px; height: 734px" v-html="markedContent"></div>
      </div>
    </div>
    <!--右边部分结束-->
  </div>
</template>

<script>
    import marked from 'marked'
    export default {
        name: "sa",
        data:function () {
          return{
            content:"",
            title:''
          }
        },
        computed:{
          markedContent:function () {
            return  marked(this.content)
          }
        },
        methods:{
          //添加笔记标题
          addtitle:function () {
            //alert(this.title);
            let noteObj={
              title:this.title,
              content:this.content,
              markdownContent:this.markedContent

            };
            //this.$store.commit('AddNote',noteObj)
            this.$store.dispatch('addNote',noteObj)
          }
        }
    }
</script>

<style scoped>

</style>
