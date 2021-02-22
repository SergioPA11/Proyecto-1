import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

const apiUrl = 'http://localhost:4000/api/courses';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  constructor(private http: HttpClient) { }

  currentNameId: string;
  currentSchoolId: number;

  setCurrentNameId(name: string){
    this.currentNameId = name;
  }

  setCurrentSchoolId(id_School: number){
    this.currentSchoolId = id_School;
  }

  getCurrentNameId(){
    return this.currentNameId;
  }
  
  getCurrentSchoolId(){
    return this.currentSchoolId;
  }

  getCourseId(name: string): Observable<Course>{
    return this.http.get<Course>(apiUrl + "/" + name);
  }

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(apiUrl);
      
  };

  deleteCourse(name: string): Observable<any>{
    return this.http.delete(apiUrl + "/" + name);
  }

  addCourse(course: Course): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("courseId", course.name);
    bodyEncoded.append("id_School", course.id_School.toString());
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateCourse( course: Course): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("courseId", course.name);
    bodyEncoded.append("id_School", course.id_School.toString());

    return this.http.put(apiUrl + "/" + course.name, course.id_School, httpOptions);
  }

  getMenuOpts() {
    return this.http.get("/assets/data/menu.json")
  }
}
