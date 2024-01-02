import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivSelectComponent } from './viv-select.component';

describe('VivSelectComponent', () => {
  let component: VivSelectComponent;
  let fixture: ComponentFixture<VivSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VivSelectComponent]
    });
    fixture = TestBed.createComponent(VivSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
