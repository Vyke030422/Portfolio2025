import { Routes, Route } from 'react-router';
import AboutPage from './pages/aboutpage';
import HomePage from './pages/homepage';
import CanlineCaseStudy from './pages/canlinecasestudy';
import ContactPage from './pages/contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cancerline-casestudy" element={<CanlineCaseStudy />} />
      <Route path="/contactpage" element={<ContactPage/>} />
    </Routes>
  );
}