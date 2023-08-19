import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { HelmetHead } from '../../components/HelmetHead';
import { IconLike, IconMusic, IconSearch, IconTime } from '../../icons';
import { InputSearch } from '../../components/input/InputSearch';
import { FilterRow } from '../../components/filter/FilterRow';
import { TrackTable } from './TrackTable';
const Main: FC = () => {
  return (
    <>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
      <Wrapper>
        <InputSearch />
        <Title>Треки</Title>
        <FilterRow
          options={[
            { label: 'исполнителю', value: '1' },
            { label: 'году выпуска', value: '2' },
            { label: 'жанру', value: '3' },
          ]}
        />
        <TrackTable />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 2.06rem;
`;

const Title = styled.h1`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4rem;
  letter-spacing: -0.04875rem;
  margin-bottom: 2.8rem;
  margin-top: 3.2rem;
`;

export default Main;
