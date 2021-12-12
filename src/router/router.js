import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/Home.vue'
// 解决this.$router.push({path,"地址"})
// 重复点击报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "Login" */ '../views/Login.vue')
    }
  }, {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index', //指向index页
    children: [{
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import( /* webpackChunkName: "about" */ '../views/About.vue')
      }
    },
    {
      path: '/audit',
      name: 'audit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import( /* webpackChunkName: "audit" */ '../views/Audit.vue')
      }
    },
    {
      path: '/pluginunit',
      name: 'pluginunit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import( /* webpackChunkName: "pluginunit" */ '../views/PlugInUnit.vue')
      }
    },

  {
    path: '/histogram',
    name: 'Histogram',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/Echarts/histogram.vue')
    }
  },
  {
    path: '/lunbotu',
    name: 'Lunbotu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/lunbotu.vue')
    }
  }
  
, {
  path: '/login',
  name: 'login',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function () {
    return import( /* webpackChunkName: "Login" */ '../views/Login.vue')
  }
}]

    
  }]
export default new Router({
  // mode: 'history',     
  // base: process.env.BASE_URL, 解决build之后路由的跳转
  routes
})
