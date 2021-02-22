import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsNavigatorPage } from './tabs-navigator.page';

describe('TabsNavigatorPage', () => {
  let component: TabsNavigatorPage;
  let fixture: ComponentFixture<TabsNavigatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsNavigatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsNavigatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
