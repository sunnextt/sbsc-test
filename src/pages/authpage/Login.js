import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { login } from '../../redux/Slice';

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
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters')
});

const LoginPage = () => {
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
            password: ''
        },

        validationSchema,
        onSubmit: (values) => {
            const { email, password } = values;
            setErrorMessage('');
            dispatch(login({ email, password }))
                .unwrap()
                .then(() => {
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
                <h2>Login</h2>
                <div style={{ textAlign: 'center' }} className="text-danger">
                    {ErrorMessage && ErrorMessage}
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
                    <div>
                        <p>
                            Note: use email: "eve.holt@reqres.in" and password:
                            "cityslicka" as login details
                        </p>
                    </div>
                    <Div>
                        <button
                            disabled={isSubmitting ? true : false}
                            type="submit"
                            id="login"
                        >
                            Login
                        </button>
                    </Div>
                </form>
            </Card>
            <NMdiv>
                <p>
                    Not a member? <Link to="/register">Register</Link>
                </p>
            </NMdiv>
        </LoginWrp>
    );
};

export default LoginPage;
