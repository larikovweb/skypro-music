import { FC } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { privateRoutes, publicRoutes } from './routes';
import AuthorizationLayout from '../pages/Authorization/AuthorizationLayout';
import NotFound from '../pages/NotFound/NotFound';

const Application: FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RouteSelect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const RouteSelect: FC = () => {
  const session = true;

  if (session) {
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
