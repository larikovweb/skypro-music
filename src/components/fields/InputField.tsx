import styled from '@emotion/styled';
import React, { FC } from 'react';
import { $redColor } from '../../styled/variables';

type Props = {
  children: React.ReactNode;
  error?: string | undefined;
};

export const InputField: FC<Props> = ({ children, error }) => {
  return (
    <Wrap>
      <Content error={Boolean(error)}>{children}</Content>
      {error && <Error>{error}</Error>}
    </Wrap>
  );
};

const Content = styled.div<{ error: boolean }>`
  color: ${({ error }) => (error ? $redColor : 'inherit')};
  > * {
    color: ${({ error }) => (error ? $redColor : 'inherit')};
    width: 100%;
  }
`;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.2rem;
  transition: padding 0.3s;
`;

const Error = styled.span`
  font-size: 0.65rem;
  min-height: 1rem;
  color: ${$redColor};
  width: 100%;
  bottom: 0;
  position: absolute;
  left: 0;
  z-index: 1;
`;
