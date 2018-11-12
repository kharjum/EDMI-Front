import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermeterListComponent } from './watermeter-list.component';

describe('WatermeterListComponent', () => {
  let component: WatermeterListComponent;
  let fixture: ComponentFixture<WatermeterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermeterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermeterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
