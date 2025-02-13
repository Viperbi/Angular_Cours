import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpParentComponent } from './tp-parent.component';

describe('TpParentComponent', () => {
  let component: TpParentComponent;
  let fixture: ComponentFixture<TpParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
