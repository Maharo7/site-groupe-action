import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriodiComponent } from './triodi.component';

describe('TriodiComponent', () => {
  let component: TriodiComponent;
  let fixture: ComponentFixture<TriodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
