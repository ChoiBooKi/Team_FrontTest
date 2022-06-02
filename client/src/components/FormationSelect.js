import React, { useState } from "react";
import { Select } from "antd";
import { formations as initialFormations } from "./../utils/formations";
const { Option } = Select;

export default function FormationSelect(props) {
  const { changeFormation, selectEnabled } = props;
  const [formations, setFormations] = useState(initialFormations);

  const renderFormations = formations.map((formation, key) => (
    <Option value={key} key={key}>
      {formation.name}
    </Option>
  ));

  return (
    <>
      <Select
        disabled={!selectEnabled}
        defaultValue={0}
        style={{ width: 120 }}
        onChange={changeFormation}
      >
        {renderFormations}
      </Select>
    </>
  );
}
