import { useState } from 'react';
import { X, Image, Type, Smile } from 'lucide-react';

interface CreatePostProps {
  onClose: () => void;
}

export function CreatePost({ onClose }: CreatePostProps) {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = () => {
    // Mock image selection
    const mockImages = [
      'https://images.unsplash.com/photo-1591461283504-48919ae873f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3Njg2Mzg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4NjI4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY4NjM4NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ];
    setSelectedImage(mockImages[Math.floor(Math.random() * mockImages.length)]);
  };

  const handlePost = () => {
    // Mock post creation
    alert('Post created! (In a real app, this would save to the backend)');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X className="w-6 h-6" />
          </button>
          <h2 className="font-semibold text-lg">Create New Post</h2>
          <button
            onClick={handlePost}
            disabled={!selectedImage && !caption}
            className="text-purple-600 font-semibold hover:text-purple-700 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Share
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Image Preview or Upload */}
          {selectedImage ? (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full aspect-square object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="aspect-square flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="flex justify-center gap-4 mb-4">
                  <button
                    onClick={handleImageSelect}
                    className="p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    <Image className="w-8 h-8" />
                  </button>
                </div>
                <p className="text-gray-600 text-lg mb-2">Add photos or videos</p>
                <button
                  onClick={handleImageSelect}
                  className="text-sm text-purple-600 font-semibold hover:text-purple-700"
                >
                  Select from computer
                </button>
              </div>
            </div>
          )}

          {/* Caption */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1591461283504-48919ae873f8?w=150&h=150&fit=crop"
                alt="Your avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Write a caption..."
                  className="w-full outline-none resize-none text-sm"
                  rows={4}
                />
                <div className="flex items-center gap-3 mt-2">
                  <button className="text-gray-600 hover:text-gray-900">
                    <Smile className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-gray-400">
                    {caption.length}/2,200
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="px-4 pb-4 space-y-3">
            <div className="flex items-center justify-between py-3 border-t border-gray-200">
              <span className="text-sm">Add location</span>
              <button className="text-sm text-purple-600 hover:text-purple-700">
                Add
              </button>
            </div>
            <div className="flex items-center justify-between py-3 border-t border-gray-200">
              <span className="text-sm">Tag people</span>
              <button className="text-sm text-purple-600 hover:text-purple-700">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
