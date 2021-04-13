import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramComponent } from './launch-program.component';

describe('LaunchProgramComponent', () => {
  let component: LaunchProgramComponent;
  let fixture: ComponentFixture<LaunchProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
