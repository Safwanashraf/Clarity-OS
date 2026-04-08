import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Brain, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="gradient-bg"></div>
      
      {/* Target Hero Section */}
      <section className="section hero-section">
        <div className="container hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-content"
          >
            <div className="pill-badge">
              <span className="dot"></span>
              Introducing the Second Brain OS 2.0
            </div>
            
            <h1 className="h1 hero-title">
              Systems That Upgrade How You <br className="hidden-mobile" />
              <span className="gradient-text">Think, Work, and Live.</span>
            </h1>
            
            <p className="subtitle hero-subtitle">
              Psychology-driven Notion systems designed for clarity, focus, and peak performance. We don't just build templates; we engineer workflows.
            </p>
            
            <div className="hero-ctas">
              <Link to="/marketplace" className="btn-primary btn-large">
                Explore Templates
                <ArrowRight size={20} />
              </Link>
              <Link to="/referral" className="btn-ghost btn-large">
                Become a Referrer
              </Link>
            </div>
            
            <div className="social-proof">
              <div className="avatars">
                <div className="avatar bg-1"></div>
                <div className="avatar bg-2"></div>
                <div className="avatar bg-3"></div>
              </div>
              <span>Trusted by 5,000+ creators, founders, and students.</span>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="glass-panel app-mockup">
              <div className="mockup-header">
                <div className="dots">
                  <i></i><i></i><i></i>
                </div>
              </div>
              <div className="mockup-body">
                {/* Abstract Notion representation */}
                <div className="mockup-sidebar"></div>
                <div className="mockup-main">
                  <div className="mockup-title"></div>
                  <div className="mockup-blocks">
                    <div className="m-block text"></div>
                    <div className="m-block text short"></div>
                    <div className="m-grid">
                      <div className="m-card"></div>
                      <div className="m-card"></div>
                      <div className="m-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="h2">Why most productivity systems <span className="gradient-text">fail</span></h2>
            <p className="subtitle">
              They rely on infinite discipline instead of psychological alignment. Our systems are built differently.
            </p>
          </div>
          
          <div className="features-grid">
            <motion.div className="glass-panel feature-card" whileHover={{ y: -5 }}>
              <Brain className="feature-icon" />
              <h3>Cognitive Load Reduction</h3>
              <p>Designed to minimize decision fatigue so you can focus on execution rather than organization.</p>
            </motion.div>
            
            <motion.div className="glass-panel feature-card" whileHover={{ y: -5 }}>
              <Zap className="feature-icon" />
              <h3>Behavioral Triggers</h3>
              <p>Built with built-in positive reinforcement loops that transform habits into automated routines.</p>
            </motion.div>
            
            <motion.div className="glass-panel feature-card" whileHover={{ y: -5 }}>
              <Target className="feature-icon" />
              <h3>Clear Hierarchy</h3>
              <p>Information architecture inspired by the way the human brain naturally processes goals.</p>
            </motion.div>
            
            <motion.div className="glass-panel feature-card" whileHover={{ y: -5 }}>
              <LayoutGrid className="feature-icon" />
              <h3>Minimal Aesthetics</h3>
              <p>Clutter-free interfaces that inspire calm and reduce visual friction during deep work.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ... We will add Featured Templates via Marketplace API later ... */}
      
      {/* Referral CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="glass-panel cta-panel"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2>Share the system. Earn commission.</h2>
              <p>Join our partner program and earn 30% on every sale you refer. High-converting products with a lifetime cookie.</p>
              <div className="cta-buttons">
                <Link to="/referral" className="btn-primary">Get Your Link</Link>
                <Link to="/about" className="btn-ghost">Learn More</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
