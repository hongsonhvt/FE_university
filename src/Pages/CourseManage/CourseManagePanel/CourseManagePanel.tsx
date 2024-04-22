import React, { useEffect, useState } from "react";
import styles from "./CourseManagePanel.module.scss";
import { Button, Drawer, Form, Input, Select, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import {
  FindOneOutput,
  UpdateCourseDto,
} from "../../../shared/api/__generated__/data-contracts";
import axios from "axios";
import moment from "moment";

type FormData = {
  name: string;
  code: string;
  programIds: string[];
  courseId: string[];
};

const { Option } = Select;

const CourseManagePanel = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [programs, setPrograms] = useState<UpdateCourseDto[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<FindOneOutput | null>(
    null
  );

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<FormData>();

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
          createdAt: moment(item.createdAt).format("DD MMM YYYY"),
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format("DD MMM YYYY")
            : "",
          programIds: item.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching programs:", error);
      message.error("Failed to fetch programs");
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      // Replace 'selectedCourseId' with the actual ID of the course you want to edit
      const selectedCourseId = "replace_with_actual_course_id";
      const response = await axios.get(
        `http://localhost:3000/courses/${selectedCourseId}`
      );
      setSelectedCourse(response.data.data);
      // Populate form fields with course data
      const { name, code, programIds } = response.data.data;
      setValue("name", name);
      setValue("code", code);
      setValue("programIds", programIds);
    } catch (error) {
      console.error("Error fetching course data:", error);
      message.error("Failed to fetch course data");
    }
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const onFinish = async (values: FormData) => {
    try {
      if (!selectedCourse) return;
      await axios.patch(
        `http://localhost:3000/courses/${selectedCourse.id}`,
        values
      );
      message.success("Course updated successfully");
      onCloseDrawer();
    } catch (error) {
      console.error("Error updating course:", error);
      message.error("Failed to update course. Please try again later.");
    }
  };

  return (
    <div className={styles.studentManagePanel}>
      <Button type="primary" onClick={showDrawer}>
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
          <Form.Item name="name" label="Courses Name">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={(x) => (
                <Input placeholder="Course Name" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Courses Code">
            <Controller
              name="code"
              control={control}
              render={(x) => (
                <Input placeholder="Course Code" {...(x.field as any)} />
              )}
            />
          </Form.Item>
          <Form.Item
            name="programIds"
            label="Program"
            // rules={[{ required: true, message: "Please select a program!" }]}
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
                  {programs.map((program) => {
                    return (
                      <Option
                        key={
                          program.programIds && program.programIds.length > 0
                            ? program.programIds[0]
                            : program.code
                        }
                        value={program?.programIds}
                      >
                        {program.name}
                      </Option>
                    );
                  })}
                </Select>
              )}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default CourseManagePanel;
