import React from 'react';

const ArticlePreview = ({ generatedArticle }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/30">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 font-['Poppins']">Article Preview</h2>
      {generatedArticle ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{generatedArticle.category}</span>
            <span>{generatedArticle.date}</span>
            <span>{generatedArticle.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{generatedArticle.title}</h3>
          <p className="text-gray-600 leading-relaxed">{generatedArticle.content}</p>
          <div className="flex justify-end space-x-4 mt-6">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition duration-300">
              Edit
            </button>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300">
              Publish
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-lg">
          <p className="text-gray-400 text-center">
            Your generated article will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticlePreview; 