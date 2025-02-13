import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpEnfant1Component } from './tp-enfant1.component';

describe('TpEnfant1Component', () => {
  let component: TpEnfant1Component;
  let fixture: ComponentFixture<TpEnfant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpEnfant1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpEnfant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
