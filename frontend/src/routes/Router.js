import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import FollowPage from "../pages/FollowPage";
import LandingPage from "../pages/LandingPage";
import InfoPage from "../pages/InfoPage";
import LearnPage from "../pages/LearnPage";
import MyNearPage from "../pages/MyNearPage";
import MyPage from "../pages/MyPage";
import QnAPage from "../pages/QnAPage";
import SchedulePage from "../pages/ScedulePage";
import LoginPage from "../pages/LoginPage";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/follow" element={<FollowPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/mynear" element={<MyNearPage />} />
      <Route path="/qna" element={<QnAPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      {/* API 연결 배우는 용도 페이지 */}
      <Route path="/learn" element={<LearnPage />} />
    </Routes>
  );
};
