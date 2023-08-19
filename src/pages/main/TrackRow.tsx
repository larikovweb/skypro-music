import styled from '@emotion/styled';
import { FC } from 'react';
import { IconLike, IconMusic, IconTime } from '../../icons';
import { $primaryColor } from '../../styled/variables';
import { BtnLike } from '../../components/btn/BtnLike';
import { TrackImg } from '../../components/track/TrackImg';

type Props = {
  id: number;
  name: string;
  artist: string;
  album: string;
  duration: string;
};

export const TrackRow: FC<Props> = (props) => {
  const { id, name, artist, album, duration } = props;

  return (
    <Row>
      <Col>
        <TrackImg src="" alt={name} />
        <Name>{name}</Name>
      </Col>
      <Col>{artist}</Col>
      <Col grey>{album}</Col>
      <Col grey>
        <BtnLike />
        {duration}
      </Col>
    </Row>
  );
};

export const TrackRowSort: FC = () => {
  return (
    <RowSort>
      <Col grey>Трек</Col>
      <Col grey>Исполнитель</Col>
      <Col grey>Альбом</Col>
      <Col>
        <IconTime />
      </Col>
    </RowSort>
  );
};

const Row = styled.div`
  display: grid;
  grid-template-columns: 4.5fr 3.5fr 2.4fr 1.1fr;
  justify-content: space-between;
  gap: 1rem;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.001rem;
  > *:last-of-type {
    text-align: right;
    justify-content: right;
    justify-items: right;
    gap: 0.25rem;
    display: grid;
    grid-template-columns: 0.875rem 2.875rem;
  }
`;

const RowSort = styled(Row)`
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0.125rem;
  margin-bottom: 0.75rem;
  > * {
    text-transform: uppercase;
    &:last-of-type {
      grid-template-columns: 1fr;
    }
  }
`;

const Col = styled.div<{ grey?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ grey }) => (grey ? '#4e4e4e' : '#fff')};
  svg {
    height: 0.75rem;
    stroke: #4e4e4e;
  }
`;

const Name = styled.div`
  margin-left: 1.06rem;
`;
