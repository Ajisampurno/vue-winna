import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'

// Function to check if user is authenticated
function isAuthenticated() {
  // Check if the token exists in localStorage
  return !!localStorage.getItem('token');
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // Redirect to login if the user is not authenticated
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
