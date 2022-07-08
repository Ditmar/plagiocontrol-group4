import { React } from 'react';
import PropTypes from 'prop-types';
import styles from './Register.module.css';
import { Card } from './subcomponents/card-default/card-default';
import { Container } from './subcomponents/container-default/container-default';
import useForm from '../../../hooks/useForm';
import { Text } from './subcomponents/text-default/text-default';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

export const Register = ({ isLoading, errors, label }) => {
  const [form, handlerChangeForm, handlerResetForm] = useForm({
    email: 'fanor@gmail.com',
    password: '',
    repassword: '',
  });
  const { email, password, repassword } = form;
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    handlerResetForm({ ...password, showPassword: !password.showPassword });
    handlerResetForm({
      ...repassword,
      showRePassword: !repassword.showRePassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container className={styles['container']}>
      <Card className={styles['card']}>
        <div className={styles['sing-in']}>
          <div className={styles['logo']}>
            <div className={styles['ellipse']}>
              <img src='/images/D.png' alt='D' />
            </div>
          </div>
          <Text className={styles['text1']}>Plagio Control</Text>
          <Text className={styles['text2']}>Login Plagio Control</Text>
          <Text className={styles['text3']}>
            Enter your email and password below
          </Text>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <form className={styles['form']} onSubmit={onSubmit}>
              <div className={styles['textefield-label-icon-default']}>
                <Text className={styles['text-email']}>EMAIL</Text>
                <Input
                  type={'text'}
                  className={styles['input']}
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={handlerChangeForm}
                />
              </div>

              <div className={styles['textefield-label-icon-default']}>
                <Text className={styles['text-passw']}> PASSWORD</Text>
                <Input
                  type={form.showPassword ? 'password' : 'password'}
                  className={styles['input']}
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={handlerChangeForm}
                  endAdornment={
                    <InputAdornment>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {form.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>

              <div className={styles['textefield-label-icon-default']}>
                <Text className={styles['text-passw']}> RE. PASSWORD</Text>
                <Input
                  type={form.showRePassword ? 'password' : 'password'}
                  className={styles['input']}
                  
                  placeholder='Re Password'
                  name='repassword'
                  value={repassword}
                  onChange={handlerChangeForm}
                  endAdornment={
                    <InputAdornment>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {form.showRePassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <Text className={styles['forgot-password']}>
                Forgot password?
              </Text>
              <button className='button' type='submit'>
                {label}
              </button>
              <div className={styles['login']}>
                <span className={styles['message']}>
                  Do you already have an account?
                </span>

                <span className={styles['log-in']}>Login</span>
              </div>
            </form>
          )}
        </div>
      </Card>
    </Container>
  );
};

Register.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  isLoading: PropTypes.bool,
  errors: PropTypes.bool,
  label: PropTypes.string,
};
