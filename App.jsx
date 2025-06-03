import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [form, setForm] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = () => {
    localStorage.setItem(form.username, form.password);
    alert("Account created! Now log in.");
    setPage("login");
  };

  const login = () => {
    const stored = localStorage.getItem(form.username);
    if (stored === form.password) {
      setUser(form.username);
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setForm({ username: "", password: "" });
    setPage("home");
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', padding: 30, background: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: 'lime' }}>🎰 BETBD71 🎰</h1>
      {!user ? (
        <>
          {page === "home" && (
            <>
              <p>Welcome to our casino site. Please sign up or log in to play.</p>
              <button onClick={() => setPage("signup")}>Sign Up</button>
              <button onClick={() => setPage("login")}>Log In</button>
            </>
          )}

          {page === "signup" && (
            <>
              <h2>Sign Up</h2>
              <input name="username" onChange={handleInput} placeholder="Username" /><br /><br />
              <input name="password" type="password" onChange={handleInput} placeholder="Password" /><br /><br />
              <button onClick={signup}>Create Account</button><br /><br />
              <button onClick={() => setPage("home")}>Back</button>
            </>
          )}

          {page === "login" && (
            <>
              <h2>Log In</h2>
              <input name="username" onChange={handleInput} placeholder="Username" /><br /><br />
              <input name="password" type="password" onChange={handleInput} placeholder="Password" /><br /><br />
              <button onClick={login}>Log In</button><br /><br />
              <button onClick={() => setPage("home")}>Back</button>
            </>
          )}
        </>
      ) : (
        <>
          <h2>Hello, {user}!</h2>
          <p>You're now logged in. Game area will appear here soon!</p>
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </div>
  );
}

export default App;
