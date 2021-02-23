import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from '../CRUD/models/school';
import { AddAlumnoService } from '../CRUD/services/add-alumno.service';
import { AddCourseService } from '../CRUD/services/add-course.service';
import { AddSchoolService } from '../CRUD/services/add-school.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.page.html',
  styleUrls: ['./add-alumno.page.scss'],
})
export class AddAlumnoPage implements OnInit {

  DatosForm: FormGroup;
  schools: School[];

  constructor(public fb: FormBuilder,
    private addAlumnoService: AddAlumnoService,
    private AddCourseService: AddCourseService,
    private AddSchoolService: AddSchoolService,
    private router: Router) {
    this.DatosForm = this.fb.group({
      metabolic_age: ['21', Validators.required],
      average_of_fat: ['21', Validators.required],
      average_of_Hydration: ['21', Validators.required],
      muscle_weight: ['21', Validators.required],
      muscle_mass_level: ['21', Validators.required],
      bone_weight: ['21', Validators.required],
      kilocalories: ['2000', Validators.required],
      registration_date: ['23/02/2021', Validators.required],
      BMI: ['24', Validators.required],
      weight: ['170', Validators.required],
      height: ['70', Validators.required],
      abdominal_perimeter: ['120', Validators.required],
      physical_activity_level: ['3', Validators.required],
      year: ['17', Validators.required],
      sex: ['M'],
    })
  }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log(this.DatosForm.value)
    if (!this.DatosForm.valid) {
      return false;
    } else {
      console.log()
      let student = {
        studentId: null,
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
      this.addAlumnoService.addStudent(student)
        .subscribe((res) => {
          this.router.navigateByUrl('/datos');
        });
    }
  }

}
