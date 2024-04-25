import { Button, Form, Input, Modal, Select, message } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Courses } from '../../../shared/api/__generated__/Courses';
import { Programs } from '../../../shared/api/__generated__/Programs';
import { CreateCourseDto } from '../../../shared/api/__generated__/data-contracts';

const { Option } = Select;

const CourseManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [programs, setPrograms] = useState<CreateCourseDto[]>([]);

  const { handleSubmit, reset, control } = useForm<CreateCourseDto>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const coursesApi = new Courses();

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await new Programs().findProgramByCondition({});
      setPrograms(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          createdAt: moment(item.createdAt).format('DD MMM YYYY'),
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format('DD MMM YYYY')
            : '',
          programIds: item.id,
        })),
      );
    } catch (error) {
      console.error('Error fetching programs:', error);
      message.error('Failed to fetch programs');
    }
  };

  const onSubmit: SubmitHandler<CreateCourseDto> = async (
    data: CreateCourseDto,
  ) => {
    setIsSubmitting(true);
    try {
      await coursesApi.createCourse(data);
      message.success('Course added successfully!');
      onCloseModal();
      refreshPage();
    } catch (error) {
      console.error('Error creating course:', error);
      message.error('Failed to add course. Please try again later.');
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

  return (
    <div>
      <Button onClick={() => setModal2Open(true)}>Add Courses</Button>
      <Modal
        title="Add Courses"
        centered
        open={modal2Open}
        onCancel={onClose}
        footer={null}
        destroyOnClose
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item name="name" label="Courses Name">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Courses Code">
            <Controller
              name="code"
              control={control}
              render={(x) => (
                <Input placeholder="Course Code" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item
            name="programIds"
            label="Program"
            // rules={[{ required: true, message: "Please select a program!" }]}
          >
            <Controller
              name="programIds"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select a program"
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                >
                  {programs.map((program) => {
                    return (
                      <Option
                        key={
                          program.programIds && program.programIds.length > 0
                            ? program.programIds[0]
                            : program.code
                        }
                        value={program?.programIds}
                      >
                        {program.name}
                      </Option>
                    );
                  })}
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

export default CourseManagePopup;
