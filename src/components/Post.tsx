import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';
import { PostData } from './Feed';

interface PostProps {
  post: PostData;
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: string) => void;
}

export function Post({ post, onLike, onComment }: PostProps) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [saved, setSaved] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
            <p className="text-xs text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button className="text-gray-600 hover:text-gray-900">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLike(post.id)}
              className="hover:text-gray-500 transition-colors"
            >
              <Heart
                className={`w-6 h-6 ${post.liked ? 'fill-red-500 text-red-500' : ''}`}
              />
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="hover:text-gray-500 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-500 transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className="hover:text-gray-500 transition-colors"
          >
            <Bookmark className={`w-6 h-6 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Likes Count */}
        <p className="font-semibold text-sm mb-2">{post.likes.toLocaleString()} likes</p>

        {/* Caption */}
        <div className="text-sm mb-2">
          <span className="font-semibold mr-2">{post.username}</span>
          <span>{post.caption}</span>
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <>
            {!showComments ? (
              <button
                onClick={() => setShowComments(true)}
                className="text-sm text-gray-500 hover:text-gray-700 mb-2"
              >
                View all {post.comments.length} comments
              </button>
            ) : (
              <div className="space-y-2 mb-2">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="text-sm">
                    <span className="font-semibold mr-2">{comment.username}</span>
                    <span>{comment.text}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Add Comment */}
        <form onSubmit={handleCommentSubmit} className="flex items-center gap-2 pt-2 border-t border-gray-100">
          <button type="button" className="text-gray-600 hover:text-gray-900">
            <Smile className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 outline-none text-sm"
          />
          {commentText.trim() && (
            <button
              type="submit"
              className="text-sm font-semibold text-purple-600 hover:text-purple-700"
            >
              Post
            </button>
          )}
        </form>
      </div>
    </article>
  );
}
