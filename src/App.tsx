import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './locales/i18n';
import { Contact } from './Features/Contact/Routes';
import { Technologies } from './Features/Technologies/Routes';
import { AIApproach } from './Features/AIApproach/Routes';
import { Patents } from './Features/Patents/Routes';
import { Game } from './Features/Game/Routes';
import { NoPage } from './Features/NoPage/Routes';
import Layout from './Components/Layout/Layout';
import { Home } from './Features/Home/Routes';

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
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
