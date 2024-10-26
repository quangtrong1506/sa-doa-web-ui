import axios from 'axios';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};
const client = axios.create({
  // baseURL: 'https://sa-doa-be-git-add-cors-2-hoang-xuan-thiens-projects.vercel.app/',
  baseURL: 'http://localhost:3000/',
  config,
});

class Api {
  baseUrl: string;
  mode: 'no-cors';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(url: string) {
    let data = await fetch(`${this.baseUrl}${url}`, { mode: this.mode });
    // console.log("xxxxxxx");
    // console.log(data);
    // console.log("yyyyyyy");
    const res = await data.json();
    // console.log(res)
    return res;
  }

  async post(url: string, data: string) {
    return await fetch(`${this.baseUrl}${url}`,
      {
        mode: this.mode,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: `${data}`,
      });
  }
}

export const uuidv4 = () => {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16),
  );
};

export const api = new Api('http://localhost:3000/');
export default client;
