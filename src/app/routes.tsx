import { Pages } from '../pages';
import { MAIN_ROUTE, NOT_FOUND_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const privateRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Pages.Main /> },
  //...
  { path: NOT_FOUND_ROUTE, component: <Pages.NotFound /> },
];

export const publicRoutes: RouteType[] = [
  { path: SIGNIN_ROUTE, component: <Pages.SignIn /> },
  { path: SIGNUP_ROUTE, component: <Pages.SignUp /> },
  { path: NOT_FOUND_ROUTE, component: <Pages.NotFound /> },
];
