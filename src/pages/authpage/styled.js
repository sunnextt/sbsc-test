import styled from 'styled-components';

const LoginWrp = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
        position: absolute;
        right: 0;
        top: 17px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        outline: none;
        height: 60px;
        line-height: 60px;
        border-radius: 4px;
    }

    input[type='password'],
    input[type='email'] {
        width: 100%;
        padding: 0 0 0 10px;
        margin: 0;
        color: #8a8b8e;
        border: 1px solid #c2c0ca;
        font-style: normal;
        font-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
        display: inline-block;
        background: none;
    }
    input[type='password']:focus,
    input[type='email']:focus {
        border-color: #3ca9e2;
    }
    input[type='password']:focus:invalid,
    input[type='email']:focus:invalid {
        color: #cc1e2b;
        border-color: #cc1e2b;
    }
    input[type='password']:valid ~ .validation,
    input[type='email']:valid ~ .validation {
        display: block;
        border-color: #0c0;
    }
    input[type='password']:valid ~ .validation span,
    input[type='email']:valid ~ .validation span {
        background: #0c0;
        position: absolute;
        border-radius: 6px;
    }
    input[type='password']:valid ~ .validation span:first-child,
    input[type='email']:valid ~ .validation span:first-child {
        top: 30px;
        left: 14px;
        width: 20px;
        height: 3px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    input[type='text']:valid ~ .validation span:last-child,
    input[type='email']:valid ~ .validation span:last-child {
        top: 35px;
        left: 8px;
        width: 11px;
        height: 3px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .validation {
        display: none;
        position: absolute;
        content: ' ';
        height: 60px;
        width: 30px;
        right: 15px;
        top: 0px;
    }

    button[type='submit'] {
        width: 100%;
        border: none;
        display: block;
        background-color: #3ca9e2;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        font-size: 18px;
        position: relative;
    }
    button[type='submit']:hover {
        background-color: #329dd5;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

`;

export const Div = styled.div`
    position: relative;
    padding-bottom: 1rem;
`;

export const NMdiv = styled.div`

`;

export default LoginWrp;
