import styled from '@emotion/styled';
import { FC } from 'react';
import { Line, Square } from './styled';
import { skeletonLoading } from '../../styled/animations';

export const PlayerSkeleton: FC = () => {
  return (
    <Wrapper>
      <Square />
      <Lines>
        <Line />
        <Line />
      </Lines>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  animation: ${skeletonLoading} 2s linear infinite;
`;

const Lines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  width: 3.6875rem;
`;
