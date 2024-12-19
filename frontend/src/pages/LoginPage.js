import React from "react";
import "../styles/LoginPage.css";
import { useState } from "react";
import axios from "axios";
import { login } from "../api/auth";
import { Link } from "react-router-dom";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login({ id, password }).then((res) => {
        if (res.status === 200) {
          window.location.href = "/";
        }
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-container">
          <h1 className="logtit">Gallerist</h1>
          <form>
            <input
              type="id"
              placeholder="이메일 주소 또는 아이디"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>
              로그인
            </button>
          </form>
          <div className="options">
            <a href="#">아이디 찾기</a>
            <a href="#">비밀번호 찾기</a>
            <Link to="/register">회원가입</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
