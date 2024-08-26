import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BuildConfig } from '@/config/config';
import { useAppSelector } from '@/data/datasource/redux/store';
import { ContactIcon, DownIcon, LogoutIcon, ProfileIcon, SettingIcon } from '@/presentation/components/icons';
import { useClickAway } from 'react-use';
import { Routes } from '@/presentation/constants/Routes';
import { useRouter } from 'next/navigation';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userReducer = useAppSelector((state) => state.userReducer);
  const rootRef = useRef<HTMLAnchorElement>(null);
  useClickAway(rootRef, () => setDropdownOpen(false));
  const router = useRouter()
  return (
    <div className={"relative"}>
      <Link
        ref={rootRef}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {userReducer.user?.name}
          </span>
          <span className="block text-xs">{userReducer.user?.status}</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={userReducer.user?.avatar || BuildConfig.DEFAULT_USER_AVATAR}
            style={{
              width: 'auto',
              height: 'auto',
            }}
            alt="User"
          />
        </span>

        <DownIcon width={12} height={8} />
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark z-999`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <ProfileIcon width={22} height={22} />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <ContactIcon width={22} height={22} />
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                href={Routes.Settings}
                onClick={(event) => {
                  event.preventDefault()
                  router.push(Routes.Settings)
                }}
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <SettingIcon width={22} height={22} />
                Account Settings
              </Link>
            </li>
          </ul>
          <button
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <LogoutIcon height={22} width={22} />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownUser;
