const MongoCrud = require("../crud.dao");

class StudentDao extends MongoCrud {
  static #instance;
  constructor(collection, schema) {
    if(!StudentDao.#instance) {
      super(collection, schema);
      StudentDao.#instance = this;
      return StudentDao.#instance;
    } else return StudentDao.#instance;
  }
}

module.exports = StudentDao;