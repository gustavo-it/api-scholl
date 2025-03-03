import Student from "../models/Student";

class HomeController {
  async index(request, response) {
    const newStudent = await Student.create({
      name: "Maria",
      lastName: "Barbosa",
      email: "maria@gmail.com",
      age: 24,
      weight: 60,
      height: 1.70,
    });
    response.json(newStudent);
  }
}

export default new HomeController();
