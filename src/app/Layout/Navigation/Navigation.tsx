import { FC, useState } from 'react';
import { IconLogo } from '../../../icons';
import { MAIN_ROUTE, MY_PLAYLIST_ROUTE } from '../../../utils/consts';
import styled from '@emotion/styled';
import { rem } from '../../../styled/mixins';
import { Burger } from './Burger';
import { Nav } from './Nav';
import { NavigateClick } from '../../../components/route/NavigateClick';

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
      <NavigateClick to={MAIN_ROUTE}>
        <Logo>
          <IconLogo />
        </Logo>
      </NavigateClick>
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

const Logo = styled.div`
  cursor: pointer;
  display: block;
  background-color: transparent;
  margin-bottom: 2.87rem;
  svg {
    width: 7.08338rem;
    height: 1.0625rem;
    fill: #fff;
  }
`;
