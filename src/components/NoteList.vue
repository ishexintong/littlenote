<template>
  <div>
    <div class="list-group">
      <NoteItem  v-for="(item,index) in NoteList2"  v-bind:name="item" v-bind:key="index"></NoteItem>
    </div>
  </div>
</template>

<script>
  import NoteItem from '@/components/NoteItem'
  export default {
    name: "note-list",
    components:{
      NoteItem,
    },
    data:function () {
      return{
        //NoteList1:['吃饭','睡觉','打豆豆']
      }
    },
    computed:{
      NoteList2:function () {
        return this.$store.state.NoteList1
      }
    }

  }
</script>

<style scoped>

</style>
