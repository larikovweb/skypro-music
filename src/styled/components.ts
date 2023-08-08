//global styled

import styled from '@emotion/styled';
import { rem } from './mixins';

export const Container = styled.div`
  width: 100%;
  max-width: ${rem(1320)};
  margin: 0 auto;
  padding: 0 ${rem(20)};
`;
