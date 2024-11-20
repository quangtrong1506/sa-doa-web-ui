import DefaultLayout from '@/presentation/components/admin-components/layouts/DefaultLayout';
import Breadcrumb from '@/presentation/components/breadcrumbs';
import TableOne from '@/presentation/components/reuse/tables/TableOne';

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;