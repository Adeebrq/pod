import { Calendar, Clock, Users, MapPin, Briefcase, Lightbulb } from 'lucide-react';
import React, { useState } from 'react';

const eventsData = [
  {
    id: 1,
    title: "Tech Innovators Summit 2025",
    date: "March 15, 2025",
    time: "9:00 AM - 5:00 PM",
    capacity: "200 Attendees",
    location: "Bangalore Tech Park",
    category: "Conference",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "Join industry leaders and tech innovators for a full-day summit exploring AI, blockchain, and emerging technologies. Network with CTOs, developers, and entrepreneurs while attending workshops, panel discussions, and hands-on demos of cutting-edge solutions."
  },
  {
    id: 2,
    title: "Speed Networking Evening",
    date: "March 22, 2025",
    time: "6:00 PM - 9:00 PM",
    capacity: "80 Attendees",
    location: "Downtown Business Hub",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    description: "Fast-paced networking event designed for professionals to make meaningful connections in minutes. Participate in structured speed networking sessions, exchange business cards, and discover potential collaborations across diverse industries in a relaxed atmosphere."
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    date: "April 5, 2025",
    time: "7:00 PM - 10:00 PM",
    capacity: "150 Attendees",
    location: "Innovation Center",
    category: "Pitch Event",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    description: "Watch promising startups pitch their ideas to angel investors and venture capitalists. Connect with founders, investors, and fellow entrepreneurs while enjoying refreshments. Network during breaks and discover investment opportunities in India's thriving startup ecosystem."
  },
  {
    id: 4,
    title: "Digital Marketing Masterclass",
    date: "April 12, 2025",
    time: "10:00 AM - 4:00 PM",
    capacity: "100 Attendees",
    location: "Creative Spaces Mumbai",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    description: "Interactive workshop covering SEO, social media strategy, content marketing, and analytics. Learn from industry experts through hands-on exercises and real-world case studies. Perfect for marketers, business owners, and aspiring digital professionals seeking practical skills."
  },
  {
    id: 5,
    title: "Women in Tech Roundtable",
    date: "April 18, 2025",
    time: "5:30 PM - 8:30 PM",
    capacity: "50 Attendees",
    location: "Cyber City Conference Room",
    category: "Roundtable",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    description: "Intimate roundtable discussion bringing together women leaders in technology to share experiences, insights, and strategies for career growth. Engage in meaningful conversations about leadership challenges, mentorship, and driving innovation in male-dominated fields."
  },
  {
    id: 6,
    title: "Product Launch Showcase",
    date: "April 25, 2025",
    time: "6:30 PM - 9:30 PM",
    capacity: "300 Attendees",
    location: "Grand Convention Hall",
    category: "Launch Event",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    description: "Exclusive product launch event unveiling innovative SaaS solutions for enterprise clients. Experience live demonstrations, interactive booth displays, and Q&A sessions with product teams. Network with industry analysts, early adopters, and technology journalists."
  }
];

function EventCard({ event, index }) {
  const [showMore, setShowMore] = useState(false);
  const isBlue = index % 2 === 1;
  
  return (
    <div className={`w-[60%] max-w-2xl ${isBlue ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-white'} rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl`}>
      {/* Hero Section with Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-6 right-6">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${isBlue ? 'bg-white/20 text-white' : 'bg-blue-600 text-white'} backdrop-blur-sm`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-8">
        <h2 className={`text-3xl font-semibold mb-6 ${isBlue ? 'text-white' : 'text-gray-900'}`}>
          {event.title}
        </h2>

        {/* Event Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`flex items-center gap-3 ${isBlue ? 'text-blue-100' : 'text-gray-700'}`}>
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className={`flex items-center gap-3 ${isBlue ? 'text-blue-100' : 'text-gray-700'}`}>
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{event.time}</span>
          </div>
          <div className={`flex items-center gap-3 ${isBlue ? 'text-blue-100' : 'text-gray-700'}`}>
            <Users className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{event.capacity}</span>
          </div>
          <div className={`flex items-center gap-3 ${isBlue ? 'text-blue-100' : 'text-gray-700'}`}>
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className={`${isBlue ? 'text-blue-50' : 'text-gray-600'} text-base leading-relaxed mb-6`}>
          <p className={showMore ? '' : ''}>
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NetworkEventCard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">Connect, Learn, and Grow with Industry Professionals</p>
        </div>
        
        <div className="flex flex-col items-center gap-12">
          {eventsData.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
