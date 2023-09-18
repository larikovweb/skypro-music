import { FC, useRef, useState } from 'react';
import { ISelectOption } from '../../interfaces/interfaces';
import styled from '@emotion/styled';
import { $primaryColor } from '../../styled/variables';
import { css } from '@emotion/react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

type Props = {
  label: string | number;
  options: ISelectOption[];
  getValue: (option: ISelectOption[]) => void;
};

export const SelectMulty: FC<Props> = ({ label, options, getValue }) => {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<ISelectOption[]>([]);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const toggleSelected = (option: ISelectOption) => {
    if (selectedOptions.some((o) => o.value === option.value)) {
      setSelectedOptions((state) => state.filter((o) => o.value !== option.value));
      getValue(selectedOptions.filter((o) => o.value !== option.value));
    } else {
      setSelectedOptions((state) => [...state, option]);
      getValue([...selectedOptions, option]);
    }
  };

  const uniqueOptions: ISelectOption[] = Array.from(new Set(options.map((option) => option.value)))
    .map((value) => options.filter((option) => option.value === value)[0])
    .sort((a, b) => {
      if (typeof a.value === 'string' && typeof b.value === 'string') {
        return a.value.localeCompare(b.value);
      }
      return (b.value as number) - (a.value as number);
    });

  return (
    <Wrapper ref={ref}>
      <Btn active={selectedOptions.length > 0} onClick={() => setOpen((state) => !state)}>
        {label}
      </Btn>
      {selectedOptions.length > 0 && <Counter>{selectedOptions.length}</Counter>}
      <List open={open}>
        <Scroll>
          {uniqueOptions.map((option) => (
            <Item
              selected={selectedOptions.some((o) => o.value === option.value)}
              onClick={() => toggleSelected(option)}
              key={option.value}>
              {option.label}
            </Item>
          ))}
        </Scroll>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(25%, -25%);
  min-width: 1.625rem;
  height: 1.625rem;
  border-radius: 50%;
  background-color: ${$primaryColor};
  color: #fff;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.8125rem;
`;

const Btn = styled.div<{ active: boolean }>`
  cursor: pointer;
  padding: 0.38rem 1.25rem 0.56rem;
  color: #ffffff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.001rem;
  border-radius: 3.75rem;
  border: 0.0625rem solid #ffffff;
  ${({ active }) =>
    active &&
    css`
      color: ${$primaryColor};
      border: 0.0625rem solid ${$primaryColor};
    `}
`;

const List = styled.div<{ open: boolean }>`
  border-radius: 0.75rem;
  background: #313131;
  padding: 2.125rem;
  position: absolute;
  bottom: -0.62rem;
  left: 0;
  transform: translateY(100%);
  width: 15.5rem;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  ${({ open }) =>
    open &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 14.8125rem;
  padding-right: 1.5rem;
  &::-webkit-scrollbar {
    width: 0.25rem;
    background: #4b4949;
    border-radius: 0.25rem;
    &-thumb {
      background: #ffffff;
      border-radius: 0.25rem;
    }
  }
`;

const Item = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  transition: opacity 0.3s, color 0.3s;
  &:not(:last-child) {
    margin-bottom: 1.75rem;
  }
  &:hover {
    opacity: 0.75;
  }
  ${({ selected }) =>
    selected &&
    css`
      text-decoration-line: underline;
      color: ${$primaryColor};
    `}
`;
