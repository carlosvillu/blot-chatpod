import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2, MessageSquare, Brain, Sparkles } from 'lucide-react';

const Landing = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Podcasts Through AI Conversations!!!
            </h1>
            <p className="text-xl mb-8">
              Explore podcast content in a new way with our intelligent chatbot
            </p>
            <Link
              to="/podcasts"
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PodcastAI</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-purple-600" />}
            title="AI-Powered Insights"
            description="Get intelligent answers about podcast content through natural conversations"
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-purple-600" />}
            title="Interactive Chat"
            description="Engage with podcast content through our sophisticated chatbot interface"
          />
          <FeatureCard
            icon={<Sparkles className="h-8 w-8 text-purple-600" />}
            title="Audio Clips"
            description="Receive relevant audio snippets directly from podcasts in chat responses"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-8">Join our community and explore podcasts in a new way</p>
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Landing;