import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Đường đẫn không tồn tại hoặc nội dung đã bị xoá',
  description: 'Ốc Sa Đoạ - Website chia sẻ tài liệu nghiên cứu khoa học lớn nhất thế giới',
};
const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <div className="h-32 overflow-hidden">
        <div className="string-404 font-bold">
          <span className="string-root h-32 string-404-1 text-9xl">404</span>
          <span className="flex justify-center items-center string-root h-32 string-404-2 text-[red] sm:text-9xl text-6xl">
            <span> Not Found</span>
          </span>
          <span className="string-root h-32 string-404-3 text-[yellow] text-9xl">404</span>
          <span className="flex justify-center items-center string-root h-32 string-404-4 text-[orange] sm:text-9xl text-6xl">
            <span> Not Found</span>
          </span>
        </div>
      </div>
      <div className="mt-6">
        <Link
          className="text-main text-xl rounded-md p-1 px-3 border border-main hover:bg-main hover:text-white transition-all duration-300"
          href={'/'}
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
