import { CosplayerProps } from '../cosplayer';
import { UserProps } from '../user';
import { CommentProps } from './comment';

declare interface PostProps {
   author?: UserProps;
   category?: string;
   character?: string;
   content?: string;
   cosplayer?: CosplayerProps;
   description?: string;
   id: string;
   slug?: string;
   tags?: string[];
   title?: string;
   comments?: CommentProps[];
   //
   images?: string[];
   thumbnail?: string;
   videos?: string[];
   //Time
   created_ad?: string; // ISO Time string
   deleted_ad?: string; // ISO Time string
   published_ad?: string; // ISO Time string
   updated_ad?: string; // ISO Time string
   //
   deleted_by?: string;
   updated_by?: string;
   //
   comment_count?: number;
   like_count?: number;
   view_count?: number;
}

export { PostProps };
