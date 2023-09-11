import { FC } from 'react';
import { GeneralInput } from '../../components/input/GeneralInput';
import { InputField } from '../../components/fields/InputField';
import { Button } from '../../components/btn/Button';
import { Buttons } from './AuthorizationLayout';
import { NavigateClick } from '../../components/route/NavigateClick';
import { SIGNUP_ROUTE } from '../../utils/consts';

const SignIn: FC = () => {
  return (
    <>
      <InputField>
        <GeneralInput type="email" label="Почта" />
      </InputField>
      <InputField>
        <GeneralInput type="password" label="Пароль" />
      </InputField>
      <Buttons>
        <Button>Войти</Button>
        <NavigateClick to={SIGNUP_ROUTE}>
          <Button transparent>Зарегистрироваться</Button>
        </NavigateClick>
      </Buttons>
    </>
  );
};

export default SignIn;
