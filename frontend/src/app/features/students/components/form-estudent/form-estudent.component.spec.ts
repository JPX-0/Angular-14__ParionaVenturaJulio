import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudentComponent } from './form-estudent.component';

describe('FormEstudentComponent', () => {
  let component: FormEstudentComponent;
  let fixture: ComponentFixture<FormEstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
