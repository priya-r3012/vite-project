import { useState } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { FaPen } from "react-icons/fa";

const RBButtons = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [strike, setStrike] = useState(false);

  return (
    <div className="p-3">

      <h3 className="fw-bold mb-4">
        React Bootstrap Buttons
      </h3>

      <div className="mb-4">

        <h5 className="fw-bold mb-3">
          Button Styles
        </h5>

        <div className="d-flex flex-wrap gap-2">

          <Button variant="primary">
            Normal Button
          </Button>

          <Button variant="primary">
            <FaPen className="me-2" />
            Edit Record
          </Button>

          <Button variant="outline-primary">
            Outline Button
          </Button>

          <Button variant="primary" disabled>
            Disabled Button
          </Button>

        </div>

      </div>

      <div className="mb-4">

        <h5 className="fw-bold mb-3">
          Button Types
        </h5>

        <div className="d-flex flex-wrap gap-2">

          <Button
            variant="primary"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Link
          </Button>

          <Button variant="primary">
            Button
          </Button>

          <Button variant="primary" type="button">
            Input
          </Button>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="primary" type="reset">
            Reset
          </Button>

        </div>

      </div>

      <div>

        <h5 className="fw-bold mb-3">
          Toggle Buttons
        </h5>

        <ButtonGroup>

          <ToggleButton
            id="bold"
            type="checkbox"
            variant={bold ? "primary" : "outline-primary"}
            checked={bold}
            onChange={(e) => setBold(e.currentTarget.checked)}
          >
            <strong>B</strong>
          </ToggleButton>

          <ToggleButton
            id="italic"
            type="checkbox"
            variant={italic ? "primary" : "outline-primary"}
            checked={italic}
            onChange={(e) =>
              setItalic(e.currentTarget.checked)
            }
          >
            <em>I</em>
          </ToggleButton>

          <ToggleButton
            id="underline"
            type="checkbox"
            variant={underline ? "primary" : "outline-primary"}
            checked={underline}
            onChange={(e) =>
              setUnderline(e.currentTarget.checked)
            }
          >
            <u>U</u>
          </ToggleButton>

          <ToggleButton
            id="strike"
            type="checkbox"
            variant={strike ? "primary" : "outline-primary"}
            checked={strike}
            onChange={(e) =>
              setStrike(e.currentTarget.checked)
            }
          >
            <s>S</s>
          </ToggleButton>

        </ButtonGroup>

        <p
          className="fw-bold fst-italic mt-2"
          style={{
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
            textDecoration: `${underline ? "underline " : ""}${
              strike ? "line-through" : ""
            }`,
          }}
        >
          Here, the actions of the above buttons will be reflected.
        </p>

      </div>

    </div>
  );
};

export default RBButtons;