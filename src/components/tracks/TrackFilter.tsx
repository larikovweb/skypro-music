import styled from '@emotion/styled';
import { FC } from 'react';
import { SelectMulty } from '../select/SelectMulty';
import { isUndefined } from '@bunt/is';
import { ITrack } from '../../interfaces/interfaces';

export const TrackFilter: FC<{ data: ITrack[] | undefined }> = ({ data }) => {
  const artistOptions = !isUndefined(data)
    ? data.map((track) => ({
        label: track.author,
        value: track.author.split(' ').join('').toLowerCase(),
      }))
    : [];

  const yearOptions = !isUndefined(data)
    ? data.map((track) => ({
        label: new Date(track.release_date).getFullYear(),
        value: new Date(track.release_date).getFullYear(),
      }))
    : [];

  const genreOptions = !isUndefined(data)
    ? data.map((track) => ({
        label: track.genre,
        value: track.genre.split(' ').join('').toLowerCase(),
      }))
    : [];

  return (
    <Wrapper>
      <Label>Искать по:</Label>
      <SelectMulty label="исполнителю" options={artistOptions} />
      <SelectMulty label="году выпуска" options={yearOptions} />
      <SelectMulty label="жанру" options={genreOptions} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.62rem;
  }
`;

const Label = styled.div`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.001rem;
`;

const Btn = styled.div`
  cursor: pointer;
  padding: 0.37rem 1.25rem 0.56rem;
  border-radius: 3.75rem;
  border: 0.0625rem solid #fff;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.001rem;
`;