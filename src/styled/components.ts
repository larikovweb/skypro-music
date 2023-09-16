//global styled

import styled from '@emotion/styled';
import { rem } from './mixins';
import { $darkColor } from './variables';

export const Container = styled.div`
  width: 100%;
  max-width: ${rem(1320)};
  margin: 0 auto;
  padding: 0 ${rem(20)};
`;

export const GeneralInput = styled.input`
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
