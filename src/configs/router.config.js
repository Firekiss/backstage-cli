import { BasicLayout } from '@/layouts'

export const routerMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '主页' }
      }
    ]
  }
]