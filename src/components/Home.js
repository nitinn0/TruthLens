import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShieldAlt, FaBolt, FaThumbsUp } from 'react-icons/fa';
import ArticleExamples from './ArticleExamples';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-gray-700">
              DETECT FAKE NEWS with AI
            </h1>
            <p className="text-lg md:text-lg mb-8 max-w-xl mx-auto text-gray-600">
              With <span className="text-blue-600 font-semibold">AI News Detector</span>, you can effortlessly identify fake news  
              without needing any technical skills.
            </p>
            <Link
              to="/article-checker"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-bold 
                       hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </div>
      <ArticleExamples />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mt-14 mb-20 text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-screen-lg mx-auto">
          <div className="flex items-start space-x-6">
            <div className="bg-blue-600 p-7 rounded-xl text-white text-3xl">
              <FaSearch />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Article Analysis</h3>
              <p className="text-lg text-gray-700 mt-2">
                Simply paste your article text and let our AI analyze it for authenticity.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="bg-purple-600 p-7 rounded-xl text-white text-3xl">
              <FaShieldAlt />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Verify Content</h3>
              <p className="text-lg text-gray-700 mt-2">
                Our AI checks for patterns, sources, and factual accuracy in the content.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="bg-yellow-500 p-7 rounded-xl text-white text-3xl">
              <FaBolt />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Quick Results</h3>
              <p className="text-lg text-gray-700 mt-2">
                Get instant feedback with detailed analysis and confidence scores.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="bg-green-500 p-7 rounded-xl text-white text-3xl">
              <FaThumbsUp />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Easy to Use</h3>
              <p className="text-lg text-gray-700 mt-2 mb-16">
                Simple interface makes it easy to check any article's authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home; 