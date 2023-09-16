import styled from '@emotion/styled';
import { skeletonLoading } from '../../styled/animations';

export const Square = styled.div`
  width: 3.1875rem;
  height: 3.1875rem;
  background-color: #313131;
  margin-right: 0.87rem;
`;

export const Line = styled.div`
  background-color: #313131;
  height: 1.1875rem;
  width: 100%;
`;

export const CategorySkeleton = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.625rem;
  height: 9.375rem;
  background-color: #313131;
  transition: opacity 0.3s;
  animation: ${skeletonLoading} 1.5s infinite;
`;
