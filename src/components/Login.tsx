import React, { useState, ChangeEvent } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, preencha todos os campos.");
    } else if (email === "teste@gmail.com" && password === "123456") {
      onLogin();
    } else {
      alert("Email ou senha inválidos");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-indigo-500 bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-indigo-50 bg-opacity-40 p-14 rounded-3xl shadow-inner">
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <label htmlFor="email" className="mr-2">
              Email :
            </label>
          </div>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-2">
            <FaLock className="mr-2" />
            <label htmlFor="password" className="mr-2">
              Senha :
            </label>
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
