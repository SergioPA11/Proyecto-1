import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, MenuPageRoutingModule, CommonModule,
        FormsModule,],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
