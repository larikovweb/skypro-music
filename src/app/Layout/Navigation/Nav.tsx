import { FC } from 'react';
import styled from '@emotion/styled';
import { rem } from '../../../styled/mixins';
import { Link, NavLink } from 'react-router-dom';

type Props = {
  links: { label: string; path: string }[];
};

export const Nav: FC<Props> = ({ links }) => {
  return (
    <Wrapper>
      {links.map(({ label, path }) => (
        <NavLink key={path} to={path}>
          {label}
        </NavLink>
      ))}
      <Link to="/">Войти</Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding: ${rem(18)} 0 ${rem(10)} 0;
  a {
    padding: ${rem(5)} 0;
    margin-bottom: ${rem(16)};
    color: #ffffff;
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
  }
`;
