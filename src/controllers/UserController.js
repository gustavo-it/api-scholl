import User from "../models/User";

class UserController {
  async store(request, response) {
    try {
      const newUser = await User.create(request.body);
      return response.json(newUser);
    } catch (error) {
      return response.status(400).json({
        errors: error.errors ? error.errors.map(error => error.message) : ["Unknow Error"],
      });
    }
  }

  async index(request, response) {
    try {
      const users = await User.findAll();
      return response.json(users);
    } catch (error) {
      return response.json(null);
    }
  };

  async show(request, response) {
    try {
      const { id } = request.params;
      const user = await User.findByPk(id);
      return response.json(user);
    } catch (error) {
      return response.json(null);
    }
  };

  async update(request, response) {
    try {
      const { id } = request.params;
      if (!id) return response.status(400).json({ errors: ["ID not sent."] });

      const user = await User.findByPk(id);

      if (!user) return response.status(400).json({ errors: ["User not found."] });

      user.update(request.body);
      return response.json(user);

    } catch (error) {
      return response.json(null);
    }
  };
  
  async delete(request, response) {
    try {
      const { id } = request.params;

      if(!id) return response.status(400).json({ errors: ["ID not sent."] });

      const user = await User.findByPk(id);

      if(!user) return response.status(400).json({ errors: ["User not found."] });

      user.destroy();

      return response.json({
        information: `User: ${user.name}, e-mail: ${user.email} was deleted`
      });
    } catch(error) {
      return response.json(null);
    }
  };
}

export default new UserController();
