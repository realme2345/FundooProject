import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeanotesComponent } from './takeanotes.component';

describe('TakeanotesComponent', () => {
  let component: TakeanotesComponent;
  let fixture: ComponentFixture<TakeanotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeanotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeanotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
