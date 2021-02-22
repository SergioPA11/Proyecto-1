import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../CRUD/models/student';
import { AddAlumnoService } from '../CRUD/services/add-alumno.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  student: Student[];

  constructor(private addAlumnoService: AddAlumnoService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.addAlumnoService.getStudent().subscribe(student => {
      this.student = student;
      console.log(student);
    });
  }

  deleteStudent(studentId: number){
    this.addAlumnoService.deleteStudent(studentId).subscribe(() => {
      this.getAllStudent();
    })
  };

  insertStudent(){
    this.router.navigateByUrl("/add-alumno");
  }

  updateStudent(studentId: number){
    this.addAlumnoService.setCurrentStudentId(studentId);
    this.router.navigateByUrl("/edit-datos");
  }

  getInform(){
    window.open("http://localhost:4000/api/inform")
  }

}
