import { FC } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { privateRoutes, publicRoutes } from './routes';
import AuthorizationLayout from '../pages/Authorization/AuthorizationLayout';
import NotFound from '../pages/NotFound/NotFound';
import { Provider, useSelector } from 'react-redux';
import { RootState, setupStore } from '../store/store';
import { isNull } from '@bunt/is';

const Application: FC = () => {
  const store = setupStore();

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<RouteSelect />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

const RouteSelect: FC = () => {
  const isAuthenticated = !isNull(useSelector((state: RootState) => state.auth.authResult));

  if (isAuthenticated) {
    return (
      <Routes>
        <Route element={<Layout />}>
          {privateRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<AuthorizationLayout />}>
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Application;
