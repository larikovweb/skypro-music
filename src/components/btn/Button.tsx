import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconLoader } from '../../icons';
import { $darkColor, $redColor } from '../../styled/variables';

type ButtonProps = {
  pending?: boolean;
  transparent?: boolean;
  fitContent?: boolean;
  disabled?: boolean;
  primary?: boolean;
  red?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  pending,
  children,
  transparent,
  fitContent,
  disabled,
  primary,
  red,
  ...rest
}) => {
  return (
    <Wrapper
      type="button"
      pending={pending}
      transparent={transparent}
      fitContent={fitContent}
      disabled={disabled}
      primary={primary}
      red={red}
      {...rest}>
      <span>{children}</span>
      {pending && (
        <i>
          <IconLoader />
        </i>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button<ButtonProps>`
  position: relative;
  cursor: pointer;
  background-color: #580ea2;
  color: ${({ transparent }) => (transparent ? $darkColor : '#fff')};
  width: ${({ fitContent }) => (fitContent ? 'fit-content' : '100%')};
  white-space: ${({ fitContent }) => (fitContent ? 'nowrap' : 'auto')};
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.00338rem;
  height: 3.25rem;
  padding: 0.75rem 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  outline: none;
  border: none;
  transition: box-shadow 0.3s, color 0.3s, border 0.3s;
  &:hover {
    box-shadow: 0 0 1rem rgba(25, 25, 28, 0.16);
  }

  &:active {
    opacity: 0.75;
    transition: opacity 0.3s;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #fff;
    stroke: #fff;
    transition: stroke 0.3s, fill 0.3s, opacity 0.3s;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
  ${({ pending }) =>
    pending &&
    css`
      opacity: 0.75;
      pointer-events: none;
      span {
        opacity: 0;
      }
      i {
        display: block;
        width: fit-content;
        height: fit-content;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}
    ${({ primary }) =>
    primary &&
    css`
      background-color: #580ea2;
      &:hover {
        box-shadow: 0 0 1rem rgba(25, 25, 28, 0.16);
      }
    `}
    ${({ red }) =>
    red &&
    css`
      background-color: transparent;
      color: ${$redColor};
      transition: opacity 0.3s;
      svg {
        fill: ${$redColor};
        stroke: ${$redColor};
      }
      &:hover {
        box-shadow: none;
        opacity: 0.75;
      }
    `}
    ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
      border: 0.0625rem solid #d0cece;
      &:hover {
        box-shadow: none;
        color: #3f3f79;
        svg {
          fill: #3f3f79;
          stroke: #3f3f79;
        }
      }
      svg {
        fill: #580ea2;
        stroke: #580ea2;
      }
    `}
`;
