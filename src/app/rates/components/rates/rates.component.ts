import { Component, OnInit } from '@angular/core';
import { RATES_MODEL } from '../../models/rates.const';
@Component({
  selector: 'pmt-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {


  readonly RATES = RATES_MODEL;

  constructor() { }

  ngOnInit(): void {
  }

}
