import { FC } from 'react';
import styled from '@emotion/styled';
import { rem } from '../../../styled/mixins';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../../store/reducers/authSlice';
import { useDispatch } from 'react-redux';

type Props = {
  links: { label: string; path: string }[];
};

export const Nav: FC<Props> = ({ links }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {links.map(({ label, path }) => (
        <NavLink key={path} to={path}>
          {label}
        </NavLink>
      ))}
      <Link onClick={() => dispatch(logout())} to="/">
        Выйти
      </Link>
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
