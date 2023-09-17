import { FC, useState } from 'react';

import { InputField } from '../../components/fields/InputField';
import { Buttons, Form } from './AuthorizationLayout';
import { Button } from '../../components/btn/Button';
import { useForm } from 'react-hook-form';
import { Nullable } from '@bunt/type';
import { GeneralInput } from '../../styled/components';
import { NavigateClick } from '../../components/route/NavigateClick';
import { authAPI } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';
import { saveAuthResult } from '../../store/reducers/authSlice';

type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpFormData>();

  const [generalError, setGeneralError] = useState('');

  const [registerUser, { isLoading }] = authAPI.useRegisterMutation();
  const [getToken] = authAPI.useGetTokenMutation();
  const dispatch = useDispatch();

  function createPasswordValidate(a: () => Nullable<string>): (b: string) => boolean | string {
    return (b) => (a() === b ? true : 'Подтверждение пароля не совпадает');
  }

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await registerUser({
        email: data.email,
        password: data.password,
        username: data.email,
      });
      const tokenResult = await getToken({ email: data.email, password: data.password });

      if ('data' in result && 'data' in tokenResult) {
        dispatch(saveAuthResult({ ...result.data, ...tokenResult.data }));
        redirect(MAIN_ROUTE);
      } else {
        setGeneralError('Неверные учетные данные');
      }
    } catch (error) {
      console.log('Ошибка при входе:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField error={errors.email?.message || generalError}>
        <GeneralInput
          placeholder="Почта"
          {...register('email', {
            required: 'Email обязателен',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный адрес электронной почты',
            },
          })}
        />
      </InputField>

      <InputField error={errors.password?.message}>
        <GeneralInput
          type="password"
          placeholder="Пароль"
          {...register('password', {
            required: 'Пароль обязателен',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать не менее 6 знаков',
            },
          })}
        />
      </InputField>

      <InputField error={errors.confirmPassword?.message}>
        <GeneralInput
          type="password"
          placeholder="Повторите пароль"
          {...register('confirmPassword', {
            validate: createPasswordValidate(() => getValues('password')),
          })}
        />
      </InputField>

      <Buttons>
        <Button pending={isLoading} type="submit">
          Зарегистрироваться
        </Button>
        <NavigateClick to="/">
          <Button transparent>Назад</Button>
        </NavigateClick>
      </Buttons>
    </Form>
  );
};

export default SignUp;
