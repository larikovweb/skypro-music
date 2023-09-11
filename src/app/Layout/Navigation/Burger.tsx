import { FC } from 'react';
import { rem } from '../../../styled/mixins';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type Props = {
  setOpenMenu: (openMenu: boolean) => void;
  openMenu: boolean;
};

export const Burger: FC<Props> = ({ openMenu, setOpenMenu }) => {
  return (
    <Wrapper onClick={() => setOpenMenu(!openMenu)} openMenu={openMenu}>
      <i />
      <i />
      <i />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ openMenu: boolean }>`
  cursor: pointer;
  position: relative;
  width: 1.25rem;
  height: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(-50%);
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
  }
  i {
    position: absolute;
    display: inline-block;
    width: 1.25rem;
    height: ${rem(1)};
    background-color: #d3d3d3;
    left: 50%;
    transition: opacity 0.3s, transform 0.3s;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-of-type(3) {
      bottom: 0;
    }
  }
  ${({ openMenu }) =>
    openMenu &&
    css`
      /* transform: rotate(-45deg); */
      i:nth-of-type(1) {
        top: 50%;
        left: 50%;
        transform: rotate(45deg);
      }
      i:nth-of-type(2) {
        opacity: 0;
      }
      i:nth-of-type(3) {
        top: 50%;
        left: 50%;
        transform-origin: center center;
        transform: rotate(-45deg);
      }
    `}
`;
