import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { School } from '../CRUD/models/school';
import { AddSchoolService } from '../CRUD/services/add-school.service';
import { ModalCoursePage } from '../modal-course/modal-course.page';

@Component({
  selector: 'app-modal-school',
  templateUrl: './modal-school.page.html',
  styleUrls: ['./modal-school.page.scss'],
})
export class ModalSchoolPage implements OnInit {

  schools: School[];
  SchoolForm: FormGroup;

  constructor(public fb: FormBuilder,
    private modalController:ModalController, 
    private AddSchoolService: AddSchoolService,
    private modalCtrl: ModalController,
    private router: Router) { 
      this.SchoolForm = this.fb.group({
        schools: ['', Validators.required],
      })
    }

  ngOnInit() {
    this.getSchool();
  }

  getSchool() {
    this.AddSchoolService.getSchool().subscribe(school => { 
      // for(let i = 0; i < school.length; i++){
      //   console.log(school[i])
      //   document.getElementById("schools").innerHTML = "<ion-select-option value="+ school[i].id +">" + school[i].name + "</ion-select-option>";
      // }
      this.schools = school;
    });
  }

  CloseModal(){
    this.modalController.dismiss();
  }

  onFormSubmit() {
  if(!this.SchoolForm.value.schools){
    return false;
  }else{
    this.AddSchoolService.setCurrentSchoolId(this.SchoolForm.value.schools);
    this.openCourseModal();
    this.CloseModal();
  }
  }

  

  async openCourseModal() {
    const modal = await this.modalCtrl.create({
      component: ModalCoursePage,
      cssClass: 'my-custom-class'
    });
    modal.present();
  }
}
