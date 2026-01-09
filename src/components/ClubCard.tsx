import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

interface ClubCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  members: number;
  category: string;
  vibeTags: string[];
}

// Fixed: Removed the stray character above this line
// Fixed: Removed 'id' from props since we don't use it inside the card design
export default function ClubCard({ name, description, image, members, category, vibeTags }: ClubCardProps) {
  return (
    <div className="group flex flex-col bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 h-full">
      
      {/* 1. IMAGE SECTION (Fixed Height) */}
      <div className="h-48 w-full overflow-hidden relative shrink-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-bold bg-black/70 text-white rounded-full backdrop-blur-md border border-white/10">
            {category}
          </span>
        </div>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
            {name}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-auto">
          {vibeTags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider bg-violet-500/10 text-violet-300 rounded-md border border-violet-500/20">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-700">
          <div className="flex items-center text-slate-400 text-xs">
            <Users className="w-3 h-3 mr-1.5" />
            {members} Members
          </div>
          
          <button className="flex items-center text-sm font-medium text-white hover:text-violet-400 transition-colors group/btn">
            Details
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}