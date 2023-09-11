import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';

import { TrackTable } from '../../components/tracks/TrackTable';
import { fakeTracks } from '../../data/fake';
import { Body, Title, Wrapper } from '../styled';

const DailyPlaylist: FC = () => {
  return (
    <Wrapper>
      <HelmetHead title="100 танцевальных хитов" descr="100 танцевальных хитов" />
      <Body>
        <Title>100 танцевальных хитов</Title>
        <TrackTable data={fakeTracks} />
      </Body>
    </Wrapper>
  );
};

export default DailyPlaylist;
