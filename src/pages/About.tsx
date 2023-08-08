import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../styled/components';
import { HelmetHead } from '../components/HelmetHead';

const About: FC = () => {
  return (
    <>
      <HelmetHead title="Заголовок О нас" descr="Описание О нас" />
      <Wrapper>ABOUT PAGE</Wrapper>;
    </>
  );
};

const Wrapper = styled(Container)``;

export default About;
