import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "../MyPage/MyPage";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/detail" element={<MyPage />}>
          <Route path=":cardId" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
