import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakaComponent } from './maka.component';

describe('MakaComponent', () => {
  let component: MakaComponent;
  let fixture: ComponentFixture<MakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
