import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="gradient-bg-subtle"></div>
      
      <section className="section about-hero">
        <div className="container">
          <motion.div 
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="h1">
              Most productivity tools are <span className="gradient-text"><br/>complicated.</span>
            </h1>
            <p className="subtitle mx-auto">
              We design systems that align with how the human brain naturally organizes information. Not the other way around.
            </p>
          </motion.div>
          
          <div className="philosophy-grid">
            <motion.div 
              className="p-card glass-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>01. Cognitive Offloading</h3>
              <p>Your brain is for having ideas, not holding them. When you offload the responsibility of remembering to an external system, you reduce anxiety and increase creative capacity. Our templates act as your digital cortex.</p>
            </motion.div>
            
            <motion.div 
              className="p-card glass-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>02. Visual Minimalism</h3>
              <p>Clutter competes for your attention. Every color, border, and block in our systems is intentional. By utilizing maximum whitespace and minimal palettes, we reduce visual friction and keep you in a state of flow.</p>
            </motion.div>
            
            <motion.div 
              className="p-card glass-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>03. Behavioral Feedback Loops</h3>
              <p>Habits fail when systems rely purely on willpower. True productivity stems from positive reinforcement. We build progress bars and visual rewards directly into our dashboards to trigger dopamine correctly.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
