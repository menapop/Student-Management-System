import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailschildComponent } from './studentdetailschild.component';

describe('StudentdetailschildComponent', () => {
  let component: StudentdetailschildComponent;
  let fixture: ComponentFixture<StudentdetailschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
