import { Button, Form, Input, Modal, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreateManagementClassDto } from "../../../shared/api/__generated__/data-contracts";
import { ManagementClasses } from "../../../shared/api/__generated__/ManagementClasses";
import axios from "axios";
import moment from "moment";

const { Option } = Select;

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
  const [programs, setPrograms] = useState<CreateManagementClassDto[]>([]);
  const [academicYears, setAcademicYears] = useState<
    CreateManagementClassDto[]
  >([]);
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
          programId: item.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching programs:", error);
      message.error("Failed to fetch programs");
    }
  };

  useEffect(() => {
    fetchAcademicYears();
  }, []);

  const fetchAcademicYears = async () => {
    try {
      const response = await axios.get("http://localhost:3000/academic-years");
      setAcademicYears(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          createdAt: moment(item.createdAt).format("DD MMM YYYY"),
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format("DD MMM YYYY")
            : "",
          academicYearId: item.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching academic years:", error);
      message.error("Failed to fetch academic years");
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
                <Input
                  placeholder="Management Classes Name"
                  {...(x.field as any)}
                />
              )}
            />
          </Form.Item>
          <Form.Item name="code" label="Management Classes Code">
            <Controller
              name="code"
              control={control}
              // rules={{ required: true }}
              render={(x) => (
                <Input
                  placeholder="Management Classes Code"
                  {...(x.field as any)}
                />
              )}
            />
          </Form.Item>
          <Form.Item name="programId" label="Program">
            <Controller
              name="programId"
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
                          program.programId && program.programId.length > 0
                            ? program.programId[0]
                            : program.code
                        }
                        value={program?.programId}
                      >
                        {program.name}
                      </Option>
                    );
                  })}
                </Select>
              )}
            />
          </Form.Item>
          <Form.Item name="academicYears" label="Academic Years">
            <Controller
              name="academicYearId"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select a program"
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                >
                  {academicYears.map((academicYear) => {
                    return (
                      <Option
                        key={
                          academicYear.academicYearId && academicYear.academicYearId.length > 0
                            ? academicYear.academicYearId[0]
                            : academicYear.code
                        }
                        value={academicYear?.academicYearId}
                      >
                        {academicYear.name}
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

export default ClassManagePopUp;
