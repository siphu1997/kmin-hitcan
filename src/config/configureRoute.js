import { lazy } from 'react';
import { convertArrayToObject } from 'utils';
const HomeScreen = lazy(() => import('../screens/Home'));
const HomeWorkScreen = lazy(() => import('../screens/HomeWork'));
const HomeWorkDetailScreen = lazy(() => import('../screens/HomeWorkDetail'));

const ComingSoon = lazy(() => import('../components/ComingSoon'));

const listRoute = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: HomeScreen,
  },
  {
    key: 'homework',
    path: '/home-work',
    exact: true,
    component: HomeWorkScreen,
  },
  {
    key: 'homework_detail',
    path: '/home-work/:id',
    pathDynamic: '/home-work/',
    exact: true,
    component: HomeWorkDetailScreen,
  },
  {
    key: 'coming_soon',
    path: '/coming_soon',
    exact: true,
    component: ComingSoon,
  },
];

export const listRouteByKey = convertArrayToObject(listRoute, 'key');

export default listRoute;
