import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { IconLike } from '../../icons';
import { $primaryColor } from '../../styled/variables';
import { musicPlayerAPI } from '../../services/musicPlayerService';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { isUndefined } from '@bunt/is';
import { authAPI } from '../../services/authService';

type Props = {
  id: number;
};

export const BtnLike: FC<Props> = ({ id }) => {
  const refresh = useSelector((state: RootState) => state.auth).authResult?.refresh;

  const { data: accessToken } = authAPI.useRefreshTokenQuery({
    refresh: refresh,
  });
  const [addToFavorites] = musicPlayerAPI.useAddToFavoritesMutation();
  const [removeFromFavorites] = musicPlayerAPI.useRemoveFromFavoritesMutation();
  const {
    data: favoriteTracks,
    isLoading,
    refetch,
  } = musicPlayerAPI.useGetAllFavoriteTracksQuery({
    accessToken: accessToken?.access,
  });

  const isTrackInFavorites =
    !isLoading && !isUndefined(favoriteTracks) && favoriteTracks.some((track) => track.id === id);
  const [liked, setLiked] = useState(isTrackInFavorites);

  const handleToggleFavorites = async (trackId: number) => {
    if (accessToken) {
      if (liked) {
        await removeFromFavorites({ id: trackId, accessToken: accessToken.access });
      } else {
        await addToFavorites({ id: trackId, accessToken: accessToken.access });
      }
      setLiked(!liked);
      refetch();
    }
  };

  useEffect(() => {
    setLiked(isTrackInFavorites);
  }, [favoriteTracks, id]);

  return (
    <Wrapper active={liked} onClick={() => handleToggleFavorites(id)}>
      <IconLike />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ active?: boolean }>`
  cursor: pointer;
  svg {
    width: 0.875rem;
    height: 0.75rem;
    stroke: ${({ active }) => (active ? $primaryColor : '#696969')};
    fill: ${({ active }) => active && $primaryColor};
    transition: fill 0.3s, stroke 0.3s;
  }
  &:hover {
    svg {
      stroke: #acacac;
    }
  }
`;
