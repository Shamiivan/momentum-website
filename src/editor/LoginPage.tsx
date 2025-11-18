import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './LoginPage.css';

export const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h1>Admin Login</h1>
          <p className="login-subtitle">Enter password to access the editor</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="login-footer">
            <a href="/">← Back to website</a>
          </div>
        </div>

        <div className="login-info">
          <h3>Default Credentials</h3>
          <p><strong>Password:</strong> momentum2024</p>
          <p className="info-note">
            ⚠️ Change the password in <code>src/editor/AuthContext.tsx</code> before deploying to production!
          </p>
        </div>
      </div>
    </div>
  );
};
