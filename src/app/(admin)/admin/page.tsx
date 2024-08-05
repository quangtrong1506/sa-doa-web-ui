import { Metadata } from 'next';
import DefaultLayout from '@/presentation/components/admin-components/layouts/DefaultLayout';

export const metadata: Metadata = {
  title: 'Admin',
  description:
    'Trang quản trị - Website Ốc Sa Đoạ - Website chia sẻ tài liệu nghiên cứu khoa học lớn nhất thế giới',
};

const AdminPage = () => {
  return (
    <DefaultLayout>
      <div>Test</div>
    </DefaultLayout>
  );
};

export default AdminPage;
