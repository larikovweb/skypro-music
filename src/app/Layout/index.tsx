import styled from '@emotion/styled';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetHead } from '../../components/HelmetHead';
import { Navigation } from './Navigation/Navigation';
import { Sidebar } from './Sidebar/Sidebar';
import { Player } from './Player/Player';

export const Layout: FC = () => {
  return (
    <>
      <HelmetHead title="Общий заголовок" descr="Общее описание" />
      <Main>
        <Navigation />
        <Outlet />
        <Sidebar />
        <Player />
      </Main>
    </>
  );
};

const Main = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  padding-bottom: 4.6rem;
`;
