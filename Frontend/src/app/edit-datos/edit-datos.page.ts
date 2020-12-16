import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
        vesicular_mass: [''],
        fat_mass: [''],
        year: [''],
        sex: ['']
      });}

      findStudent() {
        let id = this.addAlumnoService.getCurrentStudentId();
    
        this.addAlumnoService.getStudentId(id).subscribe( (g) => {
          
        })
      }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.DatosForm.valid) {
      return false;
    } else {
      let student = {
        id: this.addAlumnoService.getCurrentStudentId(),
        vesicular_mass: this.DatosForm.value.vesicular_mass,
        fat_mass: this.DatosForm.value.fat_mass,
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
