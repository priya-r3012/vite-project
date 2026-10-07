import Breadcrumb from "react-bootstrap/Breadcrumb";

import {
  FaFolder,
  FaCode,
  FaChevronRight,
} from "react-icons/fa";

const RBBreadcrumbs = () => {
  return (
    <div className="p-3">

      <h3 className="fw-bold mb-4">
        React Bootstrap Breadcrumbs
      </h3>

      <Breadcrumb
        bsPrefix="breadcrumb d-flex align-items-center"
      >

        <Breadcrumb.Item bsPrefix="breadcrumb-item">
          Cloud
        </Breadcrumb.Item>

        <FaChevronRight className="mx-2 text-secondary" />

        <Breadcrumb.Item bsPrefix="breadcrumb-item">
          Files
        </Breadcrumb.Item>

        <FaChevronRight className="mx-2 text-secondary" />

        <Breadcrumb.Item bsPrefix="breadcrumb-item">
          Project
        </Breadcrumb.Item>

        <FaChevronRight className="mx-2 text-secondary" />

        <Breadcrumb.Item
          active
          bsPrefix="breadcrumb-item fw-bold"
        >
          ProjectName
        </Breadcrumb.Item>

      </Breadcrumb>

      <div className="mt-5">

        <h5 className="fw-bold mb-3">
          Optional - Additional Example
        </h5>

        <Breadcrumb
          bsPrefix="breadcrumb d-flex align-items-center"
        >

          <Breadcrumb.Item bsPrefix="breadcrumb-item">
            <FaFolder className="me-2 text-warning" />
            Assignments
          </Breadcrumb.Item>

          <FaChevronRight className="mx-2 text-secondary" />

          <Breadcrumb.Item bsPrefix="breadcrumb-item">
            <FaFolder className="me-2 text-warning" />
            Project
          </Breadcrumb.Item>

          <FaChevronRight className="mx-2 text-secondary" />

          <Breadcrumb.Item
            active
            bsPrefix="breadcrumb-item"
          >
            <FaCode className="me-2 text-primary" />
            TodoList
          </Breadcrumb.Item>

        </Breadcrumb>

      </div>

    </div>
  );
};

export default RBBreadcrumbs;