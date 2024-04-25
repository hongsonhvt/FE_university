import { Button, Form, Input, Modal, message } from 'antd';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Programs } from '../../../shared/api/__generated__/Programs';
import { CreateProgramDto } from '../../../shared/api/__generated__/data-contracts';

const ProgramManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const { handleSubmit, reset, control } = useForm<CreateProgramDto>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const programsApi = new Programs();

  const onSubmit: SubmitHandler<CreateProgramDto> = async (
    data: CreateProgramDto,
  ) => {
    setIsSubmitting(true);
    try {
      await programsApi.createProgram(data);
      console.log(data);

      message.success('Program added successfully!');
      onCloseModal();
      refreshPage();
    } catch (error) {
      console.error('Error creating program:', error);
      message.error('Failed to add program. Please try again later.');
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
      <Button onClick={() => setModal2Open(true)}>Add Program</Button>
      <Modal
        title="Add Program"
        centered
        open={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item name="name" label="Program Name">
            <Controller
              name="name"
              control={control}
              // rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Program Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Program Code">
            <Controller
              name="code"
              control={control}
              // rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Program Code" {...(x.field as any)} />
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

export default ProgramManagePopup;
