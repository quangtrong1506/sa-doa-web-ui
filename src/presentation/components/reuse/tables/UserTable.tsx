'use client';

import Image from 'next/image';
import { BuildConfig } from '@/config/config';
import { useEffect, useState } from 'react';
import { userAPI } from '@/data/datasource/api/useAPI';
import { TokenRepository } from '@/data/datasource/local/TokenRepository';
import { LangKey, LangMap } from '@/presentation/components/string';
import { BaseLang } from '@/presentation/components/string/BaseLang';
import { LangRepository } from '@/data/datasource/local/LangRepository';
import { User } from '@/data/datasource/model';

const user : User = {
  _id: '',
  address: '',
  display_name: '',
  is_deleted: 0,
  password: '',
  phone: '',
  role_level: 0,
  updated_by: '',
  username: ''
}

const UserTable = () => {
  const [users, setUsers] = useState([user]);
  const key = LangRepository.getLang();
  const currLang: BaseLang = LangMap(key ? key as LangKey : LangKey.Vi);

  useEffect(() => {
    userAPI.findAll(TokenRepository.getToken() || '').then(rs => {
      console.log(rs);
      setUsers(rs.data.docs);
      console.log(users);
    }).catch(err => {
      console.log(err);
    });
  }, [users]);

  return (
    <div className="rounded-sm border border-stroke px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Users
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">

          {currLang.UserTableHeaders.map((str, key) => (
            <div className="p-2.5 xl:p-5" key={key} style={{textAlign: 'center'}}>
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {str}
              </h5>
            </div>
          ))}

        </div>

        {users.map((user, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === users.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={user.avatar ? user.avatar : BuildConfig.LOGO} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {user.username}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.display_name}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${user.email}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{user.phone}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{user.role_level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserTable;