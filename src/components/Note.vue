<template>
  <div class="container">
    <div class="row">
      <!--这是面板-->
      <div class="panel panel-info">
        <div class="panel-heading" style="text-align: center">My Note</div>
        <div class="panel-body">
          <!--左边区开始-->
          <div class="col-md-3">
            <NoteList></NoteList>
          </div>
          <!--左边列表区结束-->
          <!--右边编辑区开始-->

          <div class="col-md-9">
            <div class="note-edit">
              <Sa></Sa>
            </div>
          </div>
          <!--右边编辑区结束-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NoteList from '@/components/NoteList'
  import Sa from '@/components/Sa'
  export default {
    name: "note",
    components:{
      NoteList,
      Sa
    }
  }
</script>

<style scoped>
  .container{
    width: 98%;
  }

</style>
