import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa'

import './styles.css';
import api from '../../services/api'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  async function handleLogin(e) {
    e.preventDefault();

    const response = await api.post('login', {username, password});

    localStorage.setItem('token', response.data.token);
    history.push('/admin');
  }

  return (
    <div className="login-container">
      <section className="login-section">
        <form onSubmit={handleLogin}>
          <FaRobot className="icon" size={70} color="7f78d2"/>
          <h1>Sign in to Dashboard</h1>

          <input type="text"
                 name="Username"
                 id="username"
                 placeholder="Username"
                 onChange={e => setUsername(e.target.value)}
          />

          <input type="password"
                 name="Password"
                 id="password"
                 placeholder="Password"
                 onChange={e => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Sign In
          </button>

          <Link className="button" to="/">
            Homepage
          </Link>
        </form>
      </section>
    </div>
  );
}