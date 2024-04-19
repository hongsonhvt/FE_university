import { Button, Form, Input, Modal, message } from "antd";
import React, { useState } from "react";
import { CreateCourseDto } from "../../../shared/api/__generated__/data-contracts";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Courses } from "../../../shared/api/__generated__/Courses";

const CourseManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCourseDto>();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const coursessApi = new Courses();

  const onSubmit: SubmitHandler<CreateCourseDto> = async (
    data: CreateCourseDto
  ) => {
    setIsSubmitting(true);
    try {
      await coursessApi.create(data);
      message.success("Program added successfully!");
      onCloseModal();
    } catch (error) {
      console.error("Error creating program:", error);
      message.error("Failed to add course. Please try again later.");
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
      <Button onClick={() => setModal2Open(true)}>Add Courses</Button>
      <Modal
        title="Add Courses"
        centered
        visible={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item
            name="name"
            label="Courses Name"
            rules={[{ required: true, message: "Please input Courses name!" }]}
          >
            <Input placeholder="Courses Name" />
          </Form.Item>
          <Form.Item
            name="code"
            label="Courses Code"
            rules={[{ required: true, message: "Please input Courses code!" }]}
          >
            <Input placeholder="Courses Code" />
          </Form.Item>
          <Form.Item
            name="programIds"
            label="Program Id"
            rules={[{ required: true, message: "Please input Program Id!" }]}
          >
            <Input placeholder="Courses Code" />
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
