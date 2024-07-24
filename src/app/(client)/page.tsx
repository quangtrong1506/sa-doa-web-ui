'use client';
import PostItem from '@/presentation/components/reuse/post';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center mt-5">
      <div className="flex 2xl:w-[680px] xl:w-[620px] lg:w-[550px] w-full">
        <PostItem className="lg:rounded-lg rounded-none py-3 md:py-4 lg:py-6 px-2 md:px-4 lg:px-6" />
      </div>
    </div>
  );
};
export default HomePage;
