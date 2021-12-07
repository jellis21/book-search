import './style.css';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form className="form">
      <div className="form__field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="example@email.com" />
      </div>
      <div className="form__field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;