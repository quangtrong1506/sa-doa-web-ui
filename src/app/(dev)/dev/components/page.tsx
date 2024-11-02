import { BuildConfig } from '@/config/config';
import { Cosplayer, User } from '@/data/datasource/model';
import { Post } from '@/data/datasource/model/Post';
import PostItem from '@/presentation/components/reuse/post';

const user: User = BuildConfig.USER_LIST[0];

const POST_DEMO: Post = {
   id: '1',
   author: user,
   character: 'Sagiri Izumi',
   cosplayer: {
      id: 'cosplayer-1',
      name: 'Ria Kurumi',
   } as Cosplayer,
   tags: ['cosplay', 'nude'],
   created_ad: new Date('2024-04-14').toISOString(),
   updated_ad: new Date('2024-04-14').toISOString(),
   content: 'Ria Kurumi cosplay Vampire – Azur Lane “60 photos and 1 video”',
   images: BuildConfig.IMAGES_DEFAULT,
};
const DemoComponentPage = () => {
   return (
      <div className="flex w-full p-5">
         <div className="flex w-full gap-3">
            <div className="w-1/2">
               <PostItem />
            </div>
            <div className="w-1/2">
               <PostItem post={POST_DEMO} />
            </div>
         </div>
      </div>
   );
};

export default DemoComponentPage;
