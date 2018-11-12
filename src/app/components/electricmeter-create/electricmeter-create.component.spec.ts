import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricmeterCreateComponent } from './electricmeter-create.component';

describe('ElectricmeterCreateComponent', () => {
  let component: ElectricmeterCreateComponent;
  let fixture: ComponentFixture<ElectricmeterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricmeterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricmeterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
