import { Settings, Grid3x3, Bookmark, Tag } from 'lucide-react';

const userPosts = [
  'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1495407123977-951ef41c11fc?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop',
];

export function Profile() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Profile Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-8 mb-6">
          <img
            src="https://images.unsplash.com/photo-1591461283504-48919ae873f8?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xl font-semibold">your_username</h2>
              <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-sm transition-colors">
                Edit Profile
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="w-6 h-6" />
              </button>
            </div>
            <div className="flex gap-8 mb-4">
              <div>
                <span className="font-semibold">52</span>
                <span className="text-gray-600 ml-1">posts</span>
              </div>
              <div>
                <span className="font-semibold">1,284</span>
                <span className="text-gray-600 ml-1">followers</span>
              </div>
              <div>
                <span className="font-semibold">892</span>
                <span className="text-gray-600 ml-1">following</span>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-1">Your Name</p>
              <p className="text-sm text-gray-600">
                🎨 Creative enthusiast<br />
                📸 Photography lover<br />
                🌍 Exploring the world one post at a time
              </p>
            </div>
          </div>
        </div>

        {/* Story Highlights */}
        <div className="flex gap-6 pt-4 border-t border-gray-200 overflow-x-auto">
          {['Travel', 'Food', 'Nature', 'Friends'].map((highlight, index) => (
            <div key={index} className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl">{['✈️', '🍕', '🌿', '👥'][index]}</span>
                </div>
              </div>
              <span className="text-xs text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button className="flex-1 py-3 flex items-center justify-center gap-2 border-b-2 border-gray-900">
            <Grid3x3 className="w-5 h-5" />
            <span className="text-sm font-semibold hidden md:inline">POSTS</span>
          </button>
          <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600">
            <Bookmark className="w-5 h-5" />
            <span className="text-sm font-semibold hidden md:inline">SAVED</span>
          </button>
          <button className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600">
            <Tag className="w-5 h-5" />
            <span className="text-sm font-semibold hidden md:inline">TAGGED</span>
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1">
          {userPosts.map((post, index) => (
            <button
              key={index}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={post}
                alt={`Post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
