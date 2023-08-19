import Main from '../pages/main/Main';
import NotFound from '../pages/NotFound';

import { MAIN_ROUTE, NOT_FOUND_ROUTE } from '../utils/consts';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Main /> },

  //...
  { path: NOT_FOUND_ROUTE, component: <NotFound /> },
];
