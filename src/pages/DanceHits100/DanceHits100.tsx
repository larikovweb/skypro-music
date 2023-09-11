import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';

import { TrackTable } from '../../components/tracks/TrackTable';
import { fakeTracks } from '../../data/fake';
import { Body, Title, Wrapper } from '../styled';

const DanceHits100: FC = () => {
  return (
    <Wrapper>
      <HelmetHead title="Плейлист дня" descr="Плейлист дня" />
      <Body>
        <Title>Плейлист дня</Title>
        <TrackTable data={fakeTracks} />
      </Body>
    </Wrapper>
  );
};

export default DanceHits100;
