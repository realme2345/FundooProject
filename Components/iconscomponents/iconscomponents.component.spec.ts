import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconscomponentsComponent } from './iconscomponents.component';

describe('IconscomponentsComponent', () => {
  let component: IconscomponentsComponent;
  let fixture: ComponentFixture<IconscomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconscomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconscomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
