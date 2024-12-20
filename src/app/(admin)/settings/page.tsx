'use client';
import DefaultLayout from '@/presentation/components/admin-components/layouts/DefaultLayout';
import Breadcrumb from '@/presentation/components/breadcrumbs';
import Image from 'next/image';
import { EditIcon, EmailIcon, ProfileIcon, UploadIcon } from '@/presentation/components/icons';
import { useAppSelector } from '@/data/datasource/redux/store';
import { BuildConfig } from '@/config/config';
import { useEffect, useState } from 'react';
import { User } from '@/data/datasource/model';
import { userAPI } from '@/data/datasource/api/useAPI';
import { setUser } from '@/data/datasource/redux/features/user';
import { TokenRepository } from '@/data/datasource/local/TokenRepository';

// export const metadata: Metadata = {
//   title: "Next.js Settings | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Settings page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };
const SettingsPage = () => {
  const userReducer = useAppSelector((state) => state.userReducer);
  const [fullName, setFullName] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(BuildConfig.DEFAULT_USER_AVATAR);

  useEffect(() => {
    if (userReducer.user) {
      setFullName(userReducer.user.username);
      setName(userReducer.user.display_name);
      setPhone(userReducer.user.phone);
      setEmail(userReducer.user.email || '');
      setBio(userReducer.user.bio || '');
      setAvatar(userReducer.user.avatar || BuildConfig.DEFAULT_USER_AVATAR);
    }
  }, [userReducer.user]);
  const saveChange = () => {
    if (userReducer.user) {
      const curr_user = userReducer.user
      const user: User = {
        _id: curr_user._id,
        address: curr_user.address,
        display_name: name,
        is_deleted: curr_user.is_deleted,
        password: curr_user.password,
        phone: phone,
        role_level: curr_user.role_level,
        updated_by: curr_user._id,
        username: fullName,
        bio: bio,
        email: email,
        avatar: curr_user.avatar,
      };
      userAPI.updateUser(curr_user._id, user, TokenRepository.getToken() || '').then(r => {
        alert("Update thành công!")
        setUser(user)
      }).catch(e => {
        alert("Update thất bại!")
        console.log(e);
      })
    }
    // saveImage();
  };

  const saveImage = () => {

  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <ProfileIcon width={20} height={20} />
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Devid Jhon"
                          onChange={(event) => {
                            setFullName(event.target.value);
                          }}
                          value={fullName}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+990 3343 7865"
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                        value={phone}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <EmailIcon width={20} height={20} />
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="devidjond45@gmail.com"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        value={email}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Username"
                      id="Username"
                      placeholder="devidjhon24"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      value={name}
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      BIO
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <EditIcon width={20} height={20} />
                      </span>

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="bio"
                        id="bio"
                        rows={6}
                        placeholder="Write your bio here"
                        onChange={(event) => {
                          setBio(event.target.value);
                        }}
                        value={bio}
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                      onClick={(event) => {
                        saveChange();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Your Photo
                </h3>
              </div>
              <div className="p-7">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <Image
                        src={avatar}
                        width={55}
                        height={55}
                        alt="User"
                      />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Edit your photo
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary">
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                      onChange={(event) => {
                        try {
                          if (event.target.files) {
                            const file = event.target.files.item(0);
                            if (file) {
                              const imageUrl = URL.createObjectURL(file);
                              console.log(imageUrl);
                              setAvatar(imageUrl);
                            }
                          }
                        } catch (e) {
                          console.log(e);
                        }
                      }}
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-boxdark">
                        <UploadIcon width={16} height={16} />
                      </span>
                      <p>
                        <span className="text-primary">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                      onClick={(event) => {
                        saveImage();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SettingsPage;