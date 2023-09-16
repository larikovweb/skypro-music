import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';

import { TrackTable } from '../../components/tracks/TrackTable';
import { Body, Title, Wrapper } from '../styled';
import { useParams } from 'react-router-dom';
import { musicPlayerAPI } from '../../services/musicPlayerService';
import { isUndefined } from '@bunt/is';

const Category: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = musicPlayerAPI.useGetSelectionByIdQuery(
    isUndefined(id) ? 1 : +id,
  );

  return (
    <Wrapper>
      <HelmetHead title="Плейлист дня" descr="Плейлист дня" />
      <Body>
        <Title>Плейлист дня</Title>
        <TrackTable tracks={data && data.items} isLoading={isLoading} isError={isError} />
      </Body>
    </Wrapper>
  );
};

export default Category;
