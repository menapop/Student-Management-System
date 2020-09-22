import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailsmassterComponent } from './studentdetailsmasster.component';

describe('StudentdetailsmassterComponent', () => {
  let component: StudentdetailsmassterComponent;
  let fixture: ComponentFixture<StudentdetailsmassterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailsmassterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailsmassterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
