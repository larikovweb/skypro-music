import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { IconLike } from '../../icons';
import { $primaryColor } from '../../styled/variables';
import { musicPlayerAPI } from '../../services/musicPlayerService';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { isUndefined } from '@bunt/is';

type Props = {
  id: number;
};

export const BtnLike: FC<Props> = ({ id }) => {
  const accessToken = useSelector((state: RootState) => state.auth.authResult)?.access;

  const [addToFavorites] = musicPlayerAPI.useAddToFavoritesMutation();
  const [removeFromFavorites] = musicPlayerAPI.useRemoveFromFavoritesMutation();
  const { data: favoriteTracks, isLoading } = musicPlayerAPI.useGetAllFavoriteTracksQuery({
    accessToken: accessToken,
  });

  const isTrackInFavorites =
    !isLoading && !isUndefined(favoriteTracks) && favoriteTracks.some((track) => track.id === id);
  const [liked, setLiked] = useState(isTrackInFavorites);

  const handleToggleFavorites = (trackId: number) => {
    if (accessToken) {
      if (liked) {
        removeFromFavorites({ id: trackId, accessToken });
      } else {
        addToFavorites({ id: trackId, accessToken });
      }
      setLiked(!liked);
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
