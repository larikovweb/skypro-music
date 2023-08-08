import { FC } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { publicRoutes } from './routes';

const Application: FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {publicRoutes.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Application;
