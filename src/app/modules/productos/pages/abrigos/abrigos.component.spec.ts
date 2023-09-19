import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrigosComponent } from './abrigos.component';

describe('AbrigosComponent', () => {
  let component: AbrigosComponent;
  let fixture: ComponentFixture<AbrigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbrigosComponent]
    });
    fixture = TestBed.createComponent(AbrigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
