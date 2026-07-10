import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Organization from './pages/Organization';
import Activities from './pages/Activities';
import Events from './pages/Events';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import Documents from './pages/Documents';
import ProvinceDjiri from './pages/ProvinceDjiri';
import Eec from './pages/Eec';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="historique" element={<History />} />
          <Route path="organigramme" element={<Organization />} />
          <Route path="activites" element={<Activities />} />
          <Route path="evenements" element={<Events />} />
          <Route path="galerie-photos" element={<PhotoGallery />} />
          <Route path="galerie-videos" element={<VideoGallery />} />
          <Route path="documents" element={<Documents />} />
          <Route path="province-djiri" element={<ProvinceDjiri />} />
          <Route path="eec" element={<Eec />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
