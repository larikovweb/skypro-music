import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { IconLike } from '../../icons';
import { $primaryColor } from '../../styled/variables';

type Props = {
  active?: boolean;
};

export const BtnLike: FC<Props> = ({ active }) => {
  const [liked, setLiked] = useState(active);

  return (
    <Wrapper active={liked} onClick={() => setLiked((state) => !state)}>
      <IconLike />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ active?: boolean }>`
  cursor: pointer;
  svg {
    width: 0.875rem;
    height: 0.75rem;
    stroke: ${({ active }) => (active ? $primaryColor : '#696969')};
    fill: ${({ active }) => active && $primaryColor};
    transition: fill 0.3s, stroke 0.3s;
  }
  &:hover {
    svg {
      stroke: #acacac;
    }
  }
`;
