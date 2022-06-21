import React, { useEffect, useState } from 'react';
import { getUsers } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import CtUsers from './styled';
import { Card, Row, Col } from 'antd';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import userService from '../../services/userService';
import EditModal from '../../components/modal/modal';

const Users = () => {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [page, setPage] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        users.length && users.map((user) => setData(user));
    }, [users]);

    const [user, setUser] = useState({
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name
    });

    const fetch = async () => {
        dispatch(getUsers({ page }));
    };

    React.useEffect(() => {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Modal function start here

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onDelete = (id) => {
        userService.deleteUser({ id });
        fetch();
    };

    // Edit function logic
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const { email, first_name, last_name } = user;
    const { id } = data;

    const handleSave = (e) => {
        e.preventDefault();
        userService
            .updateUser({ id, email, first_name, last_name })
            .then((res) => {
                if (res.status === 200) {
                    fetch();
                    handleOk();
                }
            })
            .catch((error) => {
                console.log(error);
                setError('something went wrong');
            });
    };

    return (
        <>
            <CtUsers className="flex">
                <Row gutter={[16, 16]}>
                    {users.length &&
                        users.map((user) => {
                            return (
                                <Col xs={24} sm={8} md={4} key={user.id}>
                                    <Card>
                                        <div className="card" key={user.id}>
                                            <p>
                                                <strong>
                                                    {user.first_name +
                                                        ' ' +
                                                        user.last_name}
                                                </strong>
                                            </p>
                                            <p>{user.email}</p>
                                            <img
                                                key={user.avatar}
                                                src={user.avatar}
                                                alt=""
                                            />
                                        </div>
                                        <div className="btn_div">
                                            <p>
                                                <FaTimes
                                                    onClick={() =>
                                                        onDelete(user.id)
                                                    }
                                                    className="delIcon"
                                                />
                                            </p>
                                            <p>
                                                <FaPencilAlt
                                                    onClick={showModal}
                                                    className="editIcon"
                                                />
                                            </p>
                                        </div>
                                        <EditModal
                                            visible={isModalVisible}
                                            onOk={handleOk}
                                            onCancel={handleCancel}
                                            data={user}
                                            handleSave={handleSave}
                                            handleChange={handleChange}
                                            error={error}
                                        />
                                    </Card>
                                </Col>
                            );
                        })}
                </Row>
            </CtUsers>
        </>
    );
};

export default Users;
