import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { register } from '../../redux/Slice';

// import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import LoginWrp, { Div, NMdiv } from './styled';
import { useFormik } from 'formik';
import { clearMessage } from '../../redux/message';
import { Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 8 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
});

const RegisterPage = () => {
    const { message } = useSelector((state) => state.message);
    const [passwordShown, setPasswordShown] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const {
        errors,
        handleSubmit,
        isSubmitting,
        handleChange,
        values,
        setSubmitting
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },

        validationSchema,
        onSubmit: (values) => {
            const { email, password } = values;
            setErrorMessage('');
            dispatch(register({ email, password }))
                .unwrap()
                .then((res) => {
                    setSubmitting(false);
                    Navigate('/');
                })
                .catch((err) => {
                    setSubmitting(false);
                    setErrorMessage(err.error);
                });
        }
    });

    return (
        <LoginWrp>
            <Card style={{ width: 400 }}>
                <h2>Register</h2>
                <div style={{ textAlign: 'center' }} className="text-danger">
                    {ErrorMessage && message.error}
                </div>
                <form id="login-form" onSubmit={handleSubmit}>
                    <Div>
                        <input
                            type="email"
                            placeholder="Email"
                            className=""
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <div className="text-danger">
                            {errors.email ? errors.email : null}
                        </div>
                    </Div>
                    <Div>
                        <div>
                            <input
                                type={passwordShown ? 'text' : 'password'}
                                placeholder="Password"
                                className=""
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                            <button onClick={togglePassword}>
                                {passwordShown ? (
                                    <AiOutlineEyeInvisible />
                                ) : (
                                    <AiOutlineEye />
                                )}
                            </button>
                        </div>
                        <div className="text-danger">
                            {errors.password ? errors.password : null}
                        </div>
                    </Div>
                    <Div>
                        <input
                            type={passwordShown ? 'text' : 'password'}
                            placeholder="Confirm password"
                            className=""
                            name="confirmPassword"
                            onChange={handleChange}
                            value={values.confirmPassword}
                        />
                        <div className="text-danger">
                            {errors.confirmPassword
                                ? errors.confirmPassword
                                : null}
                        </div>
                        <button onClick={togglePassword}>
                            {passwordShown ? (
                                <AiOutlineEyeInvisible />
                            ) : (
                                <AiOutlineEye />
                            )}
                        </button>
                    </Div>
                    <Div>
                        <button
                            disabled={isSubmitting ? true : false}
                            type="submit"
                            id="login"
                        >
                            Register
                        </button>
                    </Div>
                </form>
            </Card>
            <NMdiv>
                <p>
                    Already a member? <Link to="/login"> Login </Link>
                </p>
            </NMdiv>
        </LoginWrp>
    );
};

export default RegisterPage;
