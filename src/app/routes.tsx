import About from '../pages/About';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

import { ABOUT_ROUTE, MAIN_ROUTE, NOT_FOUND_ROUTE } from '../utils/consts';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Main /> },
  { path: ABOUT_ROUTE, component: <About /> },

  //...
  { path: NOT_FOUND_ROUTE, component: <NotFound /> },
];
