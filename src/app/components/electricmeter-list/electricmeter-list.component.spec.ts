import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricmeterListComponent } from './electricmeter-list.component';

describe('ElectricmeterListComponent', () => {
  let component: ElectricmeterListComponent;
  let fixture: ComponentFixture<ElectricmeterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricmeterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricmeterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
