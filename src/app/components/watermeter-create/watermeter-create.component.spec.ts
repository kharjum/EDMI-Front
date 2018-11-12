import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermeterCreateComponent } from './watermeter-create.component';

describe('WatermeterCreateComponent', () => {
  let component: WatermeterCreateComponent;
  let fixture: ComponentFixture<WatermeterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermeterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermeterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
