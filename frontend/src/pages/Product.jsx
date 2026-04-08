import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Play, ArrowRight, Brain, Shield, Clock } from 'lucide-react';
import './Product.css';

// Mock data
const mockProduct = {
  _id: "1",
  title: "Second Brain OS 2.0",
  shortDescription: "A complete psychology-driven system to organize your life.",
  price: 49,
  category: "Productivity",
  rating: 4.9,
  reviews: 124,
  features: [
    "PARA Method fully integrated",
    "Automated Habit Tracker",
    "Daily, Weekly & Monthly Reviews",
    "Finance Dashboard",
    "Goal setting framework based on OKRs"
  ],
  caseStudy: {
    problem: "Most people consume information endlessly but fail to retain or act on it. Your brain is meant for generating ideas, not storing them.",
    psychology: "Built on cognitive offloading principles. When you dump open loops into a trusted system, your brain's default mode network relaxes, reducing anxiety by 40%.",
    design: "Minimalistic, mono-spaced typography to induce 'flow state'. No vibrant colors to artificially command attention—only what you choose to focus on stands out."
  }
};

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(mockProduct); // We will fetch using ID later

  const handlePurchase = () => {
    // We will integrate Razorpay here
    alert('Razorpay integration coming soon!');
  };

  return (
    <div className="product-page">
      {/* Product Hero */}
      <section className="product-hero">
        <div className="container product-grid">
          <div className="product-info-col">
            <Link to="/marketplace" className="back-link">
              ← Back to Marketplace
            </Link>
            <div className="category-pill">{product.category}</div>
            <h1 className="h1 product-title">{product.title}</h1>
            <p className="product-subtitle">{product.shortDescription}</p>
            
            <div className="product-meta">
              <div className="meta-item">
                <span className="stars">★★★★★</span>
                <span>{product.rating} ({product.reviews} reviews)</span>
              </div>
              <div className="meta-item">
                <Shield size={16} /> Secure Payment
              </div>
              <div className="meta-item">
                <Clock size={16} /> Instant Access
              </div>
            </div>

            <div className="pricing-card glass-panel">
              <div className="price-tag">${product.price}</div>
              <button className="btn-primary btn-large w-full" onClick={handlePurchase}>
                Get Instant Access <ArrowRight size={18} />
              </button>
              <p className="guarantee">Duplicate instantly to your Notion workspace.</p>
            </div>
            
            <div className="features-list">
              <h3>What's inside</h3>
              <ul>
                {product.features.map((f, i) => (
                  <li key={i}>
                    <Check size={18} className="feat-icon" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="product-visual-col">
            {/* Main Mockup representation */}
            <div className="mac-mockup">
              <div className="mac-header">
                <div className="dots"><i></i><i></i><i></i></div>
              </div>
              <div className="mac-body">
                <div className="video-overlay mask">
                  <Play size={48} className="play-icon" />
                  <p>Watch system demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Case Study */}
      <section className="section case-study-section">
        <div className="container">
          <div className="section-header">
            <h2 className="h2">The <span className="gradient-text">Psychology</span> Behind The System</h2>
            <p className="subtitle">Engineered to work with your brain, not against it.</p>
          </div>
          
          <div className="study-grid">
            <motion.div 
              className="study-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="study-number">01</div>
              <h3>The Problem</h3>
              <p>{product.caseStudy.problem}</p>
            </motion.div>
            
            <motion.div 
              className="study-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="study-number">02</div>
              <h3>Behavioral Design</h3>
              <p>{product.caseStudy.psychology}</p>
            </motion.div>
            
            <motion.div 
              className="study-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="study-number">03</div>
              <h3>UX & Aesthetics</h3>
              <p>{product.caseStudy.design}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
