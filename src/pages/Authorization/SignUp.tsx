import { FC } from 'react';

import { InputField } from '../../components/fields/InputField';
import { Buttons, Form } from './AuthorizationLayout';
import { Button } from '../../components/btn/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Nullable } from '@bunt/type';
import { GeneralInput } from '../../styled/components';
import { NavigateClick } from '../../components/route/NavigateClick';

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<{ email: string; password: string; confirmPassword: string }>();

  function createPasswordValidate(a: () => Nullable<string>): (b: string) => boolean | string {
    return (b) => (a() === b ? true : 'Подтверждение пароля не совпадает');
  }

  const onSubmit: SubmitHandler<{
    email: string;
    password: string;
    confirmPassword: string;
  }> = ({ email }) => {
    localStorage.setItem('user', email);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField error={errors.email?.message}>
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
        <Button type="submit">Зарегистрироваться</Button>
        <NavigateClick to="/">
          <Button transparent>Назад</Button>
        </NavigateClick>
      </Buttons>
    </Form>
  );
};

export default SignUp;
