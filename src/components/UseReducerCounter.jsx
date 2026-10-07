import { useReducer } from "react";

const initialState = {
  count: 0,
  message: ""
};

function reducer(state, action) {
  switch (action.type) {

    case "INCREMENT_1":
      if (state.count + 1 > 10) {
        return {
          ...state,
          message: "You can't increase value above 10"
        };
      }

      return {
        count: state.count + 1,
        message: ""
      };

    case "DECREMENT_1":
      if (state.count - 1 < 0) {
        return {
          ...state,
          message: "You can't decrease value below 0 (zero)"
        };
      }

      return {
        count: state.count - 1,
        message: ""
      };

    case "INCREMENT_2":
      if (state.count + 2 > 10) {
        return {
          ...state,
          message: "You can't increase value above 10"
        };
      }

      return {
        count: state.count + 2,
        message: ""
      };

    case "DECREMENT_2":
      if (state.count - 2 < 0) {
        return {
          ...state,
          message: "You can't decrease value below 0 (zero)"
        };
      }

      return {
        count: state.count - 2,
        message: ""
      };

    case "RESET":
      return {
        count: 0,
        message: ""
      };

    default:
      return state;
  }
}

function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mb-5">
      <h2 className="text-danger">
        Counter (useReducer Hook) = {state.count}
      </h2>

      <div className="mt-3">
        <button
          className="btn btn-outline-danger me-2"
          onClick={() => dispatch({ type: "INCREMENT_1" })}
        >
          Increment By 1
        </button>

        <button
          className="btn btn-outline-danger me-2"
          onClick={() => dispatch({ type: "DECREMENT_1" })}
        >
          Decrement By 1
        </button>

        <button
          className="btn btn-outline-danger me-2"
          onClick={() => dispatch({ type: "INCREMENT_2" })}
        >
          Increment By 2
        </button>

        <button
          className="btn btn-outline-danger me-2"
          onClick={() => dispatch({ type: "DECREMENT_2" })}
        >
          Decrement By 2
        </button>

        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>

      {state.message && (
        <p className="text-danger mt-3">
          {state.message}
        </p>
      )}
    </div>
  );
}

export default UseReducerCounter;