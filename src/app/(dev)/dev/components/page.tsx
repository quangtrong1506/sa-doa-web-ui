import { CosplayerProps } from '@/modules/cosplayer';
import { POST_IMAGES, PostProps } from '@/modules/post';
import { UserProps } from '@/modules/user/user';
import PostItem from '@/presentation/components/reuse/post';
const POST_DEMO: PostProps = {
   id: '1',
   author: {
      id: 'user-1',
      name: 'Trọng Sa Đoạ',
      role: 'admin',
      status: 'active',
      avatar: '/images/logo.png',
   } as UserProps,
   character: 'Sagiri Izumi',
   cosplayer: {
      id: 'cosplayer-1',
      name: 'Ria Kurumi',
   } as CosplayerProps,
   tags: ['cosplay', 'nude'],
   created_ad: new Date('2024-04-14').toISOString(),
   updated_ad: new Date('2024-04-14').toISOString(),
   content: 'Ria Kurumi cosplay Vampire – Azur Lane “60 photos and 1 video”',
   images: POST_IMAGES,
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
