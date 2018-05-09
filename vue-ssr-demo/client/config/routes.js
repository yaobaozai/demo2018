export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    props: true,
    component: () =>
      import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
  },
  {
    path: '/login',
    component: () => {
      import('../views/login/login.vue')
    }
  }
]
