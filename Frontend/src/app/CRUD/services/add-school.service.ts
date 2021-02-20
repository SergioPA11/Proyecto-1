import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../models/school'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

const apiUrl = 'http://localhost:4000/api/schools';

@Injectable({
  providedIn: 'root'
})
export class AddSchoolService {

  constructor(private http: HttpClient) { }

  currentSchoolId: number;

  setCurrentSchoolId(id: number){
    this.currentSchoolId = id;
  }

  getCurrentSchoolId(){
    return this.currentSchoolId;
  }

  getSchoolId(id: number): Observable<School>{
    return this.http.get<School>(apiUrl + "/" + id);
  }

  getSchool(): Observable<School[]> {
    return this.http.get<School[]>(apiUrl);
      
  };

  deleteSchool(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addSchool(school: School): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", school.name);
    bodyEncoded.append("direction", school.direction);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateSchool( school: School): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", school.name);
    bodyEncoded.append("direction", school.direction);
    
    let body = bodyEncoded.toString();

    return this.http.put(apiUrl + "/" + school.id, body, httpOptions);
  }

  // findActualSchool(): Observable<any> {
  //   return from(
  //     Promise.all([
  //       this.getHeader(),
  //       this.storage.get("username")
  //     ])).pipe(
  //       map(values => {
  //         return this.http.get<School>(apiUrl + values[1], values[0]);
  //       }),
  //       concatAll()
  //     );
  // }

  getMenuOpts() {
    return this.http.get("/assets/data/menu.json")
  }

}
