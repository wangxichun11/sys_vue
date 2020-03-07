import Vue from 'vue'
// 和自定义过滤器一样,我们这里定义的是全局指令
Vue.directive("focus", {
    inserted(el) {
        el.focus();
    }
});
Vue.directive('gqs', {
    bind() {
        // 当指令绑定到 HTML 元素上时触发.**只调用一次**
        console.log('bind triggerd')
    },
    inserted() {
        // 当绑定了指令的这个HTML元素插入到父元素上时触发(在这里父元素是 `div#app`)**.但不保证,父元素已经插入了 DOM 文档.**
        console.log('inserted triggerd')
    },
    updated() {
        // 所在组件的`VNode`更新时调用.
        console.log('updated triggerd')
    },
    componentUpdated() {
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
        console.log('componentUpdated triggerd')
    },
    unbind() {
        // 只调用一次，指令与元素解绑时调用.
        console.log('unbind triggerd')
    }
})