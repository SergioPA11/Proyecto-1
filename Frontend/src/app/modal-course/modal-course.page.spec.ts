import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalCoursePage } from './modal-course.page';

describe('ModalCoursePage', () => {
  let component: ModalCoursePage;
  let fixture: ComponentFixture<ModalCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCoursePage ],
      imports: [IonicModule.forRoot(),  FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('course list', () => {
    expect(component.getCourse).toBeTruthy();
  });
});
