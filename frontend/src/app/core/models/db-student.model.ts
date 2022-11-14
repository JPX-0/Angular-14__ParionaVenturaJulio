export interface StudentsInterface {
  info: {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    image: string
  },
  data: {
    status: string,
    commission: number,
    courses: string[]
  }
}
export interface Guide_StudentsInterface {
  info?: {
    firstName?: string,
    lastName?: string,
    age?: number,
    email?: string,
    image?: string
  },
  data?: {
    status?: string,
    commission?: number,
    courses?: string[]
  }
}
export interface Api_StudentsInterface extends StudentsInterface {
  _id: string
}
export interface ApiErrorInterface {
  status: boolean,
  message: string,
  details: string
}
export interface ApiResponseInterface<t> {
  error: boolean,
  statusCode: string,
  response: (t)
}