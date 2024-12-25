const apiMiddleware = (store) => (next) => async (action) => {
  if (action.type === "API_CALL") {
    console.log("API 호출 시작 : ", action.payload.url);

    try {
      const response = await fetch(action.payload.url);
      if (!response.ok) throw new Error("API 응답 오류");

      const data = await response.json();
      console.log("API 호출 성공 :", data);

      store.dispatch({ type: action.payload.successType, payload: data });
    } catch (error) {
      console.error("API 호출 실패 : ", error.message);

      store.dispatch({
        type: action.payload.errorType,
        payload: error.message,
      });
    }
  } else {
    return next(action); // 비-API 호출 액션은 그대로 통과
  }
};
// middleware 문법은 이것이 최신이 아니고 usersSlice에서 사용한 것이 최신일 수 있음

export default apiMiddleware;
