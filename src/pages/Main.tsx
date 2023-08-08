import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../styled/components';
import { HelmetHead } from '../components/HelmetHead';
const Main: FC = () => {
  return (
    <>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
      <Wrapper>Здесь скоро будет Skypro.Music</Wrapper>
    </>
  );
};

const Wrapper = styled.h1`
  color: red;
  font-size: 4rem;
  background: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
