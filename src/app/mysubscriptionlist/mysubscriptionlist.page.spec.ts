import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MysubscriptionlistPage } from './mysubscriptionlist.page';

describe('MysubscriptionlistPage', () => {
  let component: MysubscriptionlistPage;
  let fixture: ComponentFixture<MysubscriptionlistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MysubscriptionlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MysubscriptionlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
