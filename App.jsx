import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [form, setForm] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = () => {
    if (form.username && form.password) {
      localStorage.setItem(form.username, form.password);
      alert("✅ Account created! Now log in.");
      setPage("login");
    } else {
      alert("❗ Please fill in both fields.");
    }
  };

  const login = () => {
    const stored = localStorage.getItem(form.username);
    if (stored === form.password) {
      setUser(form.username);
    } else {
      alert("❌ Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setForm({ username: "", password: "" });
    setPage("home");
  };

  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Segoe UI',
      padding: 30,
      background: 'linear-gradient(to bottom, #000000, #1f1f1f)',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: '1rem'
      }}>🎰 BETBD71 🎰</h1>

      {!user ? (
        <>
          {page === "home" && (
            <>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Welcome to the official BETBD71 casino. Sign up or log in to start playing.
              </p>
              <button onClick={() => setPage("signup")} style={btnStyle}>Sign Up</button>
              <button onClick={() => setPage("login")} style={{ ...btnStyle, backgroundColor: '#00bfff' }}>Log In</button>
            </>
          )}

          {(page === "signup" || page === "login") && (
            <>
              <h2 style={{ marginBottom: '1rem' }}>{page === "signup" ? "📝 Sign Up" : "🔐 Log In"}</h2>
              <input name="username" onChange={handleInput} placeholder="Username"
                style={inputStyle} value={form.username} /><br /><br />
              <input name="password" type="password" onChange={handleInput} placeholder="Password"
                style={inputStyle} value={form.password} /><br /><br />
              <button onClick={page === "signup" ? signup : login} style={btnStyle}>
                {page === "signup" ? "Create Account" : "Log In"}
              </button><br /><br />
              <button onClick={() => setPage("home")} style={{ ...btnStyle, backgroundColor: '#444' }}>⬅ Back</button>
            </>
          )}
        </>
      ) : (
        <>
          <h2 style={{ marginBottom: '1rem' }}>👋 Welcome, {user}!</h2>
          <p style={{ fontSize: '1.1rem' }}>You are now logged in. Game area coming soon...</p><br />
          <button onClick={logout} style={{ ...btnStyle, backgroundColor: '#dc143c' }}>Log Out</button>
        </>
      )}
    </div>
  );
}

const btnStyle = {
  margin: '0.5rem',
  padding: '0.6rem 1.2rem',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const inputStyle = {
  padding: '0.5rem',
  width: '250px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

export default App;
