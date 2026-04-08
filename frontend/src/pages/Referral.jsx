import { motion } from 'framer-motion';
import { Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Referral.css';

const Referral = () => {
  return (
    <div className="referral-page">
      <div className="gradient-bg-subtle"></div>
      
      <section className="section referral-hero">
        <div className="container">
          <motion.div 
            className="referral-header center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Network className="hero-icon" size={48} />
            <h1 className="h1">Share the Systems. <br className="hidden-mobile" /> <span className="gradient-text">Build your income.</span></h1>
            <p className="subtitle">Earn a 30% commission on every Notion SaaS template purchase made through your unique link.</p>
            
            <div className="hero-ctas">
              <Link to="/login" className="btn-primary btn-large">
                Start Earning <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
          
          <div className="steps-grid">
            <motion.div className="glass-panel step-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }}>
              <div className="step-num">1</div>
              <h3>Join the Network</h3>
              <p>Sign up to get instant access to your personalized dashboard and unique referral link.</p>
            </motion.div>
            
            <motion.div className="glass-panel step-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }}>
              <div className="step-num">2</div>
              <h3>Share the Link</h3>
              <p>Promote NotionSA templates to your audience, friends, or email list using our provided assets.</p>
            </motion.div>
            
            <motion.div className="glass-panel step-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }}>
              <div className="step-num">3</div>
              <h3>Earn 30% RevShare</h3>
              <p>Get paid directly via bank transfer or PayPal for every successful system sale.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referral;
