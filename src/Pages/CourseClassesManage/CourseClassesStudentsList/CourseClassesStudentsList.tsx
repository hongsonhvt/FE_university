import {
  Button,
  Drawer,
  Flex,
  Form,
  InputNumber,
  Select,
  Table,
  TableProps,
  notification,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { CourseClasses } from '../../../shared/api/__generated__/CourseClasses';
import { Students } from '../../../shared/api/__generated__/Students';
import {
  CourseClassListItemDto,
  StudentScoreListItemDto,
  StudentSimpleDto,
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
  const [isOpenPanel, setIsOpenPanel] = useState(false);
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

  if (!courseClass) {
    return <></>;
  }

  return (
    <Form form={form} onFinish={handleFinish}>
      <Table columns={columns} dataSource={data} bordered />
      <FormItem>
        <Flex justify="end" gap={8}>
          <Button type="primary" onClick={() => setIsOpenPanel(true)}>
            Add/remove
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Flex>
      </FormItem>
      <Drawer
        title="Students list"
        width={720}
        onClose={() => setIsOpenPanel(false)}
        open={isOpenPanel}
        styles={{ body: { paddingBottom: 80 } }}
      >
        <CourseClassesAddStudents studentsInClass={data} id={courseClass.id} />
      </Drawer>
      {contextHolder}
    </Form>
  );
};

type CourseClassesAddStudentsParams = {
  id: string;
  studentsInClass: StudentSimpleDto[];
};

const CourseClassesAddStudents = ({
  id,
  studentsInClass,
}: CourseClassesAddStudentsParams) => {
  const [form] = Form.useForm<FormType>();
  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState<
    (StudentSimpleDto & { label: string; value: string })[]
  >([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentStudentsInClass, setCurrentStudentsInClass] = useState<
    (StudentSimpleDto & { label: string; value: string })[]
  >([]);

  const columns: TableProps<
    StudentSimpleDto & { label: string; value: string }
  >['columns'] = [
    {
      title: 'Name',
      render: (_, record) =>
        `${record.profile.firstName} ${record.profile.lastName}`,
    },
    {
      title: 'Student ID',
      dataIndex: 'studentId',
    },
  ];

  const handleFinish = (values: FormType) => {
    if (!currentStudentsInClass) {
      return;
    }

    // new CourseClasses()
    //   .updateCourseClassStudentsList(studentsInClass.id, {
    //     data: Object.values(values),
    //   })
    //   .then(() => {
    //     api.success({ message: 'Updated' });
    //     new CourseClasses()
    //       .getCourseClassScores(studentsInClass.id)
    //       .then((res) => {
    //         setData(res.data.data);
    //         form.setFieldsValue(res.data.data);
    //       });
    //   })
    //   .catch((e: AxiosError<UpdateCourseClassScoresError>) => {
    //     api.error({ message: e.response?.data?.message ?? e.message });
    //   });
  };

  const remove = (id: string) => {
    setData(data.filter((x) => x.id !== id));
  };

  const add = () => {
    currentStudentsInClass.push(
      ...data.filter((s) => !!selectedIds.find((sic) => sic === s.id)),
    );

    setCurrentStudentsInClass([...currentStudentsInClass]);
  };

  useEffect(() => {
    setCurrentStudentsInClass(
      studentsInClass.map((s) => ({
        ...s,
        label: `${s.profile.firstName} ${s.profile.lastName} (${s.studentId})`,
        value: s.id,
      })),
    );
  }, [studentsInClass]);

  useEffect(() => {
    new Students().findStudentsByCondition({}).then((res) => {
      const studentNotInClass = res.data.data.filter(
        (s) => !studentsInClass.find((sic) => sic.id === s.id),
      );
      setData(
        studentNotInClass.map((s) => ({
          ...s,
          label: `${s.profile.firstName} ${s.profile.lastName} (${s.studentId})`,
          value: s.id,
        })),
      );
    });
  }, [id, studentsInClass]);

  console.log(currentStudentsInClass);

  return (
    <Form form={form} onFinish={handleFinish}>
      <Table columns={columns} dataSource={currentStudentsInClass} bordered />
      <FormItem>
        <Select
          onChange={setSelectedIds}
          options={data}
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
        />
      </FormItem>
      <FormItem>
        <Flex justify="end" gap={8}>
          <Button type="primary" onClick={add}>
            Add
          </Button>
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
