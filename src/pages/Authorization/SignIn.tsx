import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { InputField } from '../../components/fields/InputField';
import { Button } from '../../components/btn/Button';
import { Buttons, Form } from './AuthorizationLayout';
import { NavigateClick } from '../../components/route/NavigateClick';
import { SIGNUP_ROUTE } from '../../utils/consts';
import { GeneralInput } from '../../styled/components';
import { authAPI } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { saveAuthResult } from '../../store/reducers/authSlice';

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormData>();

  const [generalError, setGeneralError] = useState('');

  const [login, { isLoading }] = authAPI.useLoginMutation();
  const [getToken] = authAPI.useGetTokenMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await login({ email: data.email, password: data.password });
      const tokenResult = await getToken({ email: data.email, password: data.password });

      if ('data' in result && 'data' in tokenResult) {
        dispatch(saveAuthResult({ ...result.data, ...tokenResult.data }));
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
          type="email"
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
              message: 'Пароль должен содержать минимум 6 символов',
            },
          })}
        />
      </InputField>
      <Buttons>
        <Button pending={isLoading} type="submit">
          Войти
        </Button>
        <NavigateClick to={SIGNUP_ROUTE}>
          <Button pending={isLoading} transparent>
            Зарегистрироваться
          </Button>
        </NavigateClick>
      </Buttons>
    </Form>
  );
};

export default SignIn;
