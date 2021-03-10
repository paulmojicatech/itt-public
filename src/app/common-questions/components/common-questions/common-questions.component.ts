import { Component, OnInit } from '@angular/core';

import { COMMON_QUESTIONS_MODEL } from '../../models/common-questions.const';
import { ICommonQuestions } from '../../models/common-questions.interface';

@Component({
  selector: 'pmt-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.scss'],
})
export class CommonQuestionsComponent implements OnInit {
  readonly COMMON_QUESTIONS = COMMON_QUESTIONS_MODEL;
  text: string;
  forms: any[] = [];
  coordinateCare: any;
  pdfLink: any;
  Header: string;
  Sections: ICommonQuestions[] = [];
  ActiveSection: ICommonQuestions;

  constructor() {}

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.Header = 'Common Questions';
    this.Sections = this.COMMON_QUESTIONS.sections;
  }
  showDetails(s: ICommonQuestions) {
    let current: ICommonQuestions[] = this.Sections.filter((x) => x.IsActive);
    if (current && current.length) {
      current[0].IsActive = false;
    }
    s.IsActive = true;
  }
}
