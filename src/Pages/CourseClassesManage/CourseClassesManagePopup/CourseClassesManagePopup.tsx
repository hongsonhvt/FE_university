import { Button, DatePicker, Form, Input, Modal, message } from "antd";
import React, { useState } from "react";
import { CreateCourseClassDto } from "../../../shared/api/__generated__/data-contracts";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CourseClasses } from "../../../shared/api/__generated__/CourseClasses";

const CourseClassesManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateCourseClassDto>();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const courseClassesApi = new CourseClasses();

  const onSubmit: SubmitHandler<CreateCourseClassDto> = async (
    data: CreateCourseClassDto
  ) => {
    setIsSubmitting(true);
    try {
      await courseClassesApi.create(data);
      message.success("Program added successfully!");
      onCloseModal();
    } catch (error) {
      console.error("Error creating program:", error);
      message.error("Failed to add program. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
        title="Add Course Classes"
        centered
        visible={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item
            name="name"
            label="Course Classes Name"
            rules={[
              { required: true, message: "Please input Course Classes name!" },
            ]}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input
                  placeholder="Course Classes Name"
                  {...(x.field as any)}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            name="code"
            label="Course Classes Code"
            rules={[
              { required: true, message: "Please input Course Classes code!" },
            ]}
          >
            <Controller
              name="code"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input
                  placeholder="Course Classes Code"
                  {...(x.field as any)}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            name="startAt"
            label="Start Date"
            rules={[{ required: true, message: "Please select start date!" }]}
          >
            <Controller
              name="startAt"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Start Date" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item
            name="sessionCount"
            label="Sessions Total"
            rules={[
              { required: true, message: "Please input Sessions Total !" },
            ]}
          >
            <Controller
              name="sessionCount"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Sessions Total" {...(x.field as any)} />
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
