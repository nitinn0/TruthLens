import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Targeted Content',
      description: 'Generate content tailored to specific audiences and demographics.'
    },
    {
      title: 'AI-Powered',
      description: 'Advanced AI algorithms to create convincing and engaging content.'
    },
    {
      title: 'Analytics',
      description: 'Track engagement and performance of your generated articles.'
    }
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white/95 p-6 rounded-xl border border-white/30 shadow-xl">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features; 