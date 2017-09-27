let introduce = {};
let install = {};
let start = {};
let standard = {};
let i18n = {};
let theme = {};
let loader = {};

introduce.install = `
$ npm install vued --save
`;

introduce.script= `
<script type="text/javascript" src="vued.min.js"></script>
`;

introduce.demo = `
<template>
    <Slider v-model="value" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
`;

install.cdn = `
<!-- 引入Vue -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="//unpkg.com/vued/dist/styles/vued.css">
<!-- 引入组件库 -->
<script src="//unpkg.com/vued/dist/vued.min.js"></script>
`;

install.demo = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>vued example</title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/vued/dist/styles/vued.css">
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <script type="text/javascript" src="http://unpkg.com/vued/dist/vued.min.js"></script>
</head>
<body>
<div id="app">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">欢迎使用 Vued</Modal>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            visible: false
        },
        methods: {
            show: function () {
                this.visible = true;
            }
        }
    })
  </script>
</body>
</html>
`;

install.install = `
$ npm install vued --save
`;

install.import = `
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';    // 路由挂载
import Routers from './router.js';       // 路由列表
import Vued from 'vued';
import 'vued/dist/styles/vued.css';    // 使用 CSS

Vue.use(VueRouter);
Vue.use(Vued);

// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
`;

install.need = `
import Checkbox from 'vued/src/components/checkbox';
`;

install.warning = `
module: {
    rules: [
        { test: /vued.src.*?js$/, loader: 'babel-loader' },
        { test: /\\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
}
`;

start.dev = `
// 如果是第一次使用，先运行init，以后直接运行dev
$ npm run init
$ npm run dev
`;

start.prod = `
$ npm run build
`;

standard.prop = `
正确的使用方法：
<Page :current="1" :total="100"></Page>

错误的使用方法：
<Page current="1" total="100"></Page>
`;

i18n.demo = `
import Vue from 'vue';
import Vued from 'vued';
import locale from 'vued/dist/locale/en-US';

Vue.use(Vued, { locale });
`;

i18n.vue = `
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vued from 'vued';
import zhLocale from 'vued/dist/locale/zh-CN';
import enLocale from 'vued/dist/locale/en-US';

Vue.use(VueI18n);
Vue.use(Vued);

Vue.config.lang = 'zh-CN';
Vue.locale('zh-CN', zhLocale);
Vue.locale('en-US', enLocale);
// 注意：使用 vue-i18n 时，需要将本地的语言包和 Vued 的语言包合并
`;

theme.less = `
@import '~vued/src/styles/index.less';

// 下面是要覆盖的变量，例如：
@primary-color: #8c0776;
`;

theme.lessImport = `
import Vue from 'vue';
import Vued from 'vued';
import '../my-theme/index.less';

Vue.use(Vued);
`;

theme.install = `
npm install vued-theme -g
`;

theme.init = `
vued-theme init my-theme
`;

theme.build = `
cd my-theme
vued-theme build -o dist/
`;

theme.import = `
import Vue from 'vue';
import Vued from 'vued';
import '../my-theme/dist/vued.css';

Vue.use(Vued);
`;

loader.install = `
npm install vued-loader --save-dev
`;

loader.webpack = `
module: {
    rules: [
        {
            test: /\\.vue$/,
            use: [
                {
                    loader: 'vue-loader',
                    options: {
                        
                    }
                },
                {
                    loader: 'vued-loader',
                    options: {
                        prefix: false
                    }
                }
            ]
        }
    ]
}
`;

loader.tags = `
{
    'i-affix': 'Affix',
    'i-alert': 'Alert',
    'i-auto-complete': 'AutoComplete',
    'i-avatar': 'Avatar',
    'i-back-top': 'BackTop',
    'i-badge': 'Badge',
    'i-breadcrumb': 'Breadcrumb',
    'i-breadcrumb-item': 'BreadcrumbItem',
    'i-button': 'Button',
    'i-button-group': 'ButtonGroup',
    'i-card': 'Card',
    'i-carousel': 'Carousel',
    'i-carousel-item': 'CarouselItem',
    'i-cascader': 'Cascader',
    'i-checkbox': 'Checkbox',
    'i-checkbox-group': 'CheckboxGroup',
    'i-circle': 'i-circle',
    'i-col': 'Col',
    'i-collapse': 'Collapse',
    'i-color-picker': 'ColorPicker',
    'i-date-picker': 'DatePicker',
    'i-dropdown': 'Dropdown',
    'i-dropdown-item': 'DropdownItem',
    'i-dropdown-menu': 'DropdownMenu',
    'i-form': 'Form',
    'i-form-item': 'FormItem',
    'i-icon': 'Icon',
    'i-input': 'Input',
    'i-input-number': 'InputNumber',
    'i-menu': 'Menu',
    'i-menu-group': 'MenuGroup',
    'i-menu-item': 'MenuItem',
    'i-submenu': 'Submenu',
    'i-modal': 'Modal',
    'i-option': 'Option',
    'i-option-group': 'OptionGroup',
    'i-page': 'Page',
    'i-panel': 'Panel',
    'i-poptip': 'Poptip',
    'i-progress': 'Progress',
    'i-radio': 'Radio',
    'i-radio-group': 'RadioGroup',
    'i-rate': 'Rate',
    'i-row': 'Row',
    'i-select': 'Select',
    'i-slider': 'Slider',
    'i-spin': 'Spin',
    'i-step': 'Step',
    'i-steps': 'Steps',
    'i-switch': 'i-switch',
    'i-table': 'Table',
    'i-tabs': 'Tabs',
    'i-tab-pane': 'TabPane',
    'i-tag': 'Tag',
    'i-timeline': 'Timeline',
    'i-timeline-item': 'TimelineItem',
    'i-time-picker': 'TimePicker',
    'i-tooltip': 'Tooltip',
    'i-transfer': 'Transfer',
    'i-tree': 'Tree',
    'i-upload': 'Upload'
}
`;

export default {
    introduce,
    install,
    start,
    standard,
    i18n,
    theme,
    loader
}