import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <input type="text" placeholder="username" id="username" />
        <input type="password" placeholder="password" id="password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
