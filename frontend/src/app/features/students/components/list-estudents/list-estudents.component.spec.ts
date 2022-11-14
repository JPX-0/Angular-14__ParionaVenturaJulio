import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstudentsComponent } from './list-estudents.component';

describe('ListEstudentsComponent', () => {
  let component: ListEstudentsComponent;
  let fixture: ComponentFixture<ListEstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
