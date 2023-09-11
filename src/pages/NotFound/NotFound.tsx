import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Button } from '../../components/btn/Button';
import { NavigateClick } from '../../components/route/NavigateClick';
import { MAIN_ROUTE } from '../../utils/consts';
const NotFound: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Code>404</Code>
        <Title>Страница не найдена 😭</Title>
        <Description>
          Возможно, она была удалена <br /> или перенесена на другой адрес
        </Description>
        <NavigateClick to={MAIN_ROUTE}>
          <Button>Вернуться на главную</Button>
        </NavigateClick>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
`;

const Code = styled.div`
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 10rem;
  font-style: normal;
  font-weight: 400;
  line-height: 10.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
  margin-top: 0.19rem;
  margin-bottom: 1.19rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
  letter-spacing: -0.00338rem;
  margin-bottom: 2.25rem;
  color: #4e4e4e;
`;

export default NotFound;
