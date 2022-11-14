import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  ApiResponseInterface, 
  Api_StudentsInterface, 
  Guide_StudentsInterface, 
  StudentsInterface 
} from '../../models/db-student.model';

@Injectable()
export class StudentsService {

  private apiRest(method: string, id?: string) { 
    return `https://angular14-pariona-ventura.herokuapp.com/students/${method}` + (id ? `/${id}` : "");
  }

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ApiResponseInterface<Api_StudentsInterface[]>> {
    return this.http.get<ApiResponseInterface<Api_StudentsInterface[]>>(this.apiRest("get"), {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

  getDataById(id: string): Observable<ApiResponseInterface<Api_StudentsInterface>> {
    return this.http.get<ApiResponseInterface<Api_StudentsInterface>>(this.apiRest("get", id), {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

  post(student: StudentsInterface): Observable<ApiResponseInterface<Api_StudentsInterface>> {
    return this.http.post<ApiResponseInterface<Api_StudentsInterface>>(this.apiRest("post"), student);
  }

  put(id: string, student: Guide_StudentsInterface): Observable<ApiResponseInterface<string>> {
    return this.http.put<ApiResponseInterface<string>>(this.apiRest("put", id), student);
  }

  delete(id: string): Observable<ApiResponseInterface<string>> {
    return this.http.delete<ApiResponseInterface<string>>(this.apiRest("delete", id));
  }

}
