import { FC, useState } from 'react';
import { IconLogo } from '../../../icons';
import { MAIN_ROUTE, MY_PLAYLIST_ROUTE } from '../../../utils/consts';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { rem } from '../../../styled/mixins';
import { Burger } from './Burger';
import { Nav } from './Nav';

const links = [
  {
    label: 'Главное',
    path: MAIN_ROUTE,
  },
  {
    label: 'Мой плейлист',
    path: MY_PLAYLIST_ROUTE,
  },
];

export const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Wrapper>
      <Logo to={MAIN_ROUTE}>
        <IconLogo />
      </Logo>
      <Burger setOpenMenu={setOpenMenu} openMenu={openMenu} />
      {openMenu && <Nav links={links} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  height: fit-content;
  top: 0;
  width: ${rem(244)};
  padding: 2.25rem;
`;

const Logo = styled(Link)`
  display: block;
  background-color: transparent;
  margin-bottom: 2.87rem;
  svg {
    width: 7.08338rem;
    height: 1.0625rem;
    fill: #fff;
  }
`;
