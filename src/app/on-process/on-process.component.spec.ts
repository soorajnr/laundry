import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnProcessComponent } from './on-process.component';

describe('OnProcessComponent', () => {
  let component: OnProcessComponent;
  let fixture: ComponentFixture<OnProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
