import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CretPage } from './cret.page';

describe('CretPage', () => {
  let component: CretPage;
  let fixture: ComponentFixture<CretPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CretPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should cret', () => {
    expect(component).toBeTruthy();
  });
});
