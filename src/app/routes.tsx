import { Pages } from '../pages';
import {
  DAILY_PLAYLIST_ROUTE,
  DANCE_HITS_ROUTE,
  INDIE_ENERGY_ROUTE,
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
  { path: DAILY_PLAYLIST_ROUTE, component: <Pages.DailyPlaylist /> },
  { path: DANCE_HITS_ROUTE, component: <Pages.DanceHits100 /> },
  { path: INDIE_ENERGY_ROUTE, component: <Pages.IndieEnergy /> },
  { path: MY_PLAYLIST_ROUTE, component: <Pages.MyPlaylist /> },
];

export const publicRoutes: RouteType[] = [
  { path: SIGNIN_ROUTE, component: <Pages.SignIn /> },
  { path: SIGNUP_ROUTE, component: <Pages.SignUp /> },
];
