import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { HeaderImageType } from 'src/app/models/state.interface';
import { ActivatedRoute } from '@angular/router';

import { ABOUT_ME } from '../../../models/about-me.const';

@Component({
  selector: 'pmt-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMeText = ABOUT_ME;

  constructor(private _stateSvc: StateService,private _route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

}
