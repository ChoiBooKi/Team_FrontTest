import React, { useState } from "react";
import { Layout, Row, Col, Checkbox } from "antd";
import FormationSelect from "./FormationSelect";
const { Header } = Layout;
export default function HeaderComponent(props) {
  const { handleFormationChange, enableCustomFormation, setSmooth } = props;

  const [selectEnabled, setSelectEnabled] = useState(true);

  const onChange = (e) => {
    let val = e.target.checked;
    enableCustomFormation(val);
    setSmooth(!val);
    setSelectEnabled(!val);
  };
  return (
    <Header>
      <Row>
        <Col span={4}>
          <FormationSelect
            changeFormation={handleFormationChange}
            selectEnabled={selectEnabled}
          ></FormationSelect>
        </Col>
        {/* <Col span={4} className="customFormationCheck">
          <Checkbox onChange={onChange}>Custom formation</Checkbox>
        </Col> */}
      </Row>
    </Header>
  );
}
