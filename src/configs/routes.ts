/* eslint-disable no-unused-vars */
import React from 'react';
import { RoutesTabType } from '../models/permission';

const NotFoundBox = React.lazy(() => import('../modules/common/components/NotFoundBox'));

const HelloWorld = React.lazy(() => import('../modules/common/components/HelloWorld'));

export const URL_PATH = '/';
// function buildRoutePath(moduleName: ServiceType, path: string) {
//   return `/${moduleName}${path}`;
// }

export const ROUTES = {
  login: '/login',
  signUp: '/signUp',
  forgotPass: '/forgotPass',
  firstLogin: '/firstLogin',
  register: '/register',
  changePassword: '/changePassword',
  accountInfo: '/accountInfo',
  notFound404: '/404',

  // generalSetting: {
  //   company: buildRoutePath('generalSetting', '/company'),
  //   department: {
  //     result: buildRoutePath('generalSetting', '/department'),
  //     create: buildRoutePath('generalSetting', '/department/create'),
  //     update: buildRoutePath('generalSetting', '/department/update'),
  //   },
  //   position: buildRoutePath('generalSetting', '/position'),
  //   userManagement: {
  //     result: buildRoutePath('generalSetting', '/userManagement'),
  //     create: buildRoutePath('generalSetting', '/userManagement/create'),
  //     update: buildRoutePath('generalSetting', '/userManagement/update'),
  //   },
  //   roleManagement: buildRoutePath('generalSetting', '/roleManagement'),
  //   paymentMethod: buildRoutePath('generalSetting', '/paymentMethod'),
  //   approval: {
  //     result: buildRoutePath('generalSetting', '/approval'),
  //     create: buildRoutePath('generalSetting', '/approval/create'),
  //   },
  //   policy: {
  //     result: buildRoutePath('generalSetting', '/policy'),
  //     updateGroup: buildRoutePath('generalSetting', '/policy/updateGroup'),
  //     createGroup: buildRoutePath('generalSetting', '/policy/createGroup'),
  //     updatePerson: buildRoutePath('generalSetting', '/policy/updatePerson'),
  //     createPerson: buildRoutePath('generalSetting', '/policy/createPerson'),
  //   },
  // },
};

export const ROUTES_TAB: RoutesTabType[] = [
  {
    name: 'helloWorld',
    isModule: true,
    path: '/',
    exact: true,
    component: HelloWorld,
  },
  {
    name: 'notFound404',
    isModule: true,
    path: ROUTES.notFound404,
    component: NotFoundBox,
    disableBreadcrumb: true,
    hidden: true,
  },
];

export const ROUTES_ALL: RoutesTabType[] = [...ROUTES_TAB];
