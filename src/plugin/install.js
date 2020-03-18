let MyPlugin = {};
// MyPlugin.install = function (Vue, options) {
MyPlugin.install = function (Vue) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
        console.log('myGlobalMethod')
    }

    // 2. 添加全局资源
    Vue.directive('tanK', {
        bind() {
            // 当指令绑定到 HTML 元素上时触发.**只调用一次**
            console.log('bind triggerd')
        },
        inserted(el) {
            // 当绑定了指令的这个HTML元素插入到父元素上时触发(在这里父元素是 `div#app`)**.但不保证,父元素已经插入了 DOM 文档.**
            console.log('inserted triggerd');
            console.log(el);
            el.addEventListener("click", function () {
                alert('绑定事件');
            })
        },
        updated() {
            // 所在组件的`VNode`更新时调用.
            console.log('updated triggerd')
        },
        componentUpdated() {
            // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
            console.log('componentUpdated triggerd')
        },
        unbind(el) {
            // 只调用一次，指令与元素解绑时调用.
            console.log('unbind triggerd')
            el.removeEventListener("click", function () {
                console.log("卸载事件");
            })
        }
    })
    Vue.extend(require('@/components/loading').default)
    // 3. 注入组件
    Vue.mixin({
        created: function () {
            var myOption = this.$options.myOption
            if (myOption) {
                console.log(myOption)
            }
        }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
        console.log('myMethod', methodOptions)
    }
    Vue.prototype.$show = function () {
        console.log("展示页面");
        console.log()
    }
    Vue.prototype.$hide = function () {
        console.log("隐藏页面");
    }
}

export default MyPlugin