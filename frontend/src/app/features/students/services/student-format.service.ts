import { Injectable } from '@angular/core';
import { Api_StudentsInterface, Guide_StudentsInterface, StudentsInterface } from 'src/app/core/models/db-student.model';

@Injectable()
export class StudentFormatService {

  constructor() { }

  renderInput(student: Api_StudentsInterface): any {
    return ({
      firstName: student.info.firstName,
      lastName: student.info.lastName,
      age: (student.info.age).toString(),
      email: student.info.email,
      image: student.info.image || "",
      commission: (student.data.commission).toString(),
      status: student.data.status,
      courses: student.data.courses.length == 0 ? [""]: student.data.courses
    })
  }
  create = (student: any): StudentsInterface => {
    const info = {
      firstName: student.firstName.toString(),
      lastName: student.lastName.toString(),
      age: +student.age,
      email: student.email.toString(),
      image: student.image || "",
    };
    let data = {
      status: student.status.toString(),
      commission: +student.commission,
      courses: [""]
    }
    if(Array.isArray(student.courses)) {
      const courseFiltere = student.courses.filter((course?: string) => course != undefined);
      data.courses = courseFiltere.filter((course: string) => course != "");
      if(!data.courses[0]) data.courses = [""];
    } else data.courses = [""];
    return { info, data };
  };
  update = ({ firstName, lastName, age, email, image, commission, status, courses }: any): Guide_StudentsInterface => {
    let response: Guide_StudentsInterface = {};
    if(firstName || lastName || age || email || image) {
      response.info = {};
      if(firstName != undefined) response.info.firstName = firstName;
      if(lastName != undefined) response.info.lastName = lastName;
      if(age != undefined) response.info.age = +age;
      if(email != undefined) response.info.email = email;
      if(image != undefined) response.info.image = image;
    }
    if(commission || status || courses) {
      response.data = {};
      if(commission != undefined) response.data.commission = +commission;
      if(status != undefined) response.data.status = status;
      if(courses != undefined) response.data.courses = courses;
    }
    return response;
  };

}
