import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResumesComponent } from './create-resumes.component';

describe('CreateResumesComponent', () => {
  let component: CreateResumesComponent;
  let fixture: ComponentFixture<CreateResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
