import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Star } from 'lucide-react';

const SAMPLE_PODCASTS = [
  {
    id: 1,
    title: "Tech Talk Weekly",
    host: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&auto=format&fit=crop&q=60",
    category: "Technology",
    rating: 4.8
  },
  {
    id: 2,
    title: "Business Insights",
    host: "Mark Thompson",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=60",
    category: "Business",
    rating: 4.6
  },
  {
    id: 3,
    title: "Science Today",
    host: "Dr. Emily Chen",
    image: "https://images.unsplash.com/photo-1576264521713-e82f24f44431?w=800&auto=format&fit=crop&q=60",
    category: "Science",
    rating: 4.9
  }
];

const PodcastList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Explore Podcasts</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PODCASTS.map((podcast) => (
          <div key={podcast.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src={podcast.image} 
              alt={podcast.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{podcast.title}</h3>
                  <p className="text-gray-600">{podcast.host}</p>
                </div>
                <span className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1">{podcast.rating}</span>
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>Latest Episode: 2h ago</span>
              </div>
              
              <Link 
                to={`/chat/${podcast.id}`}
                className="flex items-center justify-center w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Conversation
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastList;