import { Component, OnInit } from '@angular/core';
import { HELPFUL_FORMS } from '../models/helpful-forms.const';

@Component({
  selector: 'pmt-helpful-forms',
  templateUrl: './helpful-forms.component.html',
  styleUrls: ['./helpful-forms.component.scss']
})
export class HelpfulFormsComponent implements OnInit {


  readonly HELPFUL_FORMS_MODEL = HELPFUL_FORMS;
  constructor() { }

  ngOnInit(): void {
  }

}
