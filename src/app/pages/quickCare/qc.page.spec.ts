import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QC } from './qc.page';

describe('QC', () => {
  let component: QC;
  let fixture: ComponentFixture<QC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QC],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
