import React from "react";
// Components
import Navbar from "components/Navbar";
// Assets
import img from "assets/img/login1.jpg";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ul className="login mg-t-80 mg-b-82">
          <li className="mg-b-28">
            <img src={img} alt="log in" />
          </li>
          <li>
            <ul className="login-r">
              <li className="mg-b-12">
                <h3>Log in</h3>
              </li>
              <li>
                <h6>帳號</h6>
              </li>
              <li className="mg-b-20">
                <input type="text" placeholder="email@example.com" />{" "}
              </li>
              <li>
                <h6>密碼</h6>
              </li>
              <li className="mg-b-43">
                <input type="text" placeholder="Password" />
              </li>
              <li className="actions">
                <h6>忘記密碼</h6>
                <div>
                  <a href="/#" className="mg-r-8">
                    註冊
                  </a>
                  <a href="/#">登入</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
