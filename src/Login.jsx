import React, { useState } from "react";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          placeholder="example@example.com"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="********"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormswitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
