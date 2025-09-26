import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import AboutPage from './components/AboutPage.tsx';
import ContactPage from './components/ContactPage.tsx';
import Footer from './components/Footer.tsx';
import Products from './components/Products.tsx';
import Navigation from './components/Navigation.tsx';
import Getstarted from './components/Getstarted.tsx';
import Logout from './components/Logout.tsx';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;