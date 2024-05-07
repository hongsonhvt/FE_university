import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  TimePicker,
  message,
} from 'antd';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CourseClasses } from '../../../shared/api/__generated__/CourseClasses';
import { Courses } from '../../../shared/api/__generated__/Courses';
import {
  CourseListItemDto,
  CreateCourseClassDto,
} from '../../../shared/api/__generated__/data-contracts';

type FormType = Omit<CreateCourseClassDto, 'isoSlots'> & {
  isoSlots: { range: string; dayOfWeek: number }[];
};

const dayOfWeekOptions = [
  { value: '1', label: 'Monday' },
  { value: '2', label: 'Tuesday' },
  { value: '3', label: 'Wednesday' },
  { value: '4', label: 'Thursday' },
  { value: '5', label: 'Friday' },
  { value: '6', label: 'Saturday' },
  { value: '7', label: 'Sunday' },
];

const CourseClassesManagePopup = () => {
  const { handleSubmit, reset, control } = useForm<FormType>();
  const [modal2Open, setModal2Open] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courses, setCourses] = useState<CourseListItemDto[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await new Courses().findCourseByCondition({});
      setCourses(response.data.data);
    } catch (error) {
      console.error('Error fetching Course:', error);
      message.error('Failed to fetch Course');
    }
  };

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    setIsSubmitting(true);
    try {
      const formData: CreateCourseClassDto = {
        ...data,
        isoSlots: data.isoSlots.map(({ dayOfWeek, range }) => {
          const startAt = new Date(range[0]);
          const endAt = new Date(range[1]);

          return {
            startAt: `P${dayOfWeek}DT${startAt.getHours()}H${startAt.getMinutes()}M`,
            endAt: `P${dayOfWeek}DT${endAt.getHours()}H${endAt.getMinutes()}M`,
          };
        }),
      };
      await new CourseClasses().createCourseClass(formData);
      message.success('Course class added successfully!');
      onCloseModal();
      refreshPage();
    } catch (error) {
      console.error('Error creating course class:', error);
      message.error('Failed to add course class. Please try again later.');
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
      <Button onClick={() => setModal2Open(true)}>Add Course Class</Button>
      <Modal
        title="Add Course Class"
        centered
        open={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item name="name" label="Course Class Name">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Class Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Course Class Code">
            <Controller
              name="code"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Class Code" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="startAt" label="Start Date">
            <Controller
              name="startAt"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  style={{ width: '100%' }}
                  format="YYYY-MM-DD"
                  placeholder="Start Date"
                />
              )}
            />
          </Form.Item>
          <Form.Item name="endAt" label="End Date">
            <Controller
              name="endAt"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  style={{ width: '100%' }}
                  format="YYYY-MM-DD"
                  placeholder="End Date"
                />
              )}
            />
          </Form.Item>
          <Form.Item name="sessionCount" label="Sessions Total">
            <Controller
              name="sessionCount"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <InputNumber
                  placeholder="Sessions Total"
                  {...(x.field as any)}
                  type="number"
                  max={50}
                />
              )}
            />
          </Form.Item>
          <Form.Item label="Slots">
            <Space>
              <Form.Item name="isoSlots.0.dayOfWeek" noStyle>
                <Controller
                  name="isoSlots.0.dayOfWeek"
                  control={control}
                  rules={{ required: true }}
                  render={(x) => (
                    <Select
                      options={dayOfWeekOptions}
                      {...(x.field as any)}
                      placeholder="Day of week"
                    />
                  )}
                />
              </Form.Item>
              <Form.Item name="isoSlots.0.range" noStyle>
                <Controller
                  name="isoSlots.0.range"
                  control={control}
                  rules={{ required: true }}
                  render={(x) => (
                    <TimePicker.RangePicker
                      placeholder="End time"
                      {...(x.field as any)}
                    />
                  )}
                />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item name="courseId" label="Course">
            <Controller
              name="courseId"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select a course"
                  allowClear
                  style={{ width: '100%' }}
                >
                  {courses.map((course) => {
                    return (
                      <Select.Option key={course.id} value={course.id}>
                        {course.name}
                      </Select.Option>
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

export default CourseClassesManagePopup;
