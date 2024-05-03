import { Button, Form, Input, Modal, Select, message } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { Option } from 'antd/es/mentions';
import { Users } from '../../../shared/api/__generated__/Users';
import {
  CreateUserData,
  Role,
} from '../../../shared/api/__generated__/data-contracts';

const TeacherManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const { handleSubmit, reset, control } = useForm<CreateUserData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const teachersApi = new Users();

  const onSubmit: SubmitHandler<CreateUserData> = async (
    data: CreateUserData,
  ) => {
    setIsSubmitting(true);
    try {
      const result: CreateUserData = {
        ...data,
        role: Role.Teacher,
        profile: {
          ...data.profile,
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          address: data.address,
          isMale: data.isMale === 'true',
        },
      };

      if (data.teacherId) {
        result.profile.teacher = {
          teacherId: data.teacherId,
        };
      }

      await teachersApi.createUser(result);
      message.success('Teacher added successfully!');
      onCloseModal();
      refreshPage();
    } catch (error) {
      console.error('Error creating Teacher:', error);
      message.error('Failed to add Teacher. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const refreshPage = () => {
    window.location.reload();
  };

  const onCloseModal = () => {
    reset();
    setModal2Open(false);
  };

  const onClose = () => {
    setModal2Open(false);
  };

  const genderOptions = ['Male', 'Female'];

  return (
    <div>
      <Button onClick={() => setModal2Open(true)}>Add Student</Button>
      <Modal
        title="Add Teacher"
        centered
        open={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item name="email" label="Teacher email">
            <Controller
              name="email"
              control={control}
              render={(x) => (
                <Input placeholder="Teacher email" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="password" label="Teacher password">
            <Controller
              name="password"
              control={control}
              render={(x) => (
                <Input placeholder="Teacher password" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="firstName" label="Teacher First Name">
            <Controller
              name="firstName"
              control={control}
              render={(x) => (
                <Input placeholder="Teacher First Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="middleName" label="Teacher Middle Name">
            <Controller
              name="middleName"
              control={control}
              render={(x) => (
                <Input
                  placeholder="Teacher Middle Name"
                  {...(x.field as any)}
                />
              )}
            />
          </Form.Item>
          <Form.Item name="lastName" label="Teacher Last Name">
            <Controller
              name="lastName"
              control={control}
              render={(x) => (
                <Input placeholder="Teacher Last Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="phoneNumber" label="Teacher Phone Number">
            <Controller
              name="phoneNumber"
              control={control}
              render={(x) => (
                <Input
                  placeholder="Teacher Phone Number"
                  {...(x.field as any)}
                  type="number"
                />
              )}
            />
          </Form.Item>
          <Form.Item
            name="isMale"
            label="Gender"
            rules={[
              { required: true, message: 'Please select Teacher gender!' },
            ]}
          >
            <Select placeholder="Select gender">
              {genderOptions.map((option, idx) => (
                <Option
                  key={option}
                  value={option === 'Male' ? 'true' : 'false'}
                >
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="address" label="Teacher address">
            <Controller
              name="address"
              control={control}
              render={(x) => (
                <Input placeholder="Teacher address" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="teacherId" label="Teacher ID">
            <Controller
              name="teacherId"
              control={control}
              render={(x) => (
                <Input placeholder="Teacher ID" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TeacherManagePopup;
