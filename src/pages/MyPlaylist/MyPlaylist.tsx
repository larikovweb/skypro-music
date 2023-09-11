import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';

import { TrackTable } from '../../components/tracks/TrackTable';
import { fakeTracks } from '../../data/fake';
import { Body, Title, Wrapper } from '../styled';

const MyPlaylist: FC = () => {
  return (
    <Wrapper>
      <HelmetHead title="Мои треки" descr="Мои треки" />
      <Body>
        <Title>Мои треки</Title>
        <TrackTable data={fakeTracks} />
      </Body>
    </Wrapper>
  );
};

export default MyPlaylist;
