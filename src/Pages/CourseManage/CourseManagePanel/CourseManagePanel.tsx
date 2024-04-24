import React, { useEffect, useState } from "react";
import styles from "./CourseManagePanel.module.scss";
import { Button, Drawer, Form, Input, Select, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment";
import {
  FindOneOutput,
  UpdateCourseDto,
} from "../../../shared/api/__generated__/data-contracts";
import { Courses } from "../../../shared/api/__generated__/Courses";

type FormData = {
  name: string;
  code: string;
  programIds: string[];
};

interface ICourse {
  selected?: any;
}

const { Option } = Select;

const CourseManagePanel = ({ selected }: ICourse) => {
  // console.log(selected);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [programs, setPrograms] = useState<UpdateCourseDto[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<FindOneOutput | null>(
    null
  );

  const { handleSubmit, control, setValue } = useForm<FormData>();

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await axios.get("http://localhost:3000/programs");
      const updatedPrograms = response.data.data.map((item: any) => ({
        key: item.id,
        ...item,
        createdAt: moment(item.createdAt).format("DD MMM YYYY"),
        deletedAt: item.deletedAt
          ? moment(item.deletedAt).format("DD MMM YYYY")
          : "",
        programIds: item.id,
      })) as UpdateCourseDto[];
      setPrograms(updatedPrograms);
    } catch (error) {
      console.error("Error fetching programs:", error);
      message.error("Failed to fetch programs");
    }
  };

  const showDrawer = (courseId: string | undefined) => {
    if (courseId) {
      setIsDrawerVisible(true);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const onFinish = async (values: FormData) => {
    console.log(selected);

    try {
      if (!selected) return;
      setIsSubmitting(true);
      await new Courses().update(selected.id, values);
      message.success("Course updated successfully");
      onCloseDrawer();
      refreshPage();
    } catch (error) {
      console.error("Error updating course:", error);
      message.error("Failed to update course. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (typeof showDrawer === "function" && selected) {
      setValue("name", selected.name);
      setValue("code", selected.code);
      setValue("programIds", selected.programIds);
    }
  }, [showDrawer, selected, setValue]);
  // console.log(selectedCourse);

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
          <Form.Item name="name" label="Courses Name">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input placeholder="Course Name" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Courses Code">
            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <Input placeholder="Course Code" {...field} />
              )}
            />
          </Form.Item>
          <Form.Item name="programIds" label="Program">
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
      </Drawer>
    </div>
  );
};

export default CourseManagePanel;
