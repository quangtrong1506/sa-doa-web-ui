import { User } from '@/data/datasource/model/api/User';
import { Cosplayer } from '@/data/datasource/model/Cosplayer';
import { MyComment } from '@/data/datasource/model/MyComment';

declare interface Post {
   author?: User;
   category?: string;
   character?: string;
   content?: string;
   cosplayer?: Cosplayer;
   description?: string;
   id: string;
   slug?: string;
   tags?: string[];
   title?: string;
   comments?: MyComment[];
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

export type { Post };
