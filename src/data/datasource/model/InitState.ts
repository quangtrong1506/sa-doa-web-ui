import { User } from '@/data/datasource/model/api/User';
import { Post } from '@/data/datasource/model/Post';
import { MyUrl } from '@/data/datasource/model/MyUrl';

interface InitState {
  isLoading: boolean;
}

interface UserState extends InitState {
  user?: User,
}

interface PostState extends InitState {
  post?: Post,
}

interface UrlState extends InitState {
  url?: MyUrl,
}

export type { InitState, UserState, PostState, UrlState };