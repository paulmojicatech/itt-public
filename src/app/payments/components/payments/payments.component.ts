import { Component, OnInit } from '@angular/core';

import { PAYMENTS_MODEL } from '../../models/payments.const';

@Component({
  selector: 'pmt-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  readonly PAYMENTS = PAYMENTS_MODEL;

  constructor() { }

  ngOnInit(): void {
  }

}
