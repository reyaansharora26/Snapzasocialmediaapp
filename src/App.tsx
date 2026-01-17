import { useState } from 'react';
import { Home, Compass, PlusSquare, Heart, User, Search } from 'lucide-react';
import { Feed } from './components/Feed';
import { Stories } from './components/Stories';
import { CreatePost } from './components/CreatePost';
import { Profile } from './components/Profile';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'explore' | 'profile'>('home');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Snapza
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative hover:text-purple-600 transition-colors">
              <Heart className="w-6 h-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <button className="md:hidden hover:text-purple-600 transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {activeView === 'home' && (
          <>
            <Stories />
            <Feed />
          </>
        )}
        {activeView === 'explore' && (
          <div className="text-center py-20">
            <Compass className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">Explore coming soon...</p>
          </div>
        )}
        {activeView === 'profile' && <Profile />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-5xl mx-auto px-4 py-2">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveView('home')}
              className={`p-2 transition-colors ${
                activeView === 'home' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Home className="w-7 h-7" fill={activeView === 'home' ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={() => setActiveView('explore')}
              className={`p-2 transition-colors ${
                activeView === 'explore' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Compass className="w-7 h-7" />
            </button>
            <button
              onClick={() => setShowCreatePost(true)}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <PlusSquare className="w-7 h-7" />
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Heart className="w-7 h-7" />
            </button>
            <button
              onClick={() => setActiveView('profile')}
              className={`p-2 transition-colors ${
                activeView === 'profile' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <User className="w-7 h-7" fill={activeView === 'profile' ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </nav>

      {/* Create Post Modal */}
      {showCreatePost && <CreatePost onClose={() => setShowCreatePost(false)} />}
    </div>
  );
}
