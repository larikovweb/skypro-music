import styled from '@emotion/styled';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetHead } from '../../components/HelmetHead';
import { Navigation } from './Navigation/Navigation';
import { Player } from './Player/Player';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { isNull } from '@bunt/is';

export const Layout: FC = () => {
  const activeTrackId = useSelector((state: RootState) => state.track).selectedTrackId;

  return (
    <>
      <HelmetHead title="Общий заголовок" descr="Общее описание" />
      <Main>
        <Navigation />
        <Outlet />
        {!isNull(activeTrackId) && <Player activeTrackId={activeTrackId} />}
      </Main>
    </>
  );
};

const Main = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  padding-bottom: 4.6rem;
  min-height: 100vh;
`;
