import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaysCreateComponent } from './gateways-create.component';

describe('GatewaysCreateComponent', () => {
  let component: GatewaysCreateComponent;
  let fixture: ComponentFixture<GatewaysCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewaysCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaysCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
