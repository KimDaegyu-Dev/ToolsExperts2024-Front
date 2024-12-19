import React from "react";
import "../styles/LoginPage.css";
import { useState } from "react";
import axios from "axios";
import { login, register } from "../api/auth";
function RegisterPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await register({
        id,
        password,
        name,
        user_name,
        email,
        phone,
      });
      console.log("Login successful:", response.data);
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
              placeholder="아이디"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="이름"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="닉네임"
              required
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="이메일"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="전화번호"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
