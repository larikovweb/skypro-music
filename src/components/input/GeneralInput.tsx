import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { $darkColor } from '../../styled/variables';

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const GeneralInput: FC<Props> = ({ label, ...inputProps }) => {
  const [inputValue, setInputValue] = useState(inputProps.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (inputProps.onChange) {
      inputProps.onChange(e);
    }
  };

  return (
    <Wrapper>
      <Input value={inputValue} onChange={handleChange} {...inputProps} />
      <Label $fixed={!!inputValue}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Label = styled.label<{ $fixed: boolean }>`
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: ${({ $fixed }) => ($fixed ? 'translateY(-120%) scale(0.5)' : 'translateY(-50%)')};
  transform-origin: left;
  left: 0;
  color: ${({ $fixed }) => ($fixed ? $darkColor : '#d0cece')};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.00338rem;
  transition: transform 0.3s, color 0.3s;
`;

const Input = styled.input`
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.00338rem;
  padding: 0.5rem 0;
  width: 100%;
  border-bottom: 0.0625rem solid #d0cece;
  transition: border 0.3s;
  &:focus {
    border-bottom: 0.0625rem solid ${$darkColor};
  }
`;
