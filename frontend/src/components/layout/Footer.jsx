import { Link } from 'react-router-dom';
import './Layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="brand-logo">NotionSA</h3>
            <p className="subtitle">
              Psychology-driven systems engineered for clarity, focus, and performance.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Products</h4>
            <Link to="/marketplace">All Templates</Link>
            <Link to="/marketplace?category=business">Business Operations</Link>
            <Link to="/marketplace?category=productivity">Second Brain</Link>
            <Link to="/marketplace?category=finance">Finance Trackers</Link>
          </div>
          
          <div className="footer-links-group">
            <h4>Company</h4>
            <Link to="/about">Our Philosophy</Link>
            <Link to="/blog">Insights & Blog</Link>
            <Link to="/contact">Support</Link>
          </div>
          
          <div className="footer-links-group">
            <h4>PartnersHips</h4>
            <Link to="/referral">Become a Referrer</Link>
            <Link to="/login">Affiliate Dashboard</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NotionSA. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
