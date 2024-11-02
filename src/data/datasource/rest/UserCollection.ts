import client, { api, myFetch, uuidv4 } from '@/data/datasource/rest/Api';
import { BaseCollection } from '@/data/datasource/rest/BaseCollection';
import { User } from '@/data/datasource/model';


class UserCollection implements BaseCollection<User> {
  constructor() {
  }
  async findAll() {
    return api.get("user")
  }

  async insert(data: User) {
    // data._id = uuidv4().replaceAll("-", "")
    // console.log("xxxxxx")
    // console.log(data)
    console.log(JSON.stringify(data))
    return api.post("user/create", JSON.stringify(data))
  }
}

const userCollection = new UserCollection()
export default userCollection


