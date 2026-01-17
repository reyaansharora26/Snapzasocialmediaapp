import { useState } from 'react';
import { Post } from './Post';

export interface PostData {
  id: string;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  comments: Comment[];
  timestamp: string;
  liked: boolean;
}

interface Comment {
  id: string;
  username: string;
  text: string;
}

const mockPosts: PostData[] = [
  {
    id: '1',
    username: 'alex_photos',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY4NjI4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 342,
    caption: 'Beautiful sunset at the mountains 🌄',
    comments: [
      { id: '1', username: 'nature_lover', text: 'Stunning view!' },
      { id: '2', username: 'travel_diaries', text: 'Where is this?' },
    ],
    timestamp: '2 hours ago',
    liked: false,
  },
  {
    id: '2',
    username: 'foodie_life',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY4NjM4NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 521,
    caption: 'Homemade pasta night 🍝✨',
    comments: [
      { id: '1', username: 'chef_mike', text: 'Looks delicious!' },
    ],
    timestamp: '5 hours ago',
    liked: true,
  },
  {
    id: '3',
    username: 'urban_explorer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1495407123977-951ef41c11fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHl8ZW58MXx8fHwxNzY4NjQ1NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 789,
    caption: 'City lights never disappoint 🌃',
    comments: [],
    timestamp: '1 day ago',
    liked: false,
  },
  {
    id: '4',
    username: 'travel_diaries',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY4NjI4MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 1243,
    caption: 'Adventure awaits! 🏔️ #wanderlust',
    comments: [
      { id: '1', username: 'alex_photos', text: 'Amazing shot!' },
      { id: '2', username: 'nature_lover', text: 'On my bucket list!' },
      { id: '3', username: 'urban_explorer', text: 'Take me with you!' },
    ],
    timestamp: '2 days ago',
    liked: true,
  },
];

export function Feed() {
  const [posts, setPosts] = useState<PostData[]>(mockPosts);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    }));
  };

  const handleComment = (postId: string, commentText: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: Date.now().toString(),
              username: 'you',
              text: commentText,
            },
          ],
        };
      }
      return post;
    }));
  };

  return (
    <div className="space-y-6 pb-20">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
        />
      ))}
    </div>
  );
}
