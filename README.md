// BETBD71 - Step 1: Home, Signup, Login Page Setup (React + TailwindCSS)

import { useState } from 'react'; import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() { return ( <Router> <div className="min-h-screen bg-green-900 text-white"> <nav className="flex justify-between items-center p-4 bg-green-800 shadow-md"> <h1 className="text-2xl font-bold text-red-500">BETBD71</h1> <div className="space-x-4"> <Link to="/" className="hover:underline">Home</Link> <Link to="/signup" className="hover:underline">Sign Up</Link> <Link to="/login" className="hover:underline">Log In</Link> </div> </nav>

<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
</Router>

); }

function Home() { return ( <div className="p-10 text-center"> <h2 className="text-3xl font-bold mb-4">Welcome to BETBD71 Casino</h2> <p className="text-lg">Play exciting games and win big — join now!</p> </div> ); }

function Signup() { const navigate = useNavigate(); const [form, setForm] = useState({ username: '', password: '' });

const handleSubmit = (e) => { e.preventDefault(); localStorage.setItem('user', JSON.stringify(form)); alert('Signup successful! Please login.'); navigate('/login'); };

return ( <div className="max-w-md mx-auto mt-10 bg-green-800 p-6 rounded-xl"> <h2 className="text-xl mb-4">Create Account</h2> <form onSubmit={handleSubmit} className="space-y-4"> <input type="text" placeholder="Username" className="w-full p-2 rounded" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required /> <input type="password" placeholder="Password" className="w-full p-2 rounded" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /> <button type="submit" className="bg-red-500 w-full p-2 rounded hover:bg-red-600">Sign Up</button> </form> </div> ); }

function Login() { const navigate = useNavigate(); const [form, setForm] = useState({ username: '', password: '' });

const handleLogin = (e) => { e.preventDefault(); const user = JSON.parse(localStorage.getItem('user')); if (user && user.username === form.username && user.password === form.password) { alert('Login successful!'); navigate('/'); } else { alert('Invalid username or password.'); } };

return ( <div className="max-w-md mx-auto mt-10 bg-green-800 p-6 rounded-xl"> <h2 className="text-xl mb-4">Login</h2> <form onSubmit={handleLogin} className="space-y-4"> <input type="text" placeholder="Username" className="w-full p-2 rounded" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required /> <input type="password" placeholder="Password" className="w-full p-2 rounded" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /> <button type="submit" className="bg-red-500 w-full p-2 rounded hover:bg-red-600">Log In</button> </form> </div> ); }

export default App;

