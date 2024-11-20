import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import CausesSection from './components/CausesSection';
import PrecautionsSection from './components/PrecautionsSection';
import TeamSection from './components/TeamSection';
import HeroScene from './components/HeroScene';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-purple-900/70 z-10" />
        <HeroScene />
        <div className="relative z-20 text-center max-w-4xl px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            {...fadeIn}
          >
            Mental Health Matters
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md font-medium"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Breaking stigmas and building a supportive community for mental wellness.
          </motion.p>
          <motion.button
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Causes Section */}
      <section id="causes">
        <CausesSection />
      </section>

      {/* Precautions Section */}
      <section id="precautions">
        <PrecautionsSection />
      </section>

      {/* Team Section */}
      <section id="team">
        <TeamSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;