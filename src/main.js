// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import PDatePicker from 'vue2-persian-datepicker'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import addMore from "highcharts/highcharts-more";
import loadExporting from 'highcharts/modules/exporting';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify,{
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.use(VueResource);
loadExporting(Highcharts);
Vue.use(Highcharts);
Vue.use(HighchartsVue);
Vue.use(VueResource);
addMore(Highcharts);


Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

/* eslint-disable no-new */
export const eventBus=new Vue();
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

