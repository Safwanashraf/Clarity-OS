import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // In real app, call the API. Here we mock it:
    setTimeout(() => {
      login({ id: 1, name: 'Demo User', email }, 'dummy_token');
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="gradient-bg-subtle center-glow"></div>
      <div className="container auth-container">
        <motion.div 
          className="auth-card glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Access your systems and dashboard.</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <div className="label-row">
                <label>Password</label>
                <Link to="/forgot" className="forgot-link">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn-primary w-full btn-large auth-btn" disabled={loading}>
              {loading ? 'Entering System...' : 'Log In'}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup" className="auth-link">Create one</Link></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
