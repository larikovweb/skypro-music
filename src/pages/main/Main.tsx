import styled from '@emotion/styled';
import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';
import { InputSearch } from '../../components/input/InputSearch';

import { ITrack } from '../../interfaces/interfaces';
import { TrackFilter } from './TrackFilter';
import { TrackTable } from './TrackTable';
import { Sidebar } from '../../components/Sidebar/Sidebar';

const fakeTracks: ITrack[] = [
  {
    id: 1,
    name: 'Guilt',
    artist: 'Nero',
    album: 'Welcome Reality',
    duration: '4:44',
    year: 2011,
    genre: 'Dubstep',
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: '5:55',
    year: 1975,
    genre: 'Rock',
  },
  {
    id: 3,
    name: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    duration: '6:30',
    year: 1976,
    genre: 'Rock',
  },
  {
    id: 4,
    name: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    album: 'Led Zeppelin IV',
    duration: '8:02',
    year: 1971,
    genre: 'Rock',
  },
  {
    id: 5,
    name: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    duration: '3:01',
    year: 1971,
    genre: 'Rock',
  },
  {
    id: 6,
    name: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    album: 'Nevermind',
    duration: '5:01',
    year: 1991,
    genre: 'Grunge',
  },
  {
    id: 7,
    name: 'Hey Jude',
    artist: 'The Beatles',
    album: 'The Beatles (White Album)',
    duration: '7:11',
    year: 1968,
    genre: 'Rock',
  },
  {
    id: 8,
    name: 'Thriller',
    artist: 'Michael Jackson',
    album: 'Thriller',
    duration: '5:57',
    year: 1982,
    genre: 'Pop',
  },
  {
    id: 9,
    name: 'Wonderwall',
    artist: 'Oasis',
    album: "(What's the Story) Morning Glory?",
    duration: '4:18',
    year: 1995,
    genre: 'Britpop',
  },
  {
    id: 10,
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    album: 'Appetite for Destruction',
    duration: '5:55',
    year: 1987,
    genre: 'Rock',
  },
  {
    id: 11,
    name: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    duration: '4:54',
    year: 1982,
    genre: 'Pop',
  },
  {
    id: 12,
    name: 'Under the Bridge',
    artist: 'Red Hot Chili Peppers',
    album: 'Blood Sugar Sex Magik',
    duration: '4:24',
    year: 1991,
    genre: 'Alternative Rock',
  },
  {
    id: 13,
    name: 'The Sound of Silence',
    artist: 'Simon & Garfunkel',
    album: 'Wednesday Morning, 3 A.M.',
    duration: '3:05',
    year: 1964,
    genre: 'Folk',
  },
];

const Main: FC = () => {
  return (
    <Wrapper>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
`;

const Body = styled.div`
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
