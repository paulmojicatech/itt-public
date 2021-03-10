import { Component, OnInit } from '@angular/core';
import { PRIVACY_MODEL } from '../../models/privacy.const';
@Component({
  selector: 'pmt-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  readonly PRIVACY = PRIVACY_MODEL;

  constructor() { }

  ngOnInit(): void {
  }

}
