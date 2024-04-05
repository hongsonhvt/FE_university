import { Row } from "antd";
import React from "react";
import TextItem from "../../Components/Components/text-item/TextItem";
import CustomTooltip from "../../Components/Components/tooltip/CustomTooltip";

const Course = () => {
  return (
    <div>
      <div>
        <Row>
          <TextItem label="Course Name">
            <CustomTooltip rows={1}>dfsdfsdafsadfsda</CustomTooltip>
          </TextItem>
          <TextItem label="Mã sinh viên">fsdfsdfa</TextItem>

          <TextItem label="Ngày sinh">sdfsd</TextItem>
          <TextItem label="Giới tính">fsdfsdfa</TextItem>

          <TextItem label="Quê quán">sdfsd</TextItem>
          <TextItem label="Địa chỉ hiện tại">fsdfsdfa</TextItem>
        </Row>
      </div>
    </div>
  );
};

export default Course;
