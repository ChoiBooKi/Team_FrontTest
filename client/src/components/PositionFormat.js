import React from "react";

export default function PositionFormat(props) {
  const { position } = props;

  const getFullPosition = () => {
    switch (position) {
      case "F": {
        return "Forward";
      }
      case "M": {
        return "Midfield";
      }
      case "D": {
        return "Defense";
      }
      case "G": {
        return "Goalkeeper";
      }
      default: {
        return "";
      }
    }
  };
  return <span>{getFullPosition()}</span>;
}
