import { FC, useEffect } from 'react';
import { HelmetHead } from '../../components/HelmetHead';

import { TrackTable } from '../../components/tracks/TrackTable';
import { Body, Title } from '../styled';
import { musicPlayerAPI } from '../../services/musicPlayerService';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { authAPI } from '../../services/authService';

const MyPlaylist: FC = () => {
  const refresh = useSelector((state: RootState) => state.auth).authResult?.refresh;

  const { data: accessToken } = authAPI.useRefreshTokenQuery({
    refresh: refresh,
  });

  const {
    data: tracks,
    isLoading,
    isError,
  } = musicPlayerAPI.useGetAllFavoriteTracksQuery({
    accessToken: accessToken?.access,
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
