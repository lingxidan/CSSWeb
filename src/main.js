import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '../static/theme/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // components: { App },
    // template: '<App/>',
    render: h => h(App)
})