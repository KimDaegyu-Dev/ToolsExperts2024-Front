import React from "react";
// import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <>
      <div className="login-container">
        <h1>MSJWI</h1>
        <form>
          <input type="id" placeholder="이메일 주소 또는 아이디" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">로그인</button>
        </form>
        <div className="options">
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
          <a href="#">회원가입</a>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
