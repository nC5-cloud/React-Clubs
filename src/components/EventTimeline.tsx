import React from 'react';
import {Clock, MapPin, ExternalLink } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Drone Racing Workshop",
    club: "SKYWARD Aeronautics",
    date: "Jan 12, 2026",
    time: "4:30 PM",
    location: "LHC Seminar Hall 1",
    tag: "Workshop",
    color: "violet"
  },
  {
    id: 2,
    title: "Hack-a-Night v4.0",
    club: "BYTECRAFT Collective",
    date: "Jan 15, 2026",
    time: "9:00 AM (24h)",
    location: "Main Auditorium",
    tag: "Hackathon",
    color: "violet"
  },
  {
    id: 3,
    title: "Battle Bots: Assembly",
    club: "NEXUS Robotics",
    date: "Jan 18, 2026",
    time: "2:00 PM",
    location: "Mechanical Workshop",
    tag: "Hands-on",
    color: "violet"
  }
];

export default function EventTimeline() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-violet-400 font-medium tracking-wider text-sm uppercase">Don't Miss Out</span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-4">Campus Pulse ⚡</h1>
          <p className="text-slate-400">Upcoming events, workshops, and meetups at NMIT.</p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 flex flex-col md:flex-row gap-6 items-start md:items-center">
              
              {/* Date Box */}
              <div className="shrink-0 w-full md:w-24 bg-slate-800 rounded-xl p-3 text-center border border-slate-700 group-hover:border-violet-500/30 transition-colors">
                <div className="text-2xl font-bold text-white">{event.date.split(' ')[1]}</div>
                <div className="text-xs font-medium text-slate-400 uppercase">{event.date.split(' ')[0]}</div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded text-${event.color}-300 bg-${event.color}-500/10 border border-${event.color}-500/20`}>
                    {event.tag}
                  </span>
                  <span className="text-slate-400 text-sm">• {event.club}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-violet-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-violet-400" />
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full md:w-auto px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-violet-400 hover:text-white transition-all flex items-center justify-center">
                Register
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}