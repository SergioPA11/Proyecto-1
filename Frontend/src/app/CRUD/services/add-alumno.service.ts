import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

const apiUrl = 'http://localhost:4000/api/student';

@Injectable({
  providedIn: 'root'
})
export class AddAlumnoService {

  currentStudentId: number;

  constructor(private http: HttpClient) { }

  setCurrentStudentId(id: number){
    this.currentStudentId = id;
  }

  getCurrentStudentId(){
    return this.currentStudentId;
  }

  getStudentId(id: number): Observable<Student>{
    return this.http.get<Student>(apiUrl + "/" + id);
  }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(apiUrl);
      
  };

  deleteStudent(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addStudent(student: Student): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("vesicular_mass", student.vesicular_mass);
    bodyEncoded.append("fat_mass", student.fat_mass);
    bodyEncoded.append("year", student.year);
    bodyEncoded.append("sex", student.sex);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateStudent( student: Student): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("vesicular_mass", student.vesicular_mass);
    bodyEncoded.append("fat_mass", student.fat_mass);
    bodyEncoded.append("year", student.year);
    bodyEncoded.append("sex", student.sex);
    let body = bodyEncoded.toString();

    return this.http.put(apiUrl + "/" + student.id, body, httpOptions);
  }

  getMenuOpts() {
    return this.http.get("/assets/data/menu.json")

  }
}
