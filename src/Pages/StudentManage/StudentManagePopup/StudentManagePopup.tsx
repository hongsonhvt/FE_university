import { Button, Form, Input, Modal, Select, message } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Students } from '../../../shared/api/__generated__/Students';
import { Option } from 'antd/es/mentions';

import {
  CourseClassListItemDto,
  CreateUserData,
  CreateUserDto,
  ManagementClassListItemDto,
  Role,
} from '../../../shared/api/__generated__/data-contracts';
import { Users } from '../../../shared/api/__generated__/Users';
import { CourseClasses } from '../../../shared/api/__generated__/CourseClasses';
import { ManagementClasses } from '../../../shared/api/__generated__/ManagementClasses';

const StudentManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const { handleSubmit, reset, control } = useForm<CreateUserData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const studentsApi = new Users();
  const [manageClasses, setManageClasses] = useState<
    ManagementClassListItemDto[]
  >([]);

  useEffect(() => {
    fetchManageClasses();
  }, []);

  const fetchManageClasses = async () => {
    try {
      const response =
        await new ManagementClasses().findManagementClassByCondition({});
      setManageClasses(response.data.data);
    } catch (error) {
      console.error('Error fetching Management Classes:', error);
      message.error('Failed to fetch Management Classes');
    }
  };

  const onSubmit: SubmitHandler<CreateUserData> = async (
    data: CreateUserData,
  ) => {
    setIsSubmitting(true);
    try {
      const result: CreateUserData = {
        ...data,
        role: Role.Student,
        profile: {
          ...data.profile,
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          address: data.address,
          isMale: data.isMale === 'true',
          student: {
            studentId: data.studentId,
            managementClassId: data.managementClassId,
          },
        },
      };

      if (result.profile && result.profile.teacher) {
        delete result.profile.teacher;
      }

      await studentsApi.createUser(result);
      message.success('Student added successfully!');
      onCloseModal();
      refreshPage();
    } catch (error) {
      console.error('Error creating Student:', error);
      message.error('Failed to add Student. Please try again later.');
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
        title="Add Student"
        centered
        open={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item name="email" label="Student email">
            <Controller
              name="email"
              control={control}
              render={(x) => (
                <Input placeholder="Student email" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="password" label="Student password">
            <Controller
              name="password"
              control={control}
              render={(x) => (
                <Input placeholder="Student password" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="firstName" label="Student First Name">
            <Controller
              name="firstName"
              control={control}
              render={(x) => (
                <Input placeholder="Student First Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="middleName" label="Student Middle Name">
            <Controller
              name="middleName"
              control={control}
              render={(x) => (
                <Input
                  placeholder="Student Middle Name"
                  {...(x.field as any)}
                />
              )}
            />
          </Form.Item>
          <Form.Item name="lastName" label="Student Last Name">
            <Controller
              name="lastName"
              control={control}
              render={(x) => (
                <Input placeholder="Student Last Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="phoneNumber" label="Student Phone Number">
            <Controller
              name="phoneNumber"
              control={control}
              render={(x) => (
                <Input
                  placeholder="Student Phone Number"
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
              { required: true, message: 'Please select student gender!' },
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

          <Form.Item name="address" label="Student address">
            <Controller
              name="address"
              control={control}
              render={(x) => (
                <Input placeholder="Student address" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="studentId" label="Student ID">
            <Controller
              name="studentId"
              control={control}
              render={(x) => (
                <Input placeholder="Student ID" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="managementClassId" label="Management Class">
            <Controller
              name="managementClassId"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select a program"
                  allowClear
                  style={{ width: '100%' }}
                >
                  {manageClasses.map((manageClass) => (
                    <Option key={manageClass.id} value={manageClass.id}>
                      {manageClass.name}
                    </Option>
                  ))}
                </Select>
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

export default StudentManagePopup;
