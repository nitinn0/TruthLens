import React, { useState } from 'react';

const FakeArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://172.16.91.85:8000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: searchText,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze article');
      }

      const data = await response.json();
      console.log('API Response:', data);

      const formattedData = [
        {
          title: 'Analysis Result',
          content: searchText,
          reasons: data.reasons || data.indicators || [],
        },
      ];

      setArticles(formattedData);
    } catch (err) {
      setError(err.message);
      console.error('Error analyzing article:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Article Analysis
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label htmlFor="article-text" className="block text-sm font-medium text-gray-700 mb-2">
                Enter article text to analyze
              </label>
              <textarea
                id="article-text"
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Paste the article text you want to analyze..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing...' : 'Analyze Article'}
            </button>
          </form>
        </div>

        {error && (
          <div className="max-w-3xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {loading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Analyzing article...</p>
          </div>
        )}

        {!loading && articles.length > 0 && (
          <div className="grid grid-cols-1 gap-8">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {article.title}
                    </h2>
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      article.isFake ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {article.isFake ? 'Fake News' : 'Real News'}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {article.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{article.date}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.fakeScore >= 70 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      Fake News Probability: {article.fakeScore}%
                    </span>
                  </div>

                  {article.reasons && article.reasons.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Key Indicators:</h3>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {article.reasons.map((reason, idx) => (
                          <li key={idx}>{reason}</li>
                        ))}
                      </ul>
                    </div>
                  )}


                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FakeArticles;
