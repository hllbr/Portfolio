import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Home } from './features/Home/Routes';
import { Contact } from './features/Contact/Routes';
import { Technologies } from './features/Technologies/Routes';
import { AIApproach } from './features/AIApproach/Routes';
import { Patents } from './features/Patents/Routes';
import { NoPage } from './features/NoPage/Routes';
import './styles/globals.css';
import './locales/i18n';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/anasayfa" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/teknolojiler" element={<Technologies />} />
          <Route path="/ai" element={<AIApproach />} />
          <Route path="/artificial-intelligence" element={<AIApproach />} />
          <Route path="/yapay-zeka" element={<AIApproach />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/patentler" element={<Patents />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
