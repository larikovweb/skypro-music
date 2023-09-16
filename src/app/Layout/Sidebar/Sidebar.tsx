import { FC } from 'react';
import styled from '@emotion/styled';
import { Nav } from './Nav';

import { useDispatch, useSelector } from 'react-redux';
import { IconLogout } from '../../../icons';
import { logout } from '../../../store/reducers/authSlice';
import { rem } from '../../../styled/mixins';
import { RootState } from '../../../store/store';

export const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth).authResult;

  return (
    <Wrapper>
      <Logout>
        <Name>{user?.username}</Name>
        <LogoutBtn onClick={() => dispatch(logout())}>
          <IconLogout />
        </LogoutBtn>
      </Logout>
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${rem(418)};
  padding: ${rem(20)} ${rem(90)} ${rem(20)} ${rem(78)};
`;

const Logout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: ${rem(12)} 0 ${rem(15)} 0;
`;

const Name = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  color: #ffffff;
  margin-right: ${rem(16)};
`;

const LogoutBtn = styled.div`
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: ${rem(43)};
    height: ${rem(43)};
    fill: #ffffff;
    stroke: #ffffff;
  }
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.75;
  }
`;
