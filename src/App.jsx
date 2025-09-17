import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleHeaderHeightChange = (height) => {
    setHeaderHeight(height);
  };

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* The Header is rendered outside of Routes to be on every page.
        We pass the function to it so that it updates the height.
      */}
      <Header onHeightChange={handleHeaderHeightChange} />

      <main className="container">
        <Routes>
          {/* We render the HomePage and pass the header height as a prop.
            The header height is initially 0, but is updated after the first render.
          */}
          <Route path="/" element={<HomePage headerHeight={headerHeight} />} />

          {/* Other routes don't need the header height */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;