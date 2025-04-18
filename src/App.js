import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ArticleChecker from './components/ArticleChecker';
import FakeArticles from './components/FakeArticles';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article-checker" element={<ArticleChecker />} />
            <Route path="/fake-articles" element={<FakeArticles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 