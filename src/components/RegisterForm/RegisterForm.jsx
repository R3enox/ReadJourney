import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { signUpThunk } from '../../redux/user/userOperations';
import { Section } from './RegisterForm.styled';
import { toastSuccess } from '../../helpers/toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: { ...(JSON.parse(localStorage.getItem('signUp')) ?? {}) },
  });

  const onSubmit = (data) => {
    localStorage.setItem(
      'signUp',
      JSON.stringify({
        name: data?.name,
        email: data?.email,
      })
    );
    dispatch(signUpThunk(data));
    toastSuccess('Registration successful!');
    navigate('/recommended');
  };

  return (
    <Section>
      <div className="logoWrapper">
        <button className="btnLogo">
          <svg className="iconLogo">
            <use href={sprite + '#icon-logo'} />
          </svg>
        </button>
        <Link className="textLogo" to="/recommended">
          read journey
        </Link>
      </div>
      <form className="smbForm" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="form-title">
          Expand your mind, reading <span className="fill-word">a book</span>
        </h1>
        <div className="inputContainer">
          <div className="inputWrapper">
            <p className="desc">Name:</p>
            <input
              className={`inputForm ${errors?.name && 'error'} ${
                dirtyFields.name && !errors.name && 'correct'
              }`}
              type="text"
              placeholder="Ilona Ratushniak"
              autoComplete="off"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is required',
                },
                min: 2,
                maxLength: 20,
              })}
            />
            {errors?.name && <p className="errorMsg">{errors.name.message}</p>}
            {dirtyFields.name && !errors.name && (
              <p className="correctMsg">Name is valid</p>
            )}
          </div>
          <div className="inputWrapper">
            <p className="desc">Mail:</p>
            <input
              className={`inputForm ${errors?.email && 'error'} ${
                dirtyFields.email && !errors.email && 'correct'
              }`}
              type="email"
              placeholder="Your@email.com"
              autoComplete="off"
              {...register('email', {
                required: 'Enter a valid Email',
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'Enter a valid Email',
                },
              })}
            />
            {errors?.email && (
              <>
                <svg className="iconError">
                  <use href={sprite + '#icon-error'}></use>
                </svg>
                <p className="errorMsg">{errors.email.message}</p>
              </>
            )}
            {dirtyFields.email && !errors.email && (
              <>
                <svg className="iconCorrect">
                  <use href={sprite + '#icon-done'}></use>
                </svg>
                <p className="correctMsg">Email is valid</p>
              </>
            )}
          </div>
          <div className="inputWrapper">
            <p className="desc">Password:</p>
            <input
              className={`inputFormPassword ${errors?.password && 'error'} ${
                dirtyFields.password && !errors.password && 'correct'
              }`}
              type={showPassword ? 'text' : 'password'}
              placeholder="Yourpasswordhere"
              autoComplete="off"
              {...register('password', {
                required: 'Enter a valid Password',
                minLength: {
                  value: 7,
                  message: 'Enter a valid Password*',
                },
                pattern: {
                  value: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/i',
                  message: 'Enter a valid Password*',
                },
              })}
            />
            {showPassword ? (
              <svg
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="iconEye"
              >
                <use href={sprite + '#icon-eye'}></use>
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="iconEye"
              >
                <use href={sprite + '#icon-eye-off'}></use>
              </svg>
            )}
            {errors?.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}
            {dirtyFields.password && !errors.password && (
              <p className="correctMsg">Password is secure</p>
            )}
          </div>
        </div>
        <div className="btnWrapper">
          <button className="btnSignup" type="submit">
            Registration
          </button>

          <Link className="signLinkBtn link" to="/login">
            Already have an account?
          </Link>
        </div>
      </form>
    </Section>
  );
};
