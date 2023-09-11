import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';

import { TrackTable } from '../../components/tracks/TrackTable';
import { fakeTracks } from '../../data/fake';
import { Body, Title, Wrapper } from '../styled';

const IndieEnergy: FC = () => {
  return (
    <Wrapper>
      <HelmetHead title="Инди заряд" descr="Инди заряд" />
      <Body>
        <Title>Инди заряд</Title>
        <TrackTable data={fakeTracks} />
      </Body>
    </Wrapper>
  );
};

export default IndieEnergy;
