import { Pages } from '../pages';
import {
  CATEGORY_ROUTE,
  MAIN_ROUTE,
  MY_PLAYLIST_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from '../utils/consts';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const privateRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Pages.Main /> },
  { path: MY_PLAYLIST_ROUTE, component: <Pages.MyPlaylist /> },
  { path: `${CATEGORY_ROUTE}/:id`, component: <Pages.Category /> },
];

export const publicRoutes: RouteType[] = [
  { path: SIGNIN_ROUTE, component: <Pages.SignIn /> },
  { path: SIGNUP_ROUTE, component: <Pages.SignUp /> },
];
