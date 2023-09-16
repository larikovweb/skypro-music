import { FC } from 'react';
import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { rem } from '../../styled/mixins';
import { IconSdebar1, IconSdebar2, IconSdebar3 } from '../../icons';
import { NavigateClick } from '../route/NavigateClick';
import {
  CATEGORY_ROUTE,
  DAILY_PLAYLIST_ROUTE,
  DANCE_HITS_ROUTE,
  INDIE_ENERGY_ROUTE,
} from '../../utils/consts';
import { musicPlayerAPI } from '../../services/musicPlayerService';
import { CategorySkeleton } from '../skeletons/styled';

const links = [
  {
    label: 'Плейлист дня',
    icon: <IconSdebar1 />,
  },
  {
    label: '100 танцевальных хитов',
    icon: <IconSdebar2 />,
  },
  {
    label: 'Инди-заряд',
    icon: <IconSdebar3 />,
  },
];

export const Nav: FC = () => {
  const { data, isLoading, isError } = musicPlayerAPI.useGetSelectionsQuery();

  const loading = isLoading && [...new Array(3)].map((_, i) => <CategorySkeleton key={i} />);
  const errorMessage = isError && <p>Ошибка загрузки</p>;
  const content =
    data && data.map((category) => <CategoryLink key={category.id} id={category.id} />);

  return (
    <List>
      {loading}
      {errorMessage}
      {content}
    </List>
  );
};

const CategoryLink: FC<{ id: number }> = ({ id }) => {
  return (
    <NavigateClick to={`${CATEGORY_ROUTE}/${id}`}>
      <Item>
        {links[id - 1].icon}
        <Label>{links[id - 1].label}</Label>
      </Item>
    </NavigateClick>
  );
};

const List = styled.div`
  height: 100%;
  padding: ${rem(40)} 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 4.6rem;
  > *:not(:last-child) {
    margin-bottom: ${rem(30)};
  }
`;

const Item = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(250)};
  height: ${rem(150)};
  transition: opacity 0.3s;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &:hover {
    opacity: 0.75;
  }
`;

const Label = styled.div`
  color: #fff;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: -0.00625rem;
`;
