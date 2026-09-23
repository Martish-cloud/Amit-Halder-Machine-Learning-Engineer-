import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Loader } from './components/Loader';
import { ScrollProgress } from './components/ScrollProgress';
import { BackgroundGrid } from './components/BackgroundGrid';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { CareerEvolution } from './sections/CareerEvolution';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { TechOrbit } from './sections/TechOrbit';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Inquiry } from './sections/Inquiry';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

const sectionIds = [
  'home',
  'about',
  'journey',
  'experience',
  'skills',
  'education',
  'certifications',
  'inquiry',
  'contact',
];

export function App() {
  const [loading, setLoading] = useState(true);
  const { toggleTheme, isDark } = useTheme();
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-900 dark:text-brand-warm-gray selection:bg-brand-burgundy/20 selection:text-brand-burgundy relative font-sans transition-colors duration-300">
      {/* Short sleek entrance loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Ambient Reading Progress Bar */}
      <ScrollProgress />

      {/* Desktop Interactive Custom Cursor */}
      <CustomCursor />

      {/* Non-blocking Ambient Background Mesh */}
      <BackgroundGrid />

      {/* Floating Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        <Hero />
        <About />
        <CareerEvolution />
        <Experience />
        <Skills />
        <TechOrbit />
        <Education />
        <Certifications />
        <Inquiry />
        <Contact />
      </main>

      {/* Technical Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
