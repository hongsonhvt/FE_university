import { Button, Form, Input, Modal, message } from "antd";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreateManagementClassDto } from "../../../shared/api/__generated__/data-contracts";
import { ManagementClasses } from "../../../shared/api/__generated__/ManagementClasses";

const ClassManagePopUp = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateManagementClassDto>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const manageClassesAPI = new ManagementClasses();

  const onSubmit: SubmitHandler<CreateManagementClassDto> = async (
    data: CreateManagementClassDto
  ) => {
    setIsSubmitting(true);
    try {
      await manageClassesAPI.create(data);
      console.log(data);

      message.success("Class added successfully!");
      onCloseModal();
      refreshPage();
    } catch (error) {
      console.error("Error creating Class:", error);
      message.error("Failed to add Class. Please try again later.");
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
        title="Add Management Classes"
        centered
        visible={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item name="name" label="Management Classes Name">
            <Controller
              name="name"
              control={control}
              // rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Management Classes Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Management Classes Code">
            <Controller
              name="code"
              control={control}
              // rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Management Classes Code" {...(x.field as any)} />
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

export default ClassManagePopUp;
