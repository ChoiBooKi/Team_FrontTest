import { useState } from "react";
import PositionFormat from "./PositionFormat";
import { Button, Modal } from "antd";
import { SwapOutlined, InfoOutlined } from "@ant-design/icons";
import { getPlayerImage, getClubImage } from "./../utils/formatters";
export default function PopoverContent(props) {
  const {
    id,
    position,
    country,
    name,
    dateOfBirthTimestamp,
    team,
    preferredFoot,
    shirtNumber,
    height,
    proposedMarketValue
  } = props.data;
  const { visible, pickPlayer } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const age = () => {
    let birthday = new Date(dateOfBirthTimestamp * 1000);
    let currentDatet = new Date();
    return currentDatet.getFullYear() - birthday.getFullYear();
  };

  const title = (
    <div className="modalTitle">
      <img src={getPlayerImage(id)} alt={name} />
      <p>{name}</p>
    </div>
  );

  const modalContent = (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="itemsWrapper">
        <img src={getClubImage(team.id)} alt={team.name} />
        <p>{team.name}</p>
      </div>
      <div className="modalItems">
        <div className="modalItemWrapper">
          <b>Age:</b> {age()}
        </div>
        <div className="modalItemWrapper">
          <b>Nationality:</b> {country.name}
        </div>
        <div className="modalItemWrapper">
          <b>Prefered foot:</b> {preferredFoot}
        </div>
        <div className="modalItemWrapper">
          <b>Shirt number:</b> {shirtNumber}
        </div>
        <div className="modalItemWrapper">
          <b>Heigh:</b> {height}
        </div>
        <div className="modalItemWrapper">
          <b>Market value:</b> {Number(proposedMarketValue).toLocaleString()}
          &euro;
        </div>
      </div>
    </Modal>
  );

  return (
    <div className={"popoverContent"}>
      {/* <div className="playerCardAction substituteAction">
        <SwapOutlined onClick={() => pickPlayer(id)} />
      </div> */}
      <div className="playerCardAction detailsAction" onClick={showModal}>
        <InfoOutlined />
      </div>
      {modalContent}
    </div>
  );
}
