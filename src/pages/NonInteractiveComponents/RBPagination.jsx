import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const RBPagination = () => {
  const [page, setPage] = useState(1);

  const totalPages = 5;

  const goToPage = (number) => {
    if (number >= 1 && number <= totalPages) {
      setPage(number);
    }
  };

  return (
    <div className="p-3">

      <h3 className="fw-bold mb-3">
        Pagination
      </h3>

      <p className="fw-semibold">
        Active Page : {page}
      </p>

      <Pagination>

        <Pagination.First
          disabled={page === 1}
          onClick={() => goToPage(1)}
        />

        <Pagination.Prev
          disabled={page === 1}
          onClick={() => goToPage(page - 1)}
        />

        {[1, 2, 3, 4, 5].map((number) => (
          <Pagination.Item
            key={number}
            active={page === number}
            onClick={() => goToPage(number)}
          >
            {number}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={page === totalPages}
          onClick={() => goToPage(page + 1)}
        />

        <Pagination.Last
          disabled={page === totalPages}
          onClick={() => goToPage(totalPages)}
        />

      </Pagination>

    </div>
  );
};

export default RBPagination;