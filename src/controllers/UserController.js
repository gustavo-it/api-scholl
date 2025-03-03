import User from "../models/User";

class UserController {
  async store(request, response) {
    try {
      const newUser = await User.create(request.body);
      response.json(newUser);
    } catch (error) {
      response.status(400).json({
        errors: error.errors ? error.errors.map(error => error.message) : ["Unknow Error"],
      });
    }
  }
}

export default new UserController();
