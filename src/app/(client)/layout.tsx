import Header from '@/presentation/components/header';


const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="relative h-[55px] w-full">
        <div className="fixed w-full z-50 bg-white dark:bg-bgContentDark px-1 lg:px-6 shadow-md border-b dark:border-white/15">
          <Header />
        </div>
      </div>
      <div className="bg-bgBody_l dark:bg-bgBody_d">{children}</div>
    </div>
  );
};

export default Layout;
