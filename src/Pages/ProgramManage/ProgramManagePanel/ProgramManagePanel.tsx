import { Button, Drawer, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Programs } from '../../../shared/api/__generated__/Programs';
import styles from './ProgramManagePanel.module.scss';

type FormData = {
  name: string;
  code: string;
};

interface IProgram {
  selected?: any;
}

const ProgramManagePanel = ({ selected }: IProgram) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { handleSubmit, control, setValue } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showDrawer = (programId: string | undefined) => {
    if (programId) {
      setIsDrawerVisible(true);
    }
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const onFinish = async (values: FormData) => {
    try {
      if (!selected) return;
      setIsSubmitting(true);
      await new Programs().updateProgram(selected.id, values);
      message.success('Course updated successfully');
      onCloseDrawer();
      refreshPage();
    } catch (error) {
      console.error('Error updating course:', error);
      message.error('Failed to update course. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (typeof showDrawer === 'function' && selected) {
      setValue('name', selected.name);
      setValue('code', selected.code);
    }
  }, [showDrawer, selected, setValue]);
  console.log(selected);

  return (
    <div className={styles.studentManagePanel}>
      <Button type="primary" onClick={() => showDrawer(selected)}>
        Edit Subject
      </Button>
      <Drawer
        title="Edit Subject Information"
        width={720}
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
          <Form.Item
            name="name"
            label="Program Name"
            // rules={[{ required: true, message: "Please input Program name!" }]}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input placeholder="Program Name" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item
            name="code"
            label="Program Code"
            // rules={[{ required: true, message: "Please input Program Code" }]}
          >
            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <Input placeholder="Program Code" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default ProgramManagePanel;
