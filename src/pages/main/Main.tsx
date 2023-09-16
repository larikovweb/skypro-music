import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';
import { InputSearch } from '../../components/input/InputSearch';

import { TrackFilter } from '../../components/tracks/TrackFilter';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { TrackTable } from '../../components/tracks/TrackTable';
import { Body, Title, Wrapper } from '../styled';

const Main: FC = () => {
  return (
    <Wrapper>
      <HelmetHead title="Треки" descr="Треки" />
      <Body>
        <InputSearch />
        <Title>Треки</Title>
        <TrackFilter />
        <TrackTable />
      </Body>
      <Sidebar />
    </Wrapper>
  );
};

export default Main;
