import { Sequelize, Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [4, 255],
            msg: "Name field must be between 4 and 255 characters."
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        unique: {
          msg: "E-mail already exists.",
        },
        validate: {
          isEmail: {
            msg: "E-mail invalid!",
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: "",
        validate: {
          len: {
            args: [6, 50],
            msg: "Password must have between 6 and 50 characteres.",
          }
        }
      },
    }, {
      sequelize,
    });

    this.addHook("beforeSave", async user => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    });
    return this;
  }
}
