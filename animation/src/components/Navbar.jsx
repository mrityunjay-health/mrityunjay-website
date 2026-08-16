import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div 
        className="glass"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          padding: '1rem 2rem',
          borderRadius: '999px',
        }}
      >
        <div style={{ fontFamily: 'var(--font-logo)', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.02em' }}>
          Mrithumjay<span style={{ color: 'var(--accent-2)' }}>.</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Expertise', 'Facilities', 'Doctors', 'Research'].map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: 'var(--accent-1)' }}
              style={{ 
                color: 'var(--text-muted)', 
                textDecoration: 'none', 
                fontSize: '0.9rem', 
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'white',
            color: 'var(--bg-color)',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '999px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Book Priority
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
