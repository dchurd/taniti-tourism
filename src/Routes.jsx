import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import AttractionDetail from './pages/AttractionDetail';
import Plan from './pages/Plan';
import Contact from './pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/attraction/:id" element={<AttractionDetail />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}