import { IUser } from './ReduxUser';

interface IPost {
  id: string;
  content: string;
  images?: string[];
  videos?: string[];
  character?: string;
  cosplayer?: string;
  user: IUser;
  created_at?: string;
  updated_at?: string;
}

export type { IPost };
