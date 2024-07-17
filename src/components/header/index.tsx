import { NAV_LINK } from '@/constants/jsx-constants';
import NavItem from '../reuse/nav/nav-item';
import ThemeSwitch from '../theme-mode/theme-switch';
import SearchHeader from './search.header';

const Header = () => {
  return (
    <div className="flex h-[55px] w-full items-center justify-between [&>div]:h-full gap-3 ">
      <div className="flex-1 max-w-[360px]">
        <SearchHeader />
      </div>
      <div className="w-[680px]">
        <div className="w-full h-full flex justify-between items-center gap-2">
          {Object.entries(NAV_LINK).map(([key, value]) => (
            <NavItem key={key} href={value.href} title={value.title} icon={value.icon} />
          ))}
        </div>
      </div>
      <div className="flex-1 max-w-[360px] h-full flex items-center">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
