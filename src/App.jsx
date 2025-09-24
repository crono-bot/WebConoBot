import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactoPage from './pages/ContactoPage'; // Importa ContactoPage

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleHeaderHeightChange = (height) => {
    setHeaderHeight(height);
  };

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header onHeightChange={handleHeaderHeightChange} />

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage headerHeight={headerHeight} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactoPage />} /> {/* Nueva ruta */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;