import { FC } from 'react';
import { IconSearch } from '../../icons';
import styled from '@emotion/styled';

export const InputSearch: FC = () => {
  return (
    <Wrapper>
      <IconSearch />
      <Input placeholder="Поиск" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    top: 0.15rem;
    left: 0.5rem;
    fill: #ffffff;
    stroke: #ffffff;
    width: 1.05438rem;
    height: 1.06338rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding-left: 2.5rem;
  border-bottom: 0.0625rem solid #4e4e4e;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 112.5% */
  letter-spacing: 0.001rem;
  background-color: transparent;
  padding-bottom: 0.88rem;
  transition: border 0.3s;
  &:focus {
    border-bottom: 0.0625rem solid #ffffff;
  }
`;
