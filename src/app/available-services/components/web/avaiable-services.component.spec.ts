import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaiableServicesComponent } from './avaiable-services.component';

describe('AvaiableServicesComponent', () => {
  let component: AvaiableServicesComponent;
  let fixture: ComponentFixture<AvaiableServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaiableServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaiableServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
