import PostItem from '@/presentation/components/reuse/post';
import { Post } from '@/data/datasource/model/Post';
import { Cosplayer, Role, Status, User } from '@/data/datasource/model';
import { BuildConfig } from '@/config/config';

const user: User = {
  email: '',
  id: 'user-1',
  name: BuildConfig.USER,
  password: BuildConfig.PASSWORD,
  role: Role.User,
  status: Status.Active,
  avatar: BuildConfig.DEFAULT_USER_AVATAR,
};

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
  images: BuildConfig.IMAGES_18,
};
const DemoComponentPage = () => {
  return (
    <div className="flex w-full p-5">
      <div className="flex w-full gap-3">
        <div className="w-1/2">
          <PostItem />
        </div>
        <div className="w-1/2">
          <PostItem post={POST_DEMO}/>
        </div>
      </div>
    </div>
  );
};

export default DemoComponentPage;
