'use client';
import { useTheme } from 'next-themes';
import MoonIcon from '../icons/moon.icon';
import SunIcon from '../icons/sun.icon';

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-bgHover_l relative">
      <div className="w-7 h-7">{'dark' ? <SunIcon /> : <MoonIcon />}</div>
      <div className="absolute min-w-40 top-full bg-white py-3 px-1 shadow-md rounded-md">
        <ul className="text-left">
          <li className="py-1 px-3 cursor-pointer hover:bg-bgHover_l rounded-md">
            <input id="light-mode" type="radio" />
            <label className="ms-2" htmlFor="light-mode">
              Chế độ sáng
            </label>
          </li>
          <li className="py-1 px-3 cursor-pointer hover:bg-bgHover_l rounded-md">
            <input id="dark-mode" type="radio" />
            <label className="ms-2" htmlFor="light-mode">
              Chế độ sáng
            </label>
          </li>
          <li className="py-1 px-3 cursor-pointer hover:bg-bgHover_l rounded-md">
            <input id="auto-mode" type="radio" />
            <label className="ms-2" htmlFor="light-mode">
              Tự đông
            </label>
          </li>
        </ul>
      </div>
    </button>
  );
};

export default ThemeSwitch;
