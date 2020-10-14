import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import vueCookies from 'vue-cookies'
import Echarts from 'echarts'
Vue.use(vueCookies);
import '@/Interceptors/interceptors.js'

import router from '@/Router/Routes.js'
import store from '@/Vuex/Store.js'
import Mock from './Mock/mock'
Vue.use(Mock);
Vue.prototype.$axios = Axios
import Animate from 'animate.css'
Vue.use(Animate);
// 安装element-ui   cnpm install --save-dev element-ui
// 全部引入 一致    按需引入  安装插件babel-plugin-component
//babelrc配置解析规则
// [
//   "component",
//   {
//     "libraryName": "element-ui",
//     "styleLibraryName": "theme-chalk"
//   }
// ]
import 'element-ui/lib/theme-chalk/index.css';
import { Message, Menu, MenuItem, MenuItemGroup, Submenu, DatePicker, Select, Option, Input, Button, Table, TableColumn,Loading,Pagination,Dialog,Form
,FormItem,Tree} from 'element-ui'
Vue.prototype.$Message = Message;
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Submenu.name, Submenu);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Pagination.name, Pagination);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Tree.name, Tree);
//指令方式绑定  table v-loading 指令
Vue.use(Loading.directive);

//引入事件车通信
import EventEmit from '@/EventEmit/Event.js'
Vue.prototype.$eventEmit = EventEmit;

//引入eaharts
Vue.prototype.$echarts = Echarts;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
