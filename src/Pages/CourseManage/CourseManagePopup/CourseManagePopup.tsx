import { Button, Form, Input, Modal, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { CreateCourseDto, FindByConditionOutput } from "../../../shared/api/__generated__/data-contracts";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Courses } from "../../../shared/api/__generated__/Courses";
import axios from "axios";
import moment from "moment";

const { Option } = Select;

const CourseManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [programs, setPrograms] = useState<FindByConditionOutput[]>([]);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateCourseDto>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const coursessApi = new Courses();

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await axios.get("http://localhost:3000/programs");
      setPrograms(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          createdAt: moment(item.createdAt).format("DD MMM YYYY"), // Format createdAt field
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format("DD MMM YYYY")
            : "", // Format deletedAt field
        }))
      );
    } catch (error) {
      console.error("Error fetching programs:", error);
      message.error("Failed to fetch programs");
    }
  };

  const onSubmit: SubmitHandler<CreateCourseDto> = async (
    data: CreateCourseDto
  ) => {
    setIsSubmitting(true);
    try {
      await coursessApi.create(data);
      message.success("Course added successfully!");
      onCloseModal();
    } catch (error) {
      console.error("Error creating course:", error);
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
            // rules={[{ required: true, message: "Please input Courses name!" }]}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item
            name="code"
            label="Courses Code"
            // rules={[{ required: true, message: "Please input Courses code!" }]}
          >
            <Controller
              name="code"
              control={control}
              // rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Code" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item
            name="programIds"
            label="Program"
            rules={[{ required: true, message: "Please select a program!" }]}
          >
            <Controller
              name="programIds"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select a program"
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                >
                  {programs.map((program) => (
                    <Option key={program.programIds} value={program.id}>
                      {program.name}
                    </Option>
                  ))}
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

export default CourseManagePopup;
