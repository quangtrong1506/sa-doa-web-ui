import client, { uuidv4 } from '@/data/datasource/rest/Api';
import { BaseCollection } from '@/data/datasource/rest/BaseCollection';
import { User } from '@/data/datasource/model';


class UserCollection implements BaseCollection<User> {
  constructor() {
  }
  async findAll() {
    return (await client.get("user"))
  }

  async insert(data: User) {
    data._id = uuidv4().replaceAll("-", "")
    console.log(data)
    await client.post("user/create", data)
  }
}

const userCollection = new UserCollection()
export default userCollection


