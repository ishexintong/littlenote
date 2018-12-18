<template>

  <div id="app">
    <!--导航条-->
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SakulaNote</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link v-for="(route,index) in allRouters" v-bind:to="route.path" v-bind:key="index" tag="li" activeClass="active" exact  >
      <a >{{route.name}}</a></router-link>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">登录</a></li>
        <li><a href="#">注册</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

    <router-view/>
  </div>
</template>

<script>
  //导入bootstrap 组件
  import 'bootstrap/dist/css/bootstrap.min.css'
  export default {
    name: 'App',
    data:function () {
      return {

      }
    },
    computed:{
      allRouters:function () {
        //从实例中取出所有的路由
        //console.log(this.$router.options.routes);
        return this.$router.options.routes
      }
    }
}
</script>

<style>
    #app {

    }
</style>
