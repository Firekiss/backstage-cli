import { 
  BasicLayout,
  PageView
} from '@/layouts'

export const routerMap = [
  {
    path: '/',
    name: 'index',
    redirect: '/home/home-page',
    component: BasicLayout,
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'home',
        redirect: '/home/home-page',
        component: PageView,
        children: [
          {
            path: '/home/home-page',
            name: 'homePage',
            component: () => import('@/views/home/index'),
            meta: { title: '我是home标题' }
          }
        ]
      }
    ]
  }
]