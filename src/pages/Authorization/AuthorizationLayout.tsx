import styled from '@emotion/styled';
import { FC } from 'react';
import { IconLogo } from '../../icons';
import { Outlet } from 'react-router-dom';
import { $darkColor } from '../../styled/variables';

const Authorization: FC = () => {
  return (
    <Wrapper>
      <Body>
        <Logo>
          <IconLogo />
        </Logo>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2.5rem;
  > *:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  border-radius: 0.75rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.875rem;
  padding: 2.7rem 2.5rem;
`;

const Logo = styled.div`
  width: 8.75006rem;
  height: 1.3125rem;
  margin-bottom: 2.5rem;
  fill: ${$darkColor};
`;

export default Authorization;
