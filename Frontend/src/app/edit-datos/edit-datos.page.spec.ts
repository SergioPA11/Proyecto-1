import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDatosPage } from './edit-datos.page';

describe('EditDatosPage', () => {
  let component: EditDatosPage;
  let fixture: ComponentFixture<EditDatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDatosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
