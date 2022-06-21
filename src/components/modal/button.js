import styled from 'styled-components';

export const PryButton = styled.button`
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

    &:hover {
        background-color: #329dd5;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
`;
