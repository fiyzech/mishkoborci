
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { NotFound } from './components/NotFound';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';

const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Pricing />
      <About />
      <Reviews />
      <FAQ/>
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f111a] font-sans text-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;