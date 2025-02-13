import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpEnfant2Component } from './tp-enfant2.component';

describe('TpEnfant2Component', () => {
  let component: TpEnfant2Component;
  let fixture: ComponentFixture<TpEnfant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpEnfant2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpEnfant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
