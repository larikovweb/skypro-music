import { lazy } from 'react';

// const Main = lazy(() => import('./Main/Main'));
// const SignIn = lazy(() => import('./Authorization/SignIn'));
// const SignUp = lazy(() => import('./Authorization/SignUp'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));
import SignIn from './Authorization/SignIn';
import SignUp from './Authorization/SignUp';
import NotFound from './NotFound/NotFound';
import Main from './Main/Main';
import DailyPlaylist from './DailyPlaylist/DailyPlaylist';
import MyPlaylist from './MyPlaylist/MyPlaylist';
import IndieEnergy from './IndieEnergy/IndieEnergy';
import DanceHits100 from './DanceHits100/DanceHits100';

export const Pages = {
  Main,
  SignIn,
  SignUp,
  NotFound,
  DailyPlaylist,
  MyPlaylist,
  IndieEnergy,
  DanceHits100,
};
