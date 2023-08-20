import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { TrackRow, TrackRowSort } from './TrackRow';
import { ITrack } from '../../interfaces/interfaces';
import { TrackSkeleton } from '../../components/skeletons/TrackSkeleton';

const fakeTracks: ITrack[] = [
  {
    id: 1,
    name: 'Guilt',
    artist: 'Nero',
    album: 'Welcome Reality',
    duration: '4:44',
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: '5:55',
  },
  {
    id: 3,
    name: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    duration: '6:30',
  },
  {
    id: 4,
    name: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    album: 'Led Zeppelin IV',
    duration: '8:02',
  },
  {
    id: 5,
    name: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    duration: '3:01',
  },
  {
    id: 6,
    name: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    album: 'Nevermind',
    duration: '5:01',
  },
  {
    id: 7,
    name: 'Hey Jude',
    artist: 'The Beatles',
    album: 'The Beatles (White Album)',
    duration: '7:11',
  },
  {
    id: 8,
    name: 'Thriller',
    artist: 'Michael Jackson',
    album: 'Thriller',
    duration: '5:57',
  },
  {
    id: 9,
    name: 'Wonderwall',
    artist: 'Oasis',
    album: "(What's the Story) Morning Glory?",
    duration: '4:18',
  },
  {
    id: 10,
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    album: 'Appetite for Destruction',
    duration: '5:55',
  },
  {
    id: 11,
    name: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    duration: '4:54',
  },
  {
    id: 12,
    name: 'Under the Bridge',
    artist: 'Red Hot Chili Peppers',
    album: 'Blood Sugar Sex Magik',
    duration: '4:24',
  },
  {
    id: 13,
    name: 'The Sound of Silence',
    artist: 'Simon & Garfunkel',
    album: 'Wednesday Morning, 3 A.M.',
    duration: '3:05',
  },
  {
    id: 14,
    name: 'Enter Sandman',
    artist: 'Metallica',
    album: 'Metallica',
    duration: '5:32',
  },
  {
    id: 15,
    name: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: '5:55',
  },
  {
    id: 16,
    name: 'Hey Ya!',
    artist: 'OutKast',
    album: 'Speakerboxxx/The Love Below',
    duration: '3:55',
  },
  {
    id: 17,
    name: 'November Rain',
    artist: "Guns N' Roses",
    album: 'Use Your Illusion I',
    duration: '8:57',
  },
];

export const TrackTable: FC = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTracks(fakeTracks);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  });

  const loading =
    tracks.length === 0 && [...new Array(20)].map((_, i) => <TrackSkeleton key={i} />);

  const content =
    tracks.length > 0 && tracks.map((track) => <TrackRow key={track.id} {...track} />);

  return (
    <Wrapper>
      <TrackRowSort />
      {loading}
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3.2rem;
  display: grid;
  gap: 0.75rem;
  padding: 0.68rem;
`;
