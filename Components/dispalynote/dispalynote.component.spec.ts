import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalynoteComponent } from './dispalynote.component';

describe('DispalynoteComponent', () => {
  let component: DispalynoteComponent;
  let fixture: ComponentFixture<DispalynoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispalynoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
