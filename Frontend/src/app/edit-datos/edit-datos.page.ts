import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../CRUD/models/student';
import { AddAlumnoService } from '../CRUD/services/add-alumno.service';
import { AddSchoolService } from '../CRUD/services/add-school.service';
import { AddCourseService } from '../CRUD/services/add-course.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.page.html',
  styleUrls: ['./edit-datos.page.scss'],
})
export class EditDatosPage implements OnInit {

  DatosForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private addAlumnoService: AddAlumnoService,
    private AddCourseService: AddCourseService,
    private AddSchoolService: AddSchoolService,
    private router: Router) { 
      this.DatosForm = this.fb.group({
        // id: [''],
        metabolic_age: ['', Validators.required],
        average_of_fat: ['', Validators.required],
        average_of_Hydration: ['', Validators.required],
        muscle_weight: ['', Validators.required],
        muscle_mass_level: ['', Validators.required],
        bone_weight: ['', Validators.required],
        kilocalories: ['', Validators.required],
        registration_date: ['', Validators.required],
        BMI: ['', Validators.required],
        weight: ['', Validators.required],
        height: ['', Validators.required],
        abdominal_perimeter: ['', Validators.required],
        physical_activity_level: ['', Validators.required],
        year: ['', Validators.required],
        sex: ['']
      })
        let studentId = this.addAlumnoService.getCurrentStudentId();
    
        this.addAlumnoService.getStudentId(studentId).subscribe( (student) => {
          this.DatosForm = this.fb.group({
            studentId: [student.studentId],
            metabolic_age: [student.metabolic_age, Validators.required],
            average_of_fat: [student.average_of_fat, Validators.required],
            average_of_Hydration: [student.average_of_Hydration, Validators.required],
            muscle_weight: [student.muscle_weight, Validators.required],
            muscle_mass_level: [student.muscle_mass_level, Validators.required],
            bone_weight: [student.bone_weight, Validators.required],
            kilocalories: [student.kilocalories, Validators.required],
            registration_date: [student.registration_date, Validators.required],
            BMI: [student.BMI, Validators.required],
            weight: [student.weight, Validators.required],
            height: [student.height, Validators.required],
            abdominal_perimeter: [student.abdominal_perimeter, Validators.required],
            physical_activity_level: [student.physical_activity_level, Validators.required],
            year: [student.year, Validators.required],
            sex: [student.sex]
        })
      })
    }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.DatosForm.valid) {
      return false;
    } else {
      let student = {
        studentId: this.addAlumnoService.getCurrentStudentId(),
        courseId: this.AddCourseService.getCurrentNameId(),
        id_School: this.AddSchoolService.getCurrentSchoolId(),
        metabolic_age: this.DatosForm.controls['metabolic_age'].value,
        average_of_fat: this.DatosForm.controls['average_of_fat'].value,
        average_of_Hydration: this.DatosForm.controls['average_of_Hydration'].value,
        muscle_weight: this.DatosForm.controls['muscle_weight'].value,
        muscle_mass_level: this.DatosForm.controls['muscle_mass_level'].value,
        bone_weight: this.DatosForm.controls['bone_weight'].value,
        kilocalories: this.DatosForm.controls['kilocalories'].value,
        registration_date: this.DatosForm.controls['registration_date'].value,
        BMI: this.DatosForm.controls['BMI'].value,
        weight: this.DatosForm.controls['weight'].value,
        height: this.DatosForm.controls['height'].value,
        abdominal_perimeter: this.DatosForm.controls['abdominal_perimeter'].value,
        physical_activity_level: this.DatosForm.controls['physical_activity_level'].value,
        year: this.DatosForm.controls['year'].value,
        sex: this.DatosForm.controls['sex'].value
      }
      this.addAlumnoService.updateStudent(student)
        .subscribe((res) => {
          this.router.navigateByUrl('/edit-datos');
        });
      }
    }

}
