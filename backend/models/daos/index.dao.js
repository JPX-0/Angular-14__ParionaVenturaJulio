const mongoose = require("mongoose");
const dbConfig = require("../../utils/config/db.config");
const env = require("../../utils/config/env.config");

const StudentDao = require("./collections/student.dao");

class Dao {
  static #dbInstances;

  static #daos = {
    // courses: (collection, schema) => new CoursesDao(collection, schema),
    student: (collection, schema) => new StudentDao(collection, schema)
  };

  static #getDao = (collection) => {
    const schema = require(`../schemas/${collection}.schema`);
    return Dao.#daos[collection](collection, schema);
  };

  constructor() {
    console.log(`Connecting to "${env.DB_NAME}" database...`);
    if(!Dao.#dbInstances) {
      mongoose.connect(dbConfig.connect())
        .then(() => console.log(`Connected to the "${env.DB_NAME}" database!`))
        .catch(error => { throw new Error("An error occurred while connecting the database: ", error) })
      Dao.#dbInstances = this;
      return Dao.#dbInstances;
    } else return Dao.#dbInstances;
  }

  // get courses() {
  //   return Dao.#getDao("courses");
  // }

  get student() {
    return Dao.#getDao("student");
  }
};

const DAO = new Dao();

module.exports = DAO;