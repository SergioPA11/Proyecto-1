import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Course } from '../CRUD/models/course';
import { AddCourseService } from '../CRUD/services/add-course.service';

@Component({
  selector: 'app-modal-course',
  templateUrl: './modal-course.page.html',
  styleUrls: ['./modal-course.page.scss'],
})
export class ModalCoursePage implements OnInit {

  courses: Course[];
  CourseForm: FormGroup;

  constructor(public fb: FormBuilder,
    private modalController:ModalController, 
    private AddCourseService: AddCourseService,
    private router: Router) {
      this.CourseForm = this.fb.group({
      courses: ['', Validators.required],
    }) }

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    this.AddCourseService.getCourse().subscribe(course => { 
      this.courses = course;
    });
  }

  CloseModal(){
    this.modalController.dismiss();
  }

  onFormSubmit() {
  if(!this.CourseForm.value.courses){
    return false;
  }else{
    this.AddCourseService.setCurrentNameId(this.CourseForm.value.courses);
    this.router.navigateByUrl('add-alumno');
    this.CloseModal();
  }

  }

}
