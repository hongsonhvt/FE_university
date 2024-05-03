// import { Button, Drawer, Form, Input, Select, message } from 'antd';
// import { useState } from 'react';
// import styles from './StudentManagePanel.module.scss';
// import { useForm } from 'react-hook-form';
// import { Students } from '../../../shared/api/__generated__/Students';

// const { Option } = Select;

// type FormData = {
//   name: string;
//   code: string;
// };

// interface IStudent {
//   selected?: any;
// }

// const StudentManagePanel = ({ selected }: IStudent) => {
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);
//   const { handleSubmit, control, setValue } = useForm<FormData>();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const showDrawer = (studentId: string | undefined) => {
//     if (studentId) {
//       setIsDrawerVisible(true);
//     }
//   };

//   const onCloseDrawer = () => {
//     setIsDrawerVisible(false);
//   };

//   const refreshPage = () => {
//     window.location.reload();
//   };
//   return (
//     <div className={styles.studentManagePanel}>
//       <Button type="primary" onClick={showDrawer}>
//         Edit Student
//       </Button>
//       <Drawer
//         title="Edit Student Information"
//         width={720}
//         onClose={onCloseDrawer}
//         open={isDrawerVisible}
//         styles={{ body: { paddingBottom: 80 } }}
//       >
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item
//             name="id"
//             label="ID"
//             rules={[{ required: true, message: 'Please input student ID!' }]}
//           >
//             <Input placeholder="Student ID" />
//           </Form.Item>
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: 'Please input student name!' }]}
//           >
//             <Input placeholder="Student Name" />
//           </Form.Item>
//           <Form.Item
//             name="gender"
//             label="Gender"
//             rules={[
//               { required: true, message: 'Please select student gender!' },
//             ]}
//           >
//             <Select placeholder="Select gender">
//               {genderOptions.map((option, index) => (
//                 <Option key={index} value={option}>
//                   {option}
//                 </Option>
//               ))}
//             </Select>
//           </Form.Item>
//           <Form.Item
//             name="managementClass"
//             label="Management Class"
//             rules={[
//               { required: true, message: 'Please input management class!' },
//             ]}
//           >
//             <Input placeholder="Management Class" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: 'Please input student email!' }]}
//           >
//             <Input placeholder="Student Email" type="email" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>
//     </div>
//   );
// };

//   const onFinish = async (values: FormData) => {
//     try {
//       if (!selected) return;
//       setIsSubmitting(true);
//       await new Students().updateStudent(selected.id, values);
//       message.success('Course updated successfully');
//       onCloseDrawer();
//       refreshPage();
//     } catch (error) {
//       console.error('Error updating course:', error);
//       message.error('Failed to update course. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const genderOptions = ['Male', 'Female'];

//   return (
//     <div className={styles.studentManagePanel}>
//       <Button type="primary" onClick={showDrawer}>
//         Edit Student
//       </Button>
//       <Drawer
//         title="Edit Student Information"
//         width={720}
//         onClose={onCloseDrawer}
//         open={isDrawerVisible}
//         bodyStyle={{ paddingBottom: 80 }}
//       >
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item
//             name="id"
//             label="ID"
//             rules={[{ required: true, message: 'Please input student ID!' }]}
//           >
//             <Input placeholder="Student ID" />
//           </Form.Item>
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: 'Please input student name!' }]}
//           >
//             <Input placeholder="Student Name" />
//           </Form.Item>
//           <Form.Item
//             name="gender"
//             label="Gender"
//             rules={[
//               { required: true, message: 'Please select student gender!' },
//             ]}
//           >
//             <Select placeholder="Select gender">
//               {genderOptions.map((option, index) => (
//                 <Option key={index} value={option}>
//                   {option}
//                 </Option>
//               ))}
//             </Select>
//           </Form.Item>
//           <Form.Item
//             name="managementClass"
//             label="Management Class"
//             rules={[
//               { required: true, message: 'Please input management class!' },
//             ]}
//           >
//             <Input placeholder="Management Class" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: 'Please input student email!' }]}
//           >
//             <Input placeholder="Student Email" type="email" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>
//     </div>
//   );
// };

// export default StudentManagePanel;
