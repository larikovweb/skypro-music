import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';
import { InputSearch } from '../../components/input/InputSearch';

import { TrackFilter } from '../../components/tracks/TrackFilter';

import { TrackTable } from '../../components/tracks/TrackTable';
import { Body, Title } from '../styled';
import { musicPlayerAPI } from '../../services/musicPlayerService';

const Main: FC = () => {
  const { data: tracks, isLoading, isError } = musicPlayerAPI.useGetAllTracksQuery();

  return (
    <>
      <HelmetHead title="Треки" descr="Треки" />
      <Body>
        <InputSearch />
        <Title>Треки</Title>
        <TrackFilter data={tracks} />
        <TrackTable tracks={tracks} isLoading={isLoading} isError={isError} />
      </Body>
    </>
  );
};

export default Main;
