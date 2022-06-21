import styled from 'styled-components';

const CtUsers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .card {
        text-align: center;
    }

    img {
        display: inline-block;
        max-width: 100%;
    }

    .btn_div {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }

    .delIcon {
        color: red;
        cursor: pointer;
    }

    .editIcon {
        color: blue;
        cursor: pointer;
    }
`;

export default CtUsers;
