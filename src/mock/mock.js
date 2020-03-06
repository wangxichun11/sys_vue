import Mock from 'mockjs' //引入
// 使用mockjs模拟数据
Mock.mock('/user',/post|get/i,{
  'data|10': [
    {
      'name': '@cname',
      'id|+1': 1,
      'addres':'@county(true)',
      'date':'@date("yyyy-MM-dd")'
    }]
})