import styled from '@emotion/styled';
import { FC } from 'react';
import { Line, Square } from './styled';
import { skeletonLoading } from '../../styled/animations';

export const TrackSkeleton: FC = () => {
  return (
    <Wrapper>
      <Square />
      <Lines>
        <Line />
        <Line />
        <Line />
      </Lines>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${skeletonLoading} 2s linear infinite;
`;

const Lines = styled.div`
  display: grid;
  grid-template-columns: 4.5fr 4fr 4.8fr;
  gap: 3.75rem;
  justify-content: space-between;
  width: 100%;
`;
