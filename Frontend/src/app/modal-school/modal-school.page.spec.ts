import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSchoolPage } from './modal-school.page';

describe('ModalSchoolPage', () => {
  let component: ModalSchoolPage;
  let fixture: ComponentFixture<ModalSchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSchoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
