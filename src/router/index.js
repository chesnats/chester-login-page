import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/Login.vue';
import Home from '@/pages/Home.vue';  
import ErrorPage from '@/pages/ErrorPage.vue';  
import DotaPage from '@/pages/DotaPage.vue';
import DrawingPage from '@/pages/DrawingPage.vue';
import BirthdayPage from '@/pages/BirthdayPage.vue';
import EmpathyPage from '@/pages/EmpathyPage.vue';
import HarleyPage from '@/pages/HarleyPage.vue';
import WebPage from '@/pages/WebPage.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      redirect: { name: 'Home' },
    },
    { 
      path: '/login',
      name: 'Login', 
      component: Login,
      meta: {
        title: 'Login | Sample App'
      }
    },
    { 
      path: '/home',  
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home | Sample App'
      }
    },
    {
      path: '/webpage',
      name: 'WebPage',
      component: WebPage,
      meta: {
        title: 'WebPage | Sample App'
      }
    },
    { 
      path: '/harley',
      name: 'HarleyPage',
      component: HarleyPage,
      meta: {
        title: 'HarleyPage | Sample App'
      }
    },
    { 
      path: '/birthday',
      name: 'BirthdayPage',
      component: BirthdayPage,
      meta: {
        title: 'BirthdayPage | Sample App'
      }
    },
    { 
      path: '/empathy',
      name: 'EmpathyPage',
      component: EmpathyPage,
      meta: {
        title: 'EmpathyPage | Sample App'
      }
    },
    { 
      path: '/drawing',
      name: 'DrawingPage',
      component: DrawingPage,
      meta: {
        title: 'DrawingPage | Sample App'
      }
    },
    { 
      path: '/dota',
      name: 'DotaPage',
      component: DotaPage,
      meta: {
        title: 'DotaPage | Sample App'
      }
    },
    {
      path: '/*',  
      name: 'ErrorPage',
      component: ErrorPage,
      meta: {
        title: 'ErrorPage | Sample App'
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const login_data = localStorage.getItem('login_data');
  const isAuthenticated = login_data ? true : false;
  // const isAuthenticated = login_data?.id ?? false;

  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });

  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' });

  } else {
    next();
  }
});

export default router;
