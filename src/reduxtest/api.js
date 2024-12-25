import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiSuccess, apiError } from "./apiSlice";
import { selectData, selectError } from "./apiSlice";

// reduxthunk 최신 문법
function Api() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const error = useSelector(selectError);

  const handleFetch = () => {
    dispatch({
      type: "API_CALL",
      payload: {
        url: "https://jsonplaceholder.typicode.com/posts",
        successType: apiSuccess.type, // action type 자동 생성
        errorType: apiError.type, // action type 자동 생성
      },
    });
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch Data</button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Api;
