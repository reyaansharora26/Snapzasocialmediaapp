import { useState } from 'react';

export interface Story {
  id: string;
  username: string;
  avatar: string;
  viewed: boolean;
}

const mockStories: Story[] = [
  { id: '1', username: 'Your Story', avatar: 'https://images.unsplash.com/photo-1591461283504-48919ae873f8?w=150&h=150&fit=crop', viewed: false },
  { id: '2', username: 'alex_photos', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop', viewed: false },
  { id: '3', username: 'travel_diaries', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop', viewed: true },
  { id: '4', username: 'foodie_life', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop', viewed: false },
  { id: '5', username: 'urban_explorer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', viewed: true },
  { id: '6', username: 'nature_lover', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop', viewed: false },
];

export function Stories() {
  const [stories] = useState<Story[]>(mockStories);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 overflow-hidden">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-1 flex-shrink-0 group"
          >
            <div
              className={`w-16 h-16 rounded-full p-[2px] ${
                story.viewed
                  ? 'bg-gray-300'
                  : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600'
              }`}
            >
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <img
                  src={story.avatar}
                  alt={story.username}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
            <span className="text-xs text-gray-700 max-w-[70px] truncate">
              {story.username}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
