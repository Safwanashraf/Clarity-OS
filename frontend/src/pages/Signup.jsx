import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
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
      login({ id: 1, name, email }, 'dummy_token');
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
            <h2>Join the Network</h2>
            <p>Create an account to access or refer templates.</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          
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
              {loading ? 'Creating Identity...' : 'Create Account'}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="auth-link">Log in</Link></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
