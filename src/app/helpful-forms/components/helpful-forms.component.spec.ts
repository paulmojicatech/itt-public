import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulFormsComponent } from './helpful-forms.component';

describe('HelpfulFormsComponent', () => {
  let component: HelpfulFormsComponent;
  let fixture: ComponentFixture<HelpfulFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpfulFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
