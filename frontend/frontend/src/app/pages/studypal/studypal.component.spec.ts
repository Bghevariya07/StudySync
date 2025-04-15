import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudypalComponent } from './studypal.component';

describe('StudypalComponent', () => {
  let component: StudypalComponent;
  let fixture: ComponentFixture<StudypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudypalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
