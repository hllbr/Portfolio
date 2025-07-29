import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './locales/i18n';
import { Contact } from '@/features/Contact/Routes';
import { Technologies } from '@/features/Technologies/Routes';
import { AIApproach } from '@/features/AIApproach/Routes';
import { Patents } from '@/features/Patents/Routes';
import { Game } from '@/features/Game/Routes';
import { NoPage } from '@/features/NoPage/Routes';
import Layout from '@/components/layout/Layout';
import { Home } from '@/features/Home/Routes';

/**
 * Root component configuring the application routes.
 * Uses BrowserRouter for better URL handling with .htaccess support.
 */
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/anasayfa" element={<Home />} />
          <Route path="/Anasayfa" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/Iletisim" element={<Contact />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/Technologies" element={<Technologies />} />
          <Route path="/teknoloji" element={<Technologies />} />
          <Route path="/Teknoloji" element={<Technologies />} />
          <Route path='/technology' element={<Technologies />} />
          <Route path='/Technology' element={<Technologies />} />
          <Route path="/teknolojiler" element={<Technologies />} />
          <Route path="/Teknolojiler" element={<Technologies />} />
          <Route path="/ai" element={<AIApproach />} />
          <Route path="/AI" element={<AIApproach />} />
          <Route path="/artificial-intelligence" element={<AIApproach />} />
          <Route path="/artificialintelligence" element={<AIApproach />} />
          <Route path="/Artificial-Intelligence" element={<AIApproach />} />
          <Route path="/yapay-zeka" element={<AIApproach />} />
          <Route path="/Yapay-Zeka" element={<AIApproach />} />
          <Route path="/Patents" element={<Patents />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/Patent" element={<Patents />} />
          <Route path="/patentler" element={<Patents />} />
          <Route path="/Patentler" element={<Patents />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/game" element={<Game />} />
          <Route path="/oyun" element={<Game />} />
          <Route path="/Oyun" element={<Game />} />
          {/* Catch all route for 404 - this will handle all unknown routes */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
