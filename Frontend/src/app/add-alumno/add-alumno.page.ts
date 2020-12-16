import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddAlumnoService } from '../CRUD/services/add-alumno.service';


@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.page.html',
  styleUrls: ['./add-alumno.page.scss'],
})
export class AddAlumnoPage implements OnInit {

  DatosForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private addAlumnoService: AddAlumnoService,
    private router: Router) {
      this.DatosForm = this.fb.group({
        dni: [''],
        vesicular_mass: [''],
        fat_mass: [''],
        year: [''],
        sex: ['']
      });

     }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.DatosForm.valid) {
      return false;
    } else {
      let student = {
        id: null,
        vesicular_mass: this.DatosForm.value.vesicular_mass,
        fat_mass: this.DatosForm.value.fat_mass,
        year: this.DatosForm.value.year,
        sex: this.DatosForm.value.sex
      }
      this.addAlumnoService.addStudent(student)
        .subscribe((res) => {
          this.router.navigateByUrl('/datos');
        });
      }
    }
}
