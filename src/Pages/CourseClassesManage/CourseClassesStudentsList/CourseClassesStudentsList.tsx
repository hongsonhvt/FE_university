import {
  Button,
  Flex,
  Form,
  InputNumber,
  Table,
  TableProps,
  notification,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { CourseClasses } from '../../../shared/api/__generated__/CourseClasses';
import {
  CourseClassListItemDto,
  StudentScoreListItemDto,
  UpdateCourseClassScoreDto,
  UpdateCourseClassScoresError,
} from '../../../shared/api/__generated__/data-contracts';

type CourseClassesStudentsListParams = {
  courseClass: CourseClassListItemDto | null;
};

type FormType = UpdateCourseClassScoreDto['data'];

const CourseClassesStudentsList = ({
  courseClass,
}: CourseClassesStudentsListParams) => {
  const [form] = Form.useForm<FormType>();
  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState<StudentScoreListItemDto[]>([]);

  const columns: TableProps<StudentScoreListItemDto>['columns'] = [
    {
      title: 'Name',
      render: (_, record) =>
        `${record.profile.firstName} ${record.profile.lastName}`,
    },
    {
      title: 'Student ID',
      dataIndex: 'studentId',
    },
    {
      title: 'Score',
      dataIndex: 'oldEndAt',
      render: (_, record, idx) => (
        <div key={idx}>
          <FormItem key={`formItem${idx}`} name={[idx, 'id']} hidden />
          <InputScore key={`score${idx}`} record={record} idx={idx} />
        </div>
      ),
    },
  ];

  const handleFinish = (values: FormType) => {
    if (!courseClass) {
      return;
    }

    new CourseClasses()
      .updateCourseClassScores(courseClass.id, {
        data: Object.values(values),
      })
      .then(() => {
        api.success({ message: 'Updated' });
        new CourseClasses().getCourseClassScores(courseClass.id).then((res) => {
          setData(res.data.data);
          form.setFieldsValue(res.data.data);
        });
      })
      .catch((e: AxiosError<UpdateCourseClassScoresError>) => {
        api.error({ message: e.response?.data?.message ?? e.message });
      });
  };

  useEffect(() => {
    if (courseClass?.id) {
      new CourseClasses().getCourseClassScores(courseClass.id).then((res) => {
        setData(res.data.data);
        form.setFieldsValue(res.data.data);
        console.log(res.data.data);
        console.log(form.getFieldsValue());
      });
    } else {
      setData([]);
    }
  }, [courseClass?.id]);

  return (
    <Form form={form} onFinish={handleFinish}>
      <Table columns={columns} dataSource={data} bordered />
      <FormItem>
        <Flex justify="end">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Flex>
      </FormItem>
      {contextHolder}
    </Form>
  );
};

const InputScore = ({
  record,
  idx,
}: {
  record: StudentScoreListItemDto;
  idx: number;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing || record.score === null) {
    return (
      <FormItem name={[idx, 'score']} style={{ margin: 0 }}>
        <InputNumber min={0} max={10} precision={2} />
      </FormItem>
    );
  }

  return (
    <Flex gap={16} align="center">
      <span>{record.score}</span>
      <Button onClick={() => setIsEditing(true)} size="small">
        Edit
      </Button>
    </Flex>
  );
};

export default CourseClassesStudentsList;
