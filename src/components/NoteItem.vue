<template>
        <div class="list-group-item">{{name.title}}
        <span class="glyphicon glyphicon-remove pull-right" aria-hidden="true" v-on:click="removeItem(name.id)"></span>
        </div>

</template>

<script>
    export default {
        name: "note-item",
        props:['name'],
        methods:{
          removeItem:function (id) {
            //删除当前笔记,这个组合异步操作
            this.$store.dispatch('removeNote',id).then(()=>{
              //到后台数据库拉取罪行的数据
              this.$store.dispatch('getNoteList')
            }).catch(function (err) {
              console.log(err)
            });
          }
        }
    }
</script>

<style scoped>

</style>
