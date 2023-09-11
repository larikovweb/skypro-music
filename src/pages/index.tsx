import { lazy } from 'react';

// const Main = lazy(() => import('./Main/Main'));
// const SignIn = lazy(() => import('./Authorization/SignIn'));
// const SignUp = lazy(() => import('./Authorization/SignUp'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));
import SignIn from './Authorization/SignIn';
import SignUp from './Authorization/SignUp';
import NotFound from './NotFound/NotFound';
import Main from './Main/Main';

export const Pages = {
  Main,
  SignIn,
  SignUp,
  NotFound,
};
