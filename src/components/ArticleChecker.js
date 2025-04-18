import React, { useState } from 'react';

const ArticleChecker = () => {
  const [articleText, setArticleText] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://172.16.91.85:8000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: articleText,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze article');
      }

      const data = await response.json();
      console.log('API Response:', data);

      setResult({
        isFake: data.isFake || false,
        confidence: data.confidence || 0,
        reasons: data.reasons || data.indicators || [],
      });
    } catch (err) {
      console.error('Error analyzing article:', err);
      setResult({
        isFake: false,
        confidence: 0,
        reasons: ['Error analyzing article. Please try again.'],
      });
    } finally {
      setIsLoading(false);
    }
    setTimeout(() => {
      setResult({
        isFake: Math.random() > 0.5,
        confidence: Math.floor(Math.random() * 100),
        reasons: [
          'Inconsistent sources',
          'Sensational language',
          'Lack of credible evidence'
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Check Article Authenticity
          </h1>
          
          <form onSubmit={handleCheck} className="space-y-6">
            <div>
              <label htmlFor="article" className="block text-sm font-medium text-gray-700 mb-2 mx-2">
                Paste your article Headline here
              </label>
              <textarea
                id="article"
                rows="10"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition duration-200 resize-none"
                placeholder="Enter the headline of any article you want to check.."
                value={articleText}
                onChange={(e) => setArticleText(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-3 px-6 rounded-lg font-semibold
                       hover:from-blue-700 hover:to-blue-900 transition duration-200 shadow-md"
              disabled={isLoading}
            >
              {isLoading ? 'Analyzing...' : 'Check Article'}
            </button>
          </form>

          {result && (
            <div className="mt-8 p-6 rounded-lg bg-gray-50 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Analysis Results
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium">Status:</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold
                    ${result.isFake ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {result.isFake ? 'Likely Fake' : 'Likely Real'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Confidence Score:</span>
                  <span className="ml-2 text-gray-900">{result.confidence}%</span>
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Key Indicators:</span>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    {result.reasons.map((reason, index) => (
                      <li key={index}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleChecker; 