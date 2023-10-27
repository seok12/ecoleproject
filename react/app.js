import React, { useState } from "react";
import { account, ID } from "./lib/appwrite";
import "./App.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function login(email, password) {
    try{await account.createEmailSession(email, password);
      setEmail("");
      setName("");
      setPassword("");
      setLoggedInUser(await account.get());
    }catch(err){
      alert("로그인 실패")
    }
    
  }

  return (
    <div className="layout">
      <div className="pico">
        <p className="logo">
          {loggedInUser ? `Welcome ${loggedInUser.name}` : "Login"}
        </p>

        <form>
          <div className="option">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="option">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="option">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
        <div>
          <div className="Btn">
            <button
              type="button"
              onClick={() => {
                  login(email, password);

              }}
            >
              Login
            </button>
          </div>
          <div className="Btn">
            <button
              type="button"
              onClick={async () => {
                try {
                  await account.create(ID.unique(), email, password, name);
                  login(email, password);
                  alert("회원가입 되었습니다")
                } catch (err) {
                  alert("회원가입 실패");
                }
              }}
            >
              Register
            </button>
          </div>
          <div className="Btn">
            <button
              type="button"
              onClick={async () => {
                try{
                  await account.deleteSession("current");
                  setLoggedInUser(null);
                  alert("로그아웃 되었습니다")
                }catch(err){
                  alert("잘못된 방법입니다")
                }
                
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
