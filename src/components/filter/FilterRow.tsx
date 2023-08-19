import styled from '@emotion/styled';
import { FC } from 'react';

type Props = {
  options: {
    label: string;
    value: string;
  }[];
};

export const FilterRow: FC<Props> = ({ options }) => {
  return (
    <Wrapper>
      <Label>Искать по:</Label>
      {options.map(({ label, value }) => (
        <Btn key={value}>{label}</Btn>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.62rem;
  }
`;

const Label = styled.div`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.001rem;
`;

const Btn = styled.div`
  cursor: pointer;
  padding: 0.37rem 1.25rem 0.56rem;
  border-radius: 3.75rem;
  border: 0.0625rem solid #fff;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.001rem;
`;
