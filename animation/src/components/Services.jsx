import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Brain, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: <HeartPulse size={36} color="var(--accent-1)" />,
    title: "Cardiovascular",
    description: "State-of-the-art heart care leveraging AI diagnostics and minimally invasive robotic procedures."
  },
  {
    icon: <Brain size={36} color="var(--accent-2)" />,
    title: "Neuromodulation",
    description: "Advanced neurological treatments targeting complex disorders with pinpoint precision."
  },
  {
    icon: <Shield size={36} color="var(--accent-1)" />,
    title: "Immunotherapy",
    description: "Next-generation cellular therapies designed to empower your body's natural defenses."
  },
  {
    icon: <Activity size={36} color="var(--accent-2)" />,
    title: "Precision Medicine",
    description: "Genomic mapping and highly personalized treatment regimens mapped to your DNA."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Services = () => {
  return (
    <section id="expertise" style={{ padding: '8rem 2rem', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Uncompromising <span className="text-gradient-accent">Expertise.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Our facilities merge world-class medical talent with breakthrough technologies to provide unparalleled care.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass"
              style={{ padding: '3rem 2rem', borderRadius: '1.5rem', transition: 'box-shadow 0.3s ease' }}
            >
              <div style={{ marginBottom: '2rem', display: 'inline-flex', padding: '1.25rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
