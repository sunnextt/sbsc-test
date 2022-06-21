import { Modal, Col, Row, Input } from 'antd';
import React from 'react';
import { PryButton } from './button';

const EditModal = ({
    visible,
    onOk,
    onCancel,
    data,
    handleSave,
    handleChange,
    error
}) => {
    return (
        <Modal visible={visible} onOk={onOk} onCancel={onCancel} footer={null}>
            <div style={{ textAlign: 'center' }}>
                <form id="login-form" onSubmit={handleSave}>
                    <div>
                        <h4>Edit User</h4>
                    </div>
                    <div
                        style={{ textAlign: 'center' }}
                        className="text-danger"
                    >
                        {error && error}
                    </div>
                    <Row gutter={[24, 24]}>
                        <Col span="24">
                            <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                defaultValue={data.email}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col span="12">
                            <Input
                                type="text"
                                placeholder="First name"
                                name="first_name"
                                defaultValue={data.first_name}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col span="12">
                            <Input
                                type="text"
                                placeholder="Last name"
                                name="last_name"
                                defaultValue={data.last_name}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col span="24">
                            <PryButton
                                style={{ width: '100%' }}
                                type="primary"
                                id="login"
                            >
                                save
                            </PryButton>
                        </Col>
                    </Row>
                </form>
            </div>
        </Modal>
    );
};

export default EditModal;
