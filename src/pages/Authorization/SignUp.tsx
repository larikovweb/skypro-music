import styled from '@emotion/styled';
import { FC } from 'react';
import { GeneralInput } from '../../components/input/GeneralInput';
import { InputField } from '../../components/fields/InputField';
import { Buttons } from './AuthorizationLayout';
import { Button } from '../../components/btn/Button';

const SignUp: FC = () => {
  return (
    <>
      <InputField>
        <GeneralInput type="email" label="Почта" />
      </InputField>
      <InputField>
        <GeneralInput type="password" label="Пароль" />
      </InputField>
      <InputField>
        <GeneralInput type="password" label="Повторите пароль" />
      </InputField>
      <Buttons>
        <Button>Зарегистрироваться</Button>
      </Buttons>
    </>
  );
};

export default SignUp;
