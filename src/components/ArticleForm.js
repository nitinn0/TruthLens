import React from 'react';

const ArticleForm = ({ formData, handleChange, handleSubmit, isLoading }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/30">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 font-['Poppins']">Generate Article</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Article Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 
                     focus:border-transparent text-gray-800 placeholder-gray-400
                     transition duration-200 font-['Inter']"
            placeholder="Enter a sensational headline"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Article Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 
                     focus:border-transparent text-gray-800 placeholder-gray-400
                     transition duration-200 font-['Inter'] h-32"
            placeholder="Write your article content here..."
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent text-gray-800
                       transition duration-200 font-['Inter']"
            >
              <option value="politics">Politics</option>
              <option value="technology">Technology</option>
              <option value="entertainment">Entertainment</option>
              <option value="sports">Sports</option>
              <option value="science">Science</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tone
            </label>
            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent text-gray-800
                       transition duration-200 font-['Inter']"
            >
              <option value="neutral">Neutral</option>
              <option value="sensational">Sensational</option>
              <option value="controversial">Controversial</option>
              <option value="humorous">Humorous</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 
                     focus:border-transparent text-gray-800 placeholder-gray-400
                     transition duration-200 font-['Inter']"
            placeholder="Enter keywords..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience
          </label>
          <select
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 
                     focus:border-transparent text-gray-800
                     transition duration-200 font-['Inter']"
          >
            <option value="general">General Public</option>
            <option value="young">Young Adults</option>
            <option value="elderly">Elderly</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-4 rounded-lg 
                   transition duration-300 ease-in-out transform hover:scale-105 hover:from-blue-700 hover:to-purple-700
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 font-['Inter']"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </span>
          ) : (
            'Generate Article'
          )}
        </button>
      </form>
    </div>
  );
};

export default ArticleForm; 