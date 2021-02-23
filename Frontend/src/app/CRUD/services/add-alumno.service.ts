import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

const apiUrl = 'http://localhost:4000/api/students';

@Injectable({
  providedIn: 'root'
})
export class AddAlumnoService {

  currentStudentId: number;
  currentCourseId: string;
  currentSchoolId: number;

  constructor(private http: HttpClient) { }

  setCurrentStudentId(studentId: number){
    this.currentStudentId = studentId;
  }

  setCurrentCourseId(courseId: string){
    this.currentCourseId = courseId;
  }

  setCurrentSchoolId(id_School: number){
    this.currentSchoolId = id_School;
  }

  getCurrentStudentId(){
    return this.currentStudentId;
  }
  
  getCurrentCourseId(){
    return this.currentCourseId;
  }

  getCurrentSchoolId(){
    return this.currentSchoolId;
  }

  getStudentId(studentId: number): Observable<Student>{
    return this.http.get<Student>(apiUrl + "/" + studentId);
  }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(apiUrl);
      
  };

  deleteStudent(studentId: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + studentId);
  }

  addStudent(student: Student): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    console.log(student);
    bodyEncoded.append("courseId", student.courseId);
    bodyEncoded.append("id_School", student.id_School.toString());
    bodyEncoded.append("metabolic_age", student.metabolic_age.toString());
    bodyEncoded.append("average_of_fat", student.average_of_fat.toString());
    bodyEncoded.append("average_of_Hydration", student.average_of_Hydration.toString());
    bodyEncoded.append("muscle_weight", student.muscle_weight.toString());
    bodyEncoded.append("muscle_mass_level", student.muscle_mass_level.toString());
    bodyEncoded.append("bone_weight", student.bone_weight.toString());
    bodyEncoded.append("kilocalories", student.kilocalories.toString());
    bodyEncoded.append("registration_date", student.registration_date.toString());
    bodyEncoded.append("BMI", student.BMI.toString());
    bodyEncoded.append("weight", student.weight.toString());
    bodyEncoded.append("height", student.height.toString());
    bodyEncoded.append("abdominal_perimeter", student.abdominal_perimeter.toString());
    bodyEncoded.append("physical_activity_level", student.physical_activity_level.toString());
    bodyEncoded.append("year", student.year.toString());
    bodyEncoded.append("sex", student.sex);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateStudent( student: Student): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("courseId", student.courseId);
    bodyEncoded.append("id_School", student.id_School.toString());
    bodyEncoded.append("metabolic_age", student.metabolic_age.toString());
    bodyEncoded.append("average_of_fat", student.average_of_fat.toString());
    bodyEncoded.append("average_of_Hydration", student.average_of_Hydration.toString());
    bodyEncoded.append("muscle_weight", student.muscle_weight.toString());
    bodyEncoded.append("muscle_mass_level", student.muscle_mass_level.toString());
    bodyEncoded.append("bone_weight", student.bone_weight.toString());
    bodyEncoded.append("kilocalories", student.kilocalories.toString());
    bodyEncoded.append("registration_date", student.registration_date.toString());
    bodyEncoded.append("BMI", student.BMI.toString());
    bodyEncoded.append("weight", student.weight.toString());
    bodyEncoded.append("height", student.height.toString());
    bodyEncoded.append("abdominal_perimeter", student.abdominal_perimeter.toString());
    bodyEncoded.append("physical_activity_level", student.physical_activity_level.toString());
    bodyEncoded.append("year", student.year.toString());
    bodyEncoded.append("sex", student.sex);
    let body = bodyEncoded;

    return this.http.put(apiUrl + "/" + student.studentId, body, httpOptions);
  }

  getMenuOpts() {
    return this.http.get("/assets/data/menu.json")

  }
}
