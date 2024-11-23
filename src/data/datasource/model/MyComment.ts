import { User } from '@/data/datasource/model/api/User';


declare interface MyComment {
   id: string;
   content: string;
   author: User;
   post_id: string;
   updated_ad?: string;
   created_ad?: string;
   deleted_ad?: string;
}

export type { MyComment };
