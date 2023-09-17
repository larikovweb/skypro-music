import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';

import { TrackTable } from '../../components/tracks/TrackTable';
import { Body, Title } from '../styled';
import { musicPlayerAPI } from '../../services/musicPlayerService';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MyPlaylist: FC = () => {
  const accessToken = useSelector((state: RootState) => state.auth.authResult)?.access;
  const {
    data: tracks,
    isLoading,
    isError,
  } = musicPlayerAPI.useGetAllFavoriteTracksQuery({
    accessToken: accessToken,
  });

  return (
    <>
      <HelmetHead title="Мои треки" descr="Мои треки" />
      <Body>
        <Title>Мои треки</Title>
        <TrackTable tracks={tracks} isLoading={isLoading} isError={isError} />
      </Body>
    </>
  );
};

export default MyPlaylist;
