import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./LoginModal.css";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        {/* Left image */}
        <div className="login-left">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop"
            alt="Food"
          />
          <div className="login-quote">
            "Embrace the art of
            <br />
            cooking, where flavors
            <br />
            come alive!"
          </div>
        </div>

        {/* Right form */}
        <div className="login-right">
          <button className="login-close" onClick={onClose} aria-label="Close modal">
            <IoClose />
          </button>

          <h2>Login</h2>
          <p className="login-sub">Enter your email to log in.</p>

          <input className="login-input" type="email" placeholder="Enter your email" />

          <button className="btn-continue">Continue</button>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <p className="login-terms">
            By continuing, you agree to the updated <b>Terms of Sale</b>, <b>Terms of Service</b>, and{" "}
            <b>Privacy Policy</b>.
          </p>

          <div className="social-login">
            <button className="social-btn google">
              <FaGoogle />
              Continue with Google
            </button>
            <button className="social-btn facebook">
              <FaFacebookF />
              Continue with Facebook
            </button>
            <button className="social-btn apple">
              <FaApple />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}