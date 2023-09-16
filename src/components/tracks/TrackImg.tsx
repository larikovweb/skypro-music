import styled from '@emotion/styled';
import { FC } from 'react';
import { IconMusic } from '../../icons';

type Props = {
  src: string;
  alt?: string;
};

export const TrackImg: FC<Props> = ({ src, alt }) => {
  return <Wrapper>{src.length > 0 ? <Img src={src} alt={alt} /> : <IconMusic />}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.1875rem;
  height: 3.1875rem;
  background-color: #313131;
  overflow: hidden;
  svg {
    width: 1.125rem;
    height: 1.0625rem;
    fill: #4e4e4e;
    stroke: #4e4e4e;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center center;
`;
