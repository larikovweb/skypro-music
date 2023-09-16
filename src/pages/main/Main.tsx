import { FC, useState } from 'react';
import { HelmetHead } from '../../components/HelmetHead';
import { InputSearch } from '../../components/input/InputSearch';

import { TrackFilter } from '../../components/tracks/TrackFilter';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { TrackTable } from '../../components/tracks/TrackTable';
import { fakeTracks } from '../../data/fake';
import { Body, Title, Wrapper } from '../styled';
import { articleAPI } from '../../services/ArticlesService';

const Main: FC = () => {
  const [limit, setLimit] = useState(20);
  const { data: articles, error, isLoading, refetch } = articleAPI.useFetchAllArticlesQuery(limit);

  console.log(articles);

  return (
    <Wrapper>
      <HelmetHead title="Треки" descr="Треки" />
      <Body>
        <InputSearch />
        <Title>Треки</Title>
        <TrackFilter data={fakeTracks} />
        <TrackTable data={fakeTracks} />
      </Body>
      <Sidebar />
    </Wrapper>
  );
};

export default Main;
