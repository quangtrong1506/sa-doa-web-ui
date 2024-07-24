import { IUser } from '@/redux/features/user/user';

interface IPost {
  body?: string;
  character?: string;
  comment_count?: number;
  cosplayer?: string;
  created_ad: string; // ISO string
  deleted_ad?: string; // ISO string
  deleted_by?: string;
  description?: string;
  id: string;
  images?: string[];
  like_count?: number;
  slug: string;
  tags?: string[];
  title: string;
  updated_ad: string; // ISO string
  updated_by?: string;
  user: IUser;
  videos?: string[];
  view_count?: number;
  category?: string;
}

export type { IPost };
