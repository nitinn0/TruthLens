import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const articles = [
  {
    img: img1,
    tags: ["Technology", "AI News"],
    title: "AI Detects Fake News with 95% Accuracy",
    desc: "New breakthrough in AI technology helps identify misleading information in news articles.",
    time: "2 mins",
  },
  {
    img: img2,
    tags: ["Media", "Analysis"],
    title: "How to Spot Fake News Online",
    desc: "Learn the key indicators that help distinguish between real and fake news stories.",
    time: "3 mins",
  },
  {
    img: img3,
    tags: ["Education", "Tools"],
    title: "Best Tools for Fact-Checking News",
    desc: "A comprehensive guide to the most effective tools for verifying news authenticity.",
    time: "4 mins",
  },
  {
    img: img4,
    tags: ["Research", "Technology"],
    title: "The Future of News Verification",
    desc: "Exploring how AI and blockchain are revolutionizing news verification processes.",
    time: "5 mins",
  },
  {
    img: img5,
    tags: ["Security", "Innovation"],
    title: "Advanced News Verification Techniques",
    desc: "Discover the latest methods and technologies in news verification and fact-checking.",
    time: "3 mins",
  },
];

export default function ArticleExamples() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white">
          Latest News & Examples
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
          {articles.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/90 mb-4">{item.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">{item.time}</span>
                  <span className="text-white text-xl hover:text-pink-200 transition duration-200">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 