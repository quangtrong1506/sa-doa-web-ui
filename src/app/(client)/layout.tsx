import Header from '@/components/header/';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="relative h-[55px] w-full">
        <div className="fixed w-full z-50 bg-white px-6 shadow-md">
          <Header />
        </div>
      </div>
      <div className="h-[1000px] bg-bgBody_l">{children}</div>
    </div>
  );
};

export default Layout;
