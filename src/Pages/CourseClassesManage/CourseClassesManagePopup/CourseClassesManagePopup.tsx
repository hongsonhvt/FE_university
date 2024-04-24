import { Button, Form, Input, Modal, message, DatePicker, Select } from "antd";
import React, { useEffect, useState } from "react";
import { CreateCourseClassDto } from "../../../shared/api/__generated__/data-contracts";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CourseClasses } from "../../../shared/api/__generated__/CourseClasses";
import axios from "axios";
import moment from "moment";

const { Option } = Select;

const CourseClassesManagePopup = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [courses, setCourses] = useState<CreateCourseClassDto[]>([]);
  const [programClasses, setProgramClasses] = useState<CreateCourseClassDto[]>(
    []
  );

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateCourseClassDto>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const courseClassesApi = new CourseClasses();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          createdAt: moment(item.createdAt).format("DD MMM YYYY"),
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format("DD MMM YYYY")
            : "",
          courseIds: item.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching Course:", error);
      message.error("Failed to fetch Course");
    }
  };

  const onSubmit: SubmitHandler<CreateCourseClassDto> = async (
    data: CreateCourseClassDto
  ) => {
    setIsSubmitting(true);
    try {
      await courseClassesApi.create(data);
      message.success("Course class added successfully!");
      onCloseModal();
      refreshPage();
    } catch (error) {
      console.error("Error creating course class:", error);
      message.error("Failed to add course class. Please try again later.");
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
      <Button onClick={() => setModal2Open(true)}>Add Course Class</Button>
      <Modal
        title="Add Course Class"
        centered
        visible={modal2Open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item name="name" label="Course Class Name">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Class Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Course Class Code">
            <Controller
              name="code"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Class Code" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item
            name="startAt"
            label="Start Date"
            // rules={[{ required: true, message: "Please select start date!" }]}
          >
            <Controller
              name="startAt"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD"
                  placeholder="Start Date"
                />
              )}
            />
          </Form.Item>
          <Form.Item
            name="endAt"
            label="End Date"
            // rules={[{ required: true, message: "Please select start date!" }]}
          >
            <Controller
              name="endAt"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD"
                  placeholder="End Date"
                />
              )}
            />
          </Form.Item>
          <Form.Item
            name="sessionCount"
            label="Sessions Total"
            rules={
              [
                // { required: true, message: "Please input Sessions Total!" },
              ]
            }
          >
            <Controller
              name="sessionCount"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input
                  placeholder="Sessions Total"
                  {...(x.field as any)}
                  type="number"
                  max={50}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            name="isoSlots"
            label="Iso Slots"
            rules={
              [
                // { required: true, message: "Please input Sessions Total!" },
              ]
            }
          >
            <Controller
              name="startAt"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <DatePicker
                  placeholder="Start Date"
                  {...(x.field as any)}
                  // format={"PxDTyHzM"}
                />
              )}
            />
            <Controller
              name="endAt"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <DatePicker
                  placeholder="End Date"
                  {...(x.field as any)}
                  // format={"PxDTyHzM"}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            name="courseId"
            label="Course"
            // rules={[{ required: true, message: "Please select a program!" }]}
          >
            <Controller
              name="courseId"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select a course"
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                >
                  {courses.map((course) => {
                    return (
                      <Option
                        key={
                          course.courseId && course.courseId.length > 0
                            ? course.courseId[0]
                            : course.code
                        }
                        value={course?.courseId}
                      >
                        {course.name}
                      </Option>
                    );
                  })}
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

export default CourseClassesManagePopup;
