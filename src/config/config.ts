import { Role, Status, User } from '@/data/datasource/model';

const APP_NAME = 'Ốc Sa Đoạ';
const APP_DESCRIPTION = 'Website chia sẻ tài liệu nghiên cứu khoa học hàng đầu thế giới';
const LOGO = '/images/logo.png';
const DEFAULT_USER_EMAIL = 'abc@gmail.com';
const DEFAULT_ADMIN_EMAIL = 'bcd@gmail.com';
const PASSWORD = '1234567a';
const DEFAULT_USER_AVATAR = '/images/gif/0.gif';
const DEFAULT_FULL_NAME = 'Lương Quang Trọng'
const DEFAULT_PHONE = '0123456789'
const DEFAULT_NAME = 'Trọng sa đọa'
const DEFAULT_BIO = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.'
const IMAGES_18 = [
  'https://i.ibb.co/ss0kCXr/Shika-hatsu-Busty-school-girl-in-uniform-1.jpg',
  'https://i.ibb.co/61SbLxv/Blacqkl-cosplay-Ganyu-Genshin-Impact-71.jpg',
  'https://i.ibb.co/ccDw29R/Blacqkl-cosplay-Ganyu-Genshin-Impact-23.jpg',
  'https://i.ibb.co/x3yWt2k/Blacqkl-cosplay-Rem-Re-Zero-56-result.webp',
  'https://i.ibb.co/BC29ZCQ/Blacqkl-cosplay-Rem-Re-Zero-55-result.webp',
  'https://i.ibb.co/dfCdnt0/Telegram-channel-Cos-District-82.jpg',
  'https://i.ibb.co/51gqYSv/Telegram-channel-Cos-District-49.jpg',
];
const IMAGES_DEFAULT = [
  '/images/demo/0.jpg',
  '/images/demo/1.jpg',
  '/images/demo/2.jpg',
  '/images/demo/3.jpg',
  '/images/demo/4.jpg',
  '/images/demo/5.jpg',
];

const DEFAULT_USER: User = {
  avatar: DEFAULT_USER_AVATAR,
  email: DEFAULT_USER_EMAIL,
  phone: DEFAULT_PHONE,
  id: DEFAULT_USER_EMAIL,
  name: DEFAULT_USER_EMAIL,
  fullName: DEFAULT_FULL_NAME,
  password: PASSWORD,
  bio: DEFAULT_BIO,
  role: Role.User,
  status: Status.Active,
};

const DEFAULT_ADMIN: User = {
  avatar: DEFAULT_USER_AVATAR,
  email: DEFAULT_ADMIN_EMAIL,
  phone: DEFAULT_PHONE,
  id: DEFAULT_ADMIN_EMAIL,
  name: DEFAULT_NAME,
  fullName: DEFAULT_FULL_NAME,
  password: PASSWORD,
  bio: DEFAULT_BIO,
  role: Role.Admin,
  status: Status.Active,
};
const USER_LIST = [DEFAULT_USER, DEFAULT_ADMIN]
const BuildConfig = {
  APP_NAME,
  LOGO,
  APP_DESCRIPTION,
  USER_LIST,
  PASSWORD,
  DEFAULT_USER_AVATAR,
  IMAGES_18,
  IMAGES_DEFAULT,
};

export { BuildConfig };
