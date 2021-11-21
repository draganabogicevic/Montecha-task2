import { getUser } from "./service";
import User from "../entities/User";
import * as links from "./links.js"
class Communicator {
  
  static getUserInfo () {
    return getUser(links.USER_DB_LINK).then(json => new User(json))
  }
}

export default Communicator;