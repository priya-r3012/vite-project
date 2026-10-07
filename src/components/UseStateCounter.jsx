import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  
  const incrementBy1 = () => {
    if (count + 1 > 10) {
      setMessage("You can't increase value above 10");
    } else {
      setCount(count + 1);
      setMessage("");
    }
  };

  
  const decrementBy1 = () => {
    if (count - 1 < 0) {
      setMessage("You can't decrease value below 0 (zero)");
    } else {
      setCount(count - 1);
      setMessage("");
    }
  };

  
  const incrementBy2 = () => {
    if (count + 2 > 10) {
      setMessage("You can't increase value above 10");
    } else {
      setCount(count + 2);
      setMessage("");
    }
  };

  
  const decrementBy2 = () => {
    if (count - 2 < 0) {
      setMessage("You can't decrease value below 0 (zero)");
    } else {
      setCount(count - 2);
      setMessage("");
    }
  };

  
  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="mb-5">
      <h2 className="text-primary">
        Counter (useState Hook) = {count}
      </h2>

      <div className="mt-3">
        <button
          className="btn btn-outline-primary me-2"
          onClick={incrementBy1}
        >
          Increment By 1
        </button>

        <button
          className="btn btn-outline-primary me-2"
          onClick={decrementBy1}
        >
          Decrement By 1
        </button>

        <button
          className="btn btn-outline-primary me-2"
          onClick={incrementBy2}
        >
          Increment By 2
        </button>

        <button
          className="btn btn-outline-primary me-2"
          onClick={decrementBy2}
        >
          Decrement By 2
        </button>

        <button
          className="btn btn-primary"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      {message && (
        <p className="text-danger mt-3">
          {message}
        </p>
      )}
    </div>
  );
}

export default UseStateCounter;