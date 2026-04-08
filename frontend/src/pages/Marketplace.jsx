import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, Star } from 'lucide-react';
import './Marketplace.css';

// Mock data until backend is fully hooked up to frontend
const dummyTemplates = [
  {
    _id: "1",
    title: "Second Brain OS 2.0",
    shortDescription: "A complete psychology-driven system to organize your life, notes, and projects.",
    price: 49,
    category: "Productivity",
    rating: 4.9
  },
  {
    _id: "2",
    title: "Freelance CRM Pro",
    shortDescription: "Manage clients, invoices, and proposals with zero friction.",
    price: 39,
    category: "Business",
    rating: 4.8
  },
  {
    _id: "3",
    title: "Wealth Tracker",
    shortDescription: "A behavioral finance system to track net worth and spending habits.",
    price: 29,
    category: "Finance",
    rating: 5.0
  },
  {
    _id: "4",
    title: "Dopamine Detox Routine",
    shortDescription: "A habit system built on neuroscience to regain focus.",
    price: 19,
    category: "Self Development",
    rating: 4.7
  }
];

const categories = ["All", "Productivity", "Business", "Finance", "Couples", "Trading", "Self Development"];

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [templates, setTemplates] = useState(dummyTemplates);

  useEffect(() => {
    // We will fetch from API later
    if (activeCategory === "All") {
      setTemplates(dummyTemplates);
    } else {
      setTemplates(dummyTemplates.filter(t => t.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="marketplace-page">
      <div className="gradient-bg-subtle"></div>
      
      <section className="section container">
        <div className="marketplace-header">
          <h1 className="h1">The <span className="gradient-text">Systems</span> Library</h1>
          <p className="subtitle">Choose a beautifully engineered template to upgrade your workflow.</p>
        </div>

        <div className="marketplace-filters">
          <div className="filter-scroll">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="btn-ghost filter-icon-btn">
            <Filter size={18} />
            Filters
          </button>
        </div>

        <motion.div 
          className="template-grid"
          layout
        >
          {templates.map((template, i) => (
            <motion.div
              key={template._id}
              className="template-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              layout
            >
              <div className="template-image-placeholder">
                <div className="t-grid">
                  <div className="t-block" style={{width: '60%'}}></div>
                  <div className="t-block delay-1"></div>
                  <div className="t-block delay-2"></div>
                </div>
              </div>
              
              <div className="template-content">
                <div className="category-tag">{template.category}</div>
                <h3 className="template-title">{template.title}</h3>
                <p className="template-desc">{template.shortDescription}</p>
                
                <div className="template-footer">
                  <div className="price">${template.price}</div>
                  <div className="rating">
                    <Star size={14} fill="currentColor" className="star-icon" />
                    {template.rating}
                  </div>
                </div>
                
                <Link to={`/template/${template._id}`} className="btn-primary block-btn">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Marketplace;
