import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../CRUD/models/student';
import { AddAlumnoService } from '../CRUD/services/add-alumno.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.page.html',
  styleUrls: ['./edit-datos.page.scss'],
})
export class EditDatosPage implements OnInit {

  DatosForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private addAlumnoService: AddAlumnoService,
    private router: Router) { 
      this.DatosForm = this.fb.group({
        // id: [''],
        courseId: ['', Validators.required],
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
      });}

      findStudent() {
        let studentId = this.addAlumnoService.getCurrentStudentId();
    
        this.addAlumnoService.getStudentId(studentId).subscribe( (g) => {
          
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
        courseId: this.addAlumnoService.getCurrentCourseId(),
        id_School: this.addAlumnoService.getCurrentSchoolId(),
        metabolic_age: this.DatosForm.value.metabolic_age,
        average_of_fat: this.DatosForm.value.average_of_fat,
        average_of_Hydration: this.DatosForm.value.average_of_Hydration,
        muscle_weight: this.DatosForm.value.muscle_weight,
        muscle_mass_level: this.DatosForm.value.muscle_mass_level,
        bone_weight: this.DatosForm.value.bone_weight,
        kilocalories: this.DatosForm.value.kilocalories,
        registration_date: this.DatosForm.value.registration_date,
        BMI: this.DatosForm.value.BMI,
        weight: this.DatosForm.value.weight,
        height: this.DatosForm.value.height,
        abdominal_perimeter: this.DatosForm.value.abdominal_perimeter,
        physical_activity_level: this.DatosForm.value.physical_activity_level,
        year: this.DatosForm.value.year,
        sex: this.DatosForm.value.sex
      }
      this.addAlumnoService.updateStudent(student)
        .subscribe((res) => {
          this.router.navigateByUrl('/edit-datos');
        });
      }
    }

}
