import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Dashboard/DashboardView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/LoginView.vue')
    },
    {
      path: '/users',
      name: 'Users List',
      component: () => import('../views/UsersManager/UsersList.vue')
    },
    {
      path: '/user/:id',
      name: 'User Details',
      component: () => import('../views/UsersManager/UserInfo.vue')
    },
    {
      path: '/models',
      name: 'Models List',
      component: () => import('../views/ModelsManager/ModelsList.vue')
    },
    {
      path: '/model/:id',
      name: 'Model Info',
      component: () => import('../views/ModelsManager/ModelInfo.vue')
    },
    {
      path: '/photoset/:id',
      name: 'Photoset Info',
      component: () => import('../views/PhotosetsManager/PhotosetInfo.vue')
    },
    {
      path: '/photosets',
      name: 'Photosets List',
      component: () => import('../views/PhotosetsManager/PhotosetsList.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('../views/NewPhotoset.vue')
    },
  ]
})
//@ts-ignore
router.beforeEach(async (to, from, next) => {
  //@ts-ignore
  document.title = await 'Z-Panel' + ' | ' + to.name

  await next()
})
export default router