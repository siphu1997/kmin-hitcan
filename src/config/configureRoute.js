import { lazy } from 'react';
import { convertArrayToObject } from 'utils';
const HomeScreen = lazy(() => import('screens/Home'));
const HomeWorkScreen = lazy(() => import('screens/HomeWork'));
const HomeWorkDetailScreen = lazy(() => import('screens/HomeWorkDetail'));
const LoginScreen = lazy(() => import('screens/Login'));

const ComingSoon = lazy(() => import('../screens/ComingSoon'));

const listRoute = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: HomeScreen,
    auth: true,
  },
  {
    key: 'homework',
    path: '/home-work',
    exact: true,
    component: HomeWorkScreen,
    auth: true,
  },
  {
    key: 'homework_detail',
    path: '/home-work/:id',
    pathDynamic: '/home-work/',
    exact: true,
    component: HomeWorkDetailScreen,
    auth: true,
  },
  {
    key: 'coming_soon',
    path: '/coming-soon',
    exact: true,
    component: ComingSoon,
  },
  {
    key: 'login',
    path: '/login',
    exact: true,
    component: LoginScreen,
  },
];

export const listRouteByKey = convertArrayToObject(listRoute, 'key');

export default listRoute;
