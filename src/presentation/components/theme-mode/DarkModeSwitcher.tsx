import { useTheme } from 'next-themes';
import { Theme } from '@/data/datasource/model';
import { ModelIcon, MoonIcon, SunIcon } from '@/presentation/components/icons';

const DarkModeSwitcher = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();

  return (
    <li>
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full ${
          theme === Theme.Dark ? "bg-primary" : "bg-stroke"
        }`}
      >
        <input
          type="checkbox"
          onChange={() => {
            if (typeof setTheme === "function") {
              setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
            }
          }}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full shadow-switcher duration-75 ease-linear ${
            theme === "dark" && "!right-[3px] !translate-x-full"
          }`}
        >
          <span className="dark:hidden">
            <SunIcon width={16} height={16}/>
          </span>
          <span className="hidden dark:inline-block">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <MoonIcon width={16} height={16}/>
            </svg>
          </span>
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
