import { UserProps } from '../user';

declare interface CommentProps {
   id: string;
   content: string;
   author: UserProps;
   post_id: string;
   updated_ad?: string;
   created_ad?: string;
   deleted_ad?: string;
}

export type { CommentProps };
