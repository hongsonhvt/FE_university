import { Button, DatePicker, Form, Input, Select } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useMemo } from 'react';
import { CourseClasses } from '../../../shared/api/__generated__/CourseClasses';
import {
  CourseClassListItemDto,
  TeacherSimpleDto,
} from '../../../shared/api/__generated__/data-contracts';

type CourseClassesManagePanelParams = {
  data: CourseClassListItemDto | null;
  teachers: TeacherSimpleDto[];
  onFinish: () => void;
};

type FormType = Omit<CourseClassListItemDto, 'startAt' | 'endAt'> & {
  startAt: Dayjs;
  endAt: Dayjs;
  teacherId: string;
};

const CourseClassesManagePanel = ({
  data,
  teachers,
  onFinish,
}: CourseClassesManagePanelParams) => {
  const [form] = Form.useForm<FormType>();

  const teacherOptions = useMemo(() => {
    return teachers.map((teacher) => ({
      key: teacher.id,
      value: teacher.id,
      label: `${teacher.profile.firstName} ${teacher.profile.lastName} (${teacher.teacherId})`,
      data: teacher,
    }));
  }, [teachers]);

  const handleFinish = (values: FormType) => {
    if (!data) {
      return;
    }
    new CourseClasses()
      .updateCourseClass(data.id, {
        ...values,
        startAt: values.startAt.toISOString(),
        endAt: values.endAt.toISOString(),
      })
      .then(() => {
        onFinish();
      });
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      form.setFieldsValue({
        ...data,
        startAt: dayjs(data.startAt),
        endAt: dayjs(data.startAt),
        teacherId: data.teacher?.id,
      });
    } else {
      form.resetFields();
    }
  }, [data]);

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item name="code" label="Code" rules={[{ required: true }]}>
        <Input placeholder="Subject Name" />
      </Form.Item>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="Class name" />
      </Form.Item>
      <Form.Item name="teacherId" label="Teacher" rules={[{ required: true }]}>
        <Select
          placeholder="Select a teacher"
          allowClear
          style={{ width: '100%' }}
          options={teacherOptions}
        ></Select>
      </Form.Item>
      <Form.Item name="startAt" label="Start Date" rules={[{ required: true }]}>
        <DatePicker
          style={{ width: '100%' }}
          format={{ format: 'DD-MM-YYYY' }}
          inputReadOnly
          allowClear={false}
          open={false}
        />
      </Form.Item>
      <Form.Item name="endAt" label="End Date">
        <DatePicker
          style={{ width: '100%' }}
          format={{ format: 'DD-MM-YYYY' }}
        />
      </Form.Item>
      <Form.Item
        name="sessionCount"
        label="Sessions Total"
        rules={[{ required: true }]}
      >
        <Input placeholder="Number of Session" type="number" readOnly />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CourseClassesManagePanel;
