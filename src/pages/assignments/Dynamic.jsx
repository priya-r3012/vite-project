import { useState } from "react";

import students from "../../components/dynamic_task/student";
import { DynHeader } from "../../components/dynamic_task/DynHeader";
import DynProfileCard from "../../components/dynamic_task/DynProfileCard";
import { DynFooter } from "../../components/dynamic_task/DynFooter";

const Dynamic = () => {
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="container mt-5 text-center">

      {!showCards && (
        <button
          className="btn btn-danger px-4 py-2 shadow"
          onClick={() => setShowCards(true)}
        >
          Click Here to see Output...
        </button>
      )}

      {showCards && (
        <>
          <DynHeader />

          <div className="row justify-content-center g-4 mt-2">
            {students.map((student, index) => (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={index}
              >
                <DynProfileCard student={student} />
              </div>
            ))}
          </div>

          <DynFooter />
        </>
      )}

    </div>
  );
};

export default Dynamic;