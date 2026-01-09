import { Search } from 'lucide-react';
import { useState } from 'react';
import ClubCard from './ClubCard';

const sampleClubs = [
  {
    id: 1,
    name: 'SKYWARD Aeronautics Society',
    description: 'A hands-on aeronautical club where students design, build, and fly UAVs, gliders, and experimental aircraft models. From wind tunnel theory to real flight tests, this is where aviation dreams take off.',
    image: '/aero.png',
    members: 156,
    category: 'Tech',
    vibeTags: ['#AviationNerds', '#BuildFlyRepeat', '#FuturePilots'],
  },
  {
    id: 2,
    name: 'BYTECRAFT Collective',
    description: 'A creative tech club focused on coding, AI, app development, and hackathons. From midnight debugging sessions to shipping real products, it\'s where ideas turn into code.',
    image: '/coding.png',
    members: 203,
    category: 'Tech',
    vibeTags: ['#Geeky', '#Innovative', '#HackathonEnergy'],
  },
  {
    id: 3,
    name: 'NEXUS Robotics Society',
    description: 'This club dives deep into robotics, automation, and future tech through projects and competitions. Think sensors, motors, AI, and robots that actually move.',
    image: '/robotics.png',
    members: 128,
    category: 'Tech',
    vibeTags: ['#FutureTech', '#ProblemSolvers', '#RoboticsNerds'],
  },
  {
    id: 4,
    name: 'RHYTHM & ROOTS',
    description: 'A vibrant space celebrating music, dance, and cultural expression from all backgrounds. From stage performances to flash mobs, this club owns the spotlight.',
    image: '/dance.png',
    members: 89,
    category: 'Cultural',
    vibeTags: ['#ExpressYourself', '#CreativeSouls', '#StageReady'],
  },
  {
    id: 5,
    name: 'LENS & LORE Society',
    description: 'A storytelling club for photographers, filmmakers, writers, and visual artists. Every event is about capturing emotions and turning moments into art.',
    image: '/lit.png',
    members: 74,
    category: 'Cultural',
    vibeTags: ['#Aesthetic', '#Storytellers', '#CreativeVibes'],
  },
  {
    id: 6,
    name: 'INVICTUS Sports Union',
    description: 'A competitive and energetic sports club that brings athletes from all disciplines together. From intense practice sessions to inter-college tournaments, it\'s all about team spirit.',
    image: '/sports.png',
    members: 112,
    category: 'Sports',
    vibeTags: ['#NoLimits', '#TeamSpirit', '#GameOn'],
  },
];

export default function ClubDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClubs = sampleClubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.vibeTags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div id="clubs-section" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Our Clubs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Find the perfect community that matches your interests and passions
          </p>

          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clubs by name, description, or vibe tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-gray-800/40 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <ClubCard key={club.id} {...club} />
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No clubs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
