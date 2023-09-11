import { FC } from 'react';
import styled from '@emotion/styled';
import { Nav } from './Nav';
import { IconLogout } from '../../icons';
import { rem } from '../../styled/mixins';

export const Sidebar: FC = () => {
  return (
    <Wrapper>
      <Logout>
        <Name>Sergey.Ivanov</Name>
        <LogoutBtn>
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
