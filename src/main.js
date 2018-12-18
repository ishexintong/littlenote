// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueX from 'vuex'
import Jquery from 'jquery'
import Axios from 'axios'
import qs from 'qs'

Vue.use(VueX)

//设置post请求头
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//定义一个大仓库，来存放项目中用到的数据
const store = new VueX.Store({
  state: {
    NoteList1: ['吃饭', '睡觉', '打豆豆']
  },
  mutations: {
    //修改仓库中的值的唯一方法
    AddNote: function (state, note) {
      //先将新笔记的数据post到后端(异步操作)

      //再将新笔记数据push到标题列表里
      state.NoteList1.push(note);
    },
    InitNote: function (state, note) {
      state.NoteList1 = note;
    }
  },
  actions: {
    //所有的异步操作放在这里

    //拉取最新的笔记
    getNoteList: function (context,) {
      Axios.get('http://127.0.0.1:8000/api/notes/').then(function (res) {
        //_this.$store.commit('InitNote', res.data.data);
        //将拉取的数据放入到大仓库中
        context.commit('InitNote',res.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    },

    //添加笔记的操作
    addNote: function (context, note) {
      Axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/add/',
        data: qs.stringify(note)
      }).then(function () {
        //提交mutations
        context.commit('AddNote', note)
      }).catch(function () {

      });
    },
    //删除笔记的异步操作
    removeNote: function (context, id) {
      return new Promise(function (resolve, reject) {
        //先将笔记的数据发送到后台,异步操作
        Axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/delete/' + id,
        }).then(function (res) {
          console.log(res);
          //拉取最近的笔记数据
          resolve();
        }).catch(function (err) {
          console.log(res);
          reject(err);
        });
      })

    }
  }
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,//将上面定义的大仓库与实例联系在一起
  components: {App},
  template: '<App/>',
  beforeMount: function () {
    //在挂载前从后台拿过数据，通过ajax拉取数据
    // Jquery.ajax({
    //   url:'http://127.0.0.1:8000/api/notes/',
    //   type:'get',
    //   success:function (res) {
    //     console.log(res);
    //   }
    // })
    let _this = this;
    Axios.get('http://127.0.0.1:8000/api/notes/').then(function (res) {
      _this.$store.commit('InitNote', res.data.data);
    }).catch(function (error) {
      console.log(error);
    })
  }
})
