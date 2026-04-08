import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', padding: '120px 24px 60px' }}>
      <div className="container max-w-[800px] mx-auto">
        <motion.div 
          className="glass-panel" 
          style={{ padding: '40px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 className="h2">My Dashboard</h1>
            <button onClick={logout} className="btn-ghost">Logout</button>
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <p className="subtitle">Welcome back, {user.name}. Here are your active systems.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Dummy List */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ marginBottom: '8px' }}>Second Brain OS 2.0</h3>
                <p className="subtitle" style={{ fontSize: '0.9rem' }}>Purchased on Mar 31, 2026</p>
              </div>
              <button className="btn-primary">Access Template</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
