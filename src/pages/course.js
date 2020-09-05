import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function Course() {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src=""
        />
      }
    >
      <Meta title="Teacher Name" description="Description of Teacher" />
    </Card>
  );
}

export default Course;
