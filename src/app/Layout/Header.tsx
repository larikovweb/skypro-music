import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/404">404</Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header``;
