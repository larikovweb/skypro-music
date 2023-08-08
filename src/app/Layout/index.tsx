import styled from '@emotion/styled';
import { FC } from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { HelmetHead } from '../../components/HelmetHead';

export const Layout: FC = () => {
  return (
    <>
      <HelmetHead title="Общий заголовок" descr="Общее описание" />
      {/* <Header /> */}
      <Main>
        <Outlet />
      </Main>
      {/* <Footer /> */}
    </>
  );
};

const Main = styled.main`
  display: block;
`;
