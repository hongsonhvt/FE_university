import {
  Button,
  DatePicker,
  Drawer,
  Flex,
  Form,
  Input,
  Select,
  Table,
  TableProps,
  notification,
} from 'antd';
import { AxiosError } from 'axios';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { Sessions } from '../../shared/api/__generated__/Sessions';
import {
  ChangeSessionRequestDto,
  CreateChangeRequestData,
  CreateChangeSessionRequestDto,
  SessionDto,
  TeacherSimpleDto,
} from '../../shared/api/__generated__/data-contracts';

type CalendarManagePanelParams = {
  sessionId: string | null;
  teachers: TeacherSimpleDto[];
};

type FormType = CreateChangeSessionRequestDto;

const CalendarManagePanel = ({
  sessionId,
  teachers,
}: CalendarManagePanelParams) => {
  const [isOpenListPanel, setIsOpenListPanel] = useState(false);
  const [isOpenCreatePanel, setIsOpenCreatePanel] = useState(false);
  const [session, setSession] = useState<SessionDto | null>(null);

  useEffect(() => {
    if (sessionId) {
      new Sessions().findOneSession(sessionId).then((res) => {
        setSession(res.data.data);
      });
    } else {
      setSession(null);
    }
  }, [sessionId]);

  if (!session) {
    return <></>;
  }

  const handleUpdate = (res: ChangeSessionRequestDto) => {
    setIsOpenCreatePanel(false);
    setSession({
      ...session,
      changeSessionRequests: [...session.changeSessionRequests, res],
    });
  };

  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Code">
          <Input value={session.courseClass.code} readOnly />
        </Form.Item>
        <Form.Item label="Name">
          <Input value={session.courseClass.name} readOnly />
        </Form.Item>
        <Form.Item label="Teacher">
          <Input
            value={`${session.courseClass.teacher.profile.firstName} ${session.courseClass.teacher.profile.lastName}`}
            readOnly
          />
        </Form.Item>
        {session.substituteTeacher && (
          <Form.Item label="Substitute teacher">
            <Input
              value={`${session.substituteTeacher.profile.firstName} ${session.substituteTeacher.profile.lastName}`}
              readOnly
            />
          </Form.Item>
        )}
        <Form.Item label="Start at">
          <Input value={dayjs(session.startAt).toString()} readOnly />
        </Form.Item>
        <Form.Item label="End at">
          <Input value={dayjs(session.endAt).toString()} readOnly />
        </Form.Item>
        <Form.Item>
          <Flex gap={4}>
            <Button type="primary" onClick={() => setIsOpenCreatePanel(true)}>
              Create change request
            </Button>
            <Button type="primary" onClick={() => setIsOpenListPanel(true)}>
              View requests
            </Button>
          </Flex>
        </Form.Item>
      </Form>

      <Drawer
        title="Create change session request"
        onClose={() => setIsOpenCreatePanel(false)}
        open={isOpenCreatePanel}
      >
        <CreateChangeRequestPanel
          session={session}
          teachers={teachers}
          onFinish={handleUpdate}
        />
      </Drawer>

      <Drawer
        title="Create change session request"
        onClose={() => setIsOpenListPanel(false)}
        open={isOpenListPanel}
        size="large"
      >
        <ChangeRequestListPanel list={session.changeSessionRequests} />
      </Drawer>
    </>
  );
};

type CreateChangeRequestParams = {
  session: SessionDto;
  teachers: TeacherSimpleDto[];
  onFinish: (data: ChangeSessionRequestDto) => void;
};

const CreateChangeRequestPanel = ({
  session,
  teachers,
  onFinish,
}: CreateChangeRequestParams) => {
  const [form] = Form.useForm<FormType>();
  const [api, contextHolder] = notification.useNotification();

  const teacherOptions = useMemo(() => {
    return teachers.map((teacher) => ({
      key: teacher.id,
      value: teacher.id,
      label: `${teacher.profile.firstName} ${teacher.profile.lastName} (${teacher.teacherId})`,
      data: teacher,
    }));
  }, [teachers]);

  const handleFinish = (values: FormType) => {
    if (!session) {
      return;
    }
    new Sessions()
      .createChangeRequest(session.id, values)
      .then((res) => {
        api.success({ message: 'Created' });
        form.resetFields();
        onFinish(res.data.data);
      })
      .catch((e: AxiosError<CreateChangeRequestData>) => {
        api.error({ message: e.response?.data?.message ?? e.message });
      });
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="startAt"
          label="Start Date"
          rules={[{ required: true }]}
        >
          <DatePicker
            style={{ width: '100%' }}
            format={{ format: 'DD-MM-YYYY' }}
          />
        </Form.Item>
        <Form.Item name="endAt" label="End Date" rules={[{ required: true }]}>
          <DatePicker
            style={{ width: '100%' }}
            format={{ format: 'DD-MM-YYYY' }}
          />
        </Form.Item>
        <Form.Item name="substituteTeacherId" label="Teacher">
          <Select
            placeholder="Select a teacher"
            allowClear
            style={{ width: '100%' }}
            options={teacherOptions}
          ></Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  );
};

type ChangeRequestsListParams = {
  list: ChangeSessionRequestDto[];
};

const ChangeRequestListPanel = ({ list }: ChangeRequestsListParams) => {
  const columns: TableProps<
    ChangeRequestsListParams['list'][number]
  >['columns'] = [
    {
      title: 'Start time',
      colSpan: 2,
      dataIndex: 'oldStartAt',
      onCell: () => ({ rowSpan: 2 }),
      render: (_, record) =>
        dayjs(record.oldStartAt).format('HH:mm, DD-MM-YYYY'),
    },
    {
      title: 'New start time',
      colSpan: 0,
      dataIndex: 'newStartAt',
      render: (_, record) =>
        dayjs(record.newStartAt).format('HH:mm, DD-MM-YYYY'),
    },
    {
      title: 'End time',
      colSpan: 2,
      dataIndex: 'oldEndAt',
      onCell: () => ({ rowSpan: 2 }),
      render: (_, record) => dayjs(record.oldEndAt).format('HH:mm, DD-MM-YYYY'),
    },
    {
      title: 'New end time',
      colSpan: 0,
      dataIndex: 'newEndAt',
      render: (_, record) => dayjs(record.newEndAt).format('HH:mm, DD-MM-YYYY'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Substitute Teacher',
      dataIndex: 'substituteTeacher',
      render: (_, record) => {
        const subTeacherProfile = record.substituteTeacher?.profile;
        if (subTeacherProfile) {
          return `${subTeacherProfile.firstName} ${subTeacherProfile.lastName}`;
        }
        return '';
      },
    },
  ];

  const data = useMemo(() => {
    return list.map((item, idx) => ({
      key: idx,
      ...item,
    }));
  }, [list]);

  return <Table columns={columns} dataSource={data} bordered />;
};

export default CalendarManagePanel;
