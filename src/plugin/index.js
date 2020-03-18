// install函数

let Valid = {}
Valid.install = function(Vue, options = { triggEvent: "input" }) {
    // static props 静态属性
    // Vue.t1703C="hello everyone"
    // Vue.t1703C = "1703C"
    // console.log(this) this指向vue  可一直往上查找,可查找到new Vue


    // 所有需要验证的组成一个列表
    let regList = [{
        "type": "phone",
        "RegExp": /^1[345679]\d{9}$/,
        "msg": "手机需要11位数字"
    }, {
        "type": "pwd",
        "RegExp": /\w{6,9}/
    }, {
        "type": "code",
        "RegExp": /\d{4}/
    }]

    Vue.directive("valid", {
        bind(el, binding) {
            // el:dom节点 binding:对象（可使用value）
            // console.log(binding)

            // 失去焦点事件
            el.addEventListener(options.triggEvent, function(e) {
                // console.log(e.target.value)

                // 找到符合条件的对象
                let validObj = regList.find(item => item.type === binding.value)
                if (validObj.RegExp.test(e.target.value)) {
                    console.log("验证通过")
                    e.target.classList.remove(options.errorClass)
                } else {
                    // let span = document.createElement("span");
                    // span.innerText = validObj.msg
                    // e.target.parentNode.appendChild(span)
                    console.log("格式错误")
                    e.target.classList.add(options.errorClass)
                }

            })
        }
    })
}
export default Valid