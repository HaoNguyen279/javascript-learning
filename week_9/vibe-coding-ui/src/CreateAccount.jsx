import "./App.css";
import { FaGoogle, FaFacebookF, FaApple, FaEyeSlash } from "react-icons/fa";
import bglogin from "./assets/bglogin.png";
export default function CreateAccount() {
  return (
    <div className="page">
      <div className="card">
        {/* Left */}
        <div className="left">
          <h1>Create an account</h1>

          <form className="form">
            {/* Full name */}
            <div className="field">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" type="text" placeholder="Enter your full name" />
            </div>

            {/* Email */}
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="example.email@gmail.com" />
            </div>

            {/* Password */}
            <div className="field password-field">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrap">
                <input id="password" type="password" placeholder="Enter at least 8+ characters" />
                <FaEyeSlash className="eye" />
              </div>
            </div>

            <button type="button" className="btn-signin">
              Sign in
            </button>
          </form>

          <p className="or">Or sign in with</p>

          <div className="socials">
            <button className="social google" type="button">
              <FaGoogle />
            </button>
            <button className="social facebook" type="button">
              <FaFacebookF />
            </button>
            <button className="social apple" type="button">
              <FaApple />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="right">
          <img
            src={bglogin}
            alt="illustration"
          />
        </div>
      </div>
    </div>
  );
}