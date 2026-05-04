import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Forgot Password</h2>
        <p>Create a new secure password for your account.</p>

        <label>Verification Code</label>
        <input type="text" placeholder="Enter code" />

        <label>New Password</label>
        <input type="password" placeholder="Enter new password" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" />

        <button>Update Password</button>

        <a href="#" className="resend">
          Resend Code
        </a>
      </div>
    </div>
  );
};

export default Header;
