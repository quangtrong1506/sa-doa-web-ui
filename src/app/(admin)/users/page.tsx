import DefaultLayout from '@/presentation/components/admin-components/layouts/DefaultLayout';
import Breadcrumb from '@/presentation/components/breadcrumbs';
import UserTable from '@/presentation/components/reuse/tables/UserTable';

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <UserTable />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;