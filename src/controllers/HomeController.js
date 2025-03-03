import Student from "../models/Student";

class HomeController {
  async index(request, response) {
    try {
      const students = await Student.findAll();
      return response.json(students);
    } catch (error) {
      return response.json(null);
    }
  }
}

export default new HomeController();
