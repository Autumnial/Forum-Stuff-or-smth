import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'
import Mod from '@/views/Mod.vue'
import CreateTopic from '@/views/CreateTopic.vue'
import ManageTopics from '@/views/ManageTopics.vue'
import EditTopic from '@/views/EditTopic.vue'
import AdminTopics from '@/views/AdminTopics.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "Cool Forum Landing Page"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: "Register UWU"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: "Log in!"
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        title: "Admin Panel"
      }, 
      children: [
        {
          path: 'topics',
          component: AdminTopics,
          children:[
            { 
              path: 'create',
              name: 'create',
              component: CreateTopic,
              meta:{
                title: "Create Topic"
              }
            }, 
            {
              path: 'edit/:id',
              name: 'edit',
              component: EditTopic,
              meta: {
                title: "Edit Topic"
              }
            },
            {
              path: '',
              component: ManageTopics,
              meta:{
                title: 'Manage Topics'
              }
            }
          ]
        }
      ]
    },
    {
      path: '/mod',
      name: 'mod',
      component: Mod,
      meta: {
        title: "Mod Panel"
      }, 
      children: [

      ]
    }
  ]
})


router.beforeEach ((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if(nearestWithTitle){
    document.title = nearestWithTitle.meta.title;
  }

  next();
})


export default router
