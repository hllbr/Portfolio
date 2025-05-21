import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Technologies from './pages/Technologies';
import AIApproach from './pages/AIApproach';
import Patents from './pages/Patents';
import PromptGallery from './pages/PromptGallery';
import NoPage from './pages/NoPage';
import Experience from './pages/Experience';
import './styles/globals.css';
import './locales/i18n';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/ai-approach" element={<AIApproach />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/prompt-gallery" element={<PromptGallery />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
