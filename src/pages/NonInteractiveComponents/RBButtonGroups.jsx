import { useState } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import {
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

const RBButtonGroups = () => {
  const [alignment, setAlignment] = useState("left");

  const buttons = [
    {
      value: "left",
      icon: <FaAlignLeft className="me-2" />,
      text: "Left",
    },
    {
      value: "center",
      icon: <FaAlignCenter className="me-2" />,
      text: "Center",
    },
    {
      value: "right",
      icon: <FaAlignRight className="me-2" />,
      text: "Right",
    },
  ];

  return (
    <div className="p-3">

      <h3 className="fw-bold mb-4">
        Button Groups
      </h3>

      <ButtonGroup className="mb-3">

        {buttons.map((button) => (
          <ToggleButton
            key={button.value}
            id={button.value}
            type="radio"
            variant={
              alignment === button.value
                ? "primary"
                : "outline-primary"
            }
            name="alignment"
            value={button.value}
            checked={alignment === button.value}
            onChange={(e) =>
              setAlignment(e.currentTarget.value)
            }
          >
            {button.icon}
            {button.text}
          </ToggleButton>
        ))}

      </ButtonGroup>

      <div className="border rounded p-3">

        <p
          className="mb-0"
          style={{ textAlign: alignment }}
        >
          Here, the actions of the above buttons will be reflected.
        </p>

      </div>

    </div>
  );
};

export default RBButtonGroups;