const STATUS = require("../../utils/constants/status.constants");
const DAO = require("../../models/daos/index.dao");
const { apiResponse } = require("../../utils/response.utils");
const CustomError = require("../../utils/error.utils");

const getById = async (id) => {
  const { NOT_FOUND } = STATUS;
  let response;
  try { response = await DAO.student.getOne({ _id: id }); } 
  catch(error) { throw new CustomError(NOT_FOUND, `The id: "${id}" entered does not match any student in our database.`); }
  if(!response) throw new CustomError(NOT_FOUND, "This student has been removed from the database.");
  return response;
}
const checkError = (body) => {
  const { BAD_REQUEST } = STATUS;
  const checkError_undefined = [
    { key: "info", value: body.info }, 
    { key: "data", value: body.data }, 
    { key: "info.firstName", value: body.info.firstName }, 
    { key: "info.lastName", value: body.info.lastName }, 
    { key: "info.email", value: body.info.email },
    { key: "info.image", value: body.info.image },
    { key: "data.status", value: body.data.status }
  ];
  checkError_undefined.forEach(e => {
    if(e.value == undefined) throw new CustomError(BAD_REQUEST, `[${e.key}] has not been assigned.`);
  });
  const checkError_number = [
    { key: "info.age", value: body.info.age }, 
    { key: "data.commission", value: body.data.commission }
  ];
  checkError_number.forEach(e => {
    if(e.key == "info.age" && +e.value <= 0) 
      throw new CustomError(BAD_REQUEST, `[${e.key}] must be greater than zero.`);
    else if(isNaN(+e.value)) throw new CustomError(BAD_REQUEST, `[${e.key}] must be an integer.`);
  });
  if(!(body.data.status == "cursando" || body.data.status == "egresado")) 
    throw new CustomError(BAD_REQUEST, `[data.status] can only have the values: "cursando" or "egresado"`);
  if(!Array.isArray(body.data.courses)) throw new CustomError(BAD_REQUEST, `[data.courses] must be an array`);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if(!emailRegex.test(body.info.email)) throw new CustomError(BAD_REQUEST, `You must enter a valid email`); 
}

class StudentController {
  async getData(req, res, next) {
    const { code: status } = STATUS.OK;
    const { id } = req.params;
    try { 
      if(id != undefined) return res.status(status).json(apiResponse(await getById(id), status));
      res.status(status).json(apiResponse(await DAO.student.getAll(), status)); 
    } catch(error) { next(error); }
  }
  async postData(req, res, next) {
    const { code: status } = STATUS.CREATED;
    const { info, data } = req.body;
    const dtoStudent = {
      info: {
        firstName: `${info.firstName}`,
        lastName: `${info.lastName}`,
        age: +info.age,
        email: `${info.email}`,
        image: `${info.image}`
      },
      data: {
        status: `${data.status}`,
        commission: +data.commission,
        courses: data.courses || [""]
      }
    }
    try {
      checkError({ info, data });
      const response = await DAO.student.save(dtoStudent);
      res.status(status).json(apiResponse(response, status));
    } catch (error) { next(error); }
  }
  async putData(req, res, next) {
    const { code: status } = STATUS.ACEPTED;
    const { params: { id }, body: { info, data } } = req;
    try { 
      let foundData = await getById(id);
      if(info) {
        if(info.firstName) foundData.info.firstName = info.firstName;
        if(info.lastName) foundData.info.lastName = info.lastName;
        if(info.age) foundData.info.age = info.age;
        if(info.email) foundData.info.email = info.email;
        if(info.image) foundData.info.image = info.image;
      } if(data) {
        if(data.status) foundData.data.status = data.status;
        if(data.commission) foundData.data.commission = data.commission;
        if(data.courses) foundData.data.courses = data.courses;
      }
      checkError(foundData);
      await DAO.student.updateOne({ _id: id }, foundData);
      res.status(status).json(apiResponse("Updated success", status)); 
    } catch(error) { next(error); }
  }
  async deleteData(req, res, next) {
    const { code: status } = STATUS.ACEPTED;
    const { id } = req.params;
    try {
      await getById(id);
      await DAO.student.deleteOne({ _id: id });
      res.status(status).json(apiResponse("Deleted success", status));
    } catch (error) { next(error); }
  }
}

const studentController = new StudentController()

module.exports = studentController;