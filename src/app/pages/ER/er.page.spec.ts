import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ER } from './er.page';

describe('QC', () => {
  let component: ER;
  let fixture: ComponentFixture<ER>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ER],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ER);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
