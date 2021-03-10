import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  typesOfTherapy: any;
  clinicalSupervision: any;
  inHome: any;

  constructor(public homeService: HomeService, private _stateSvc: StateService) {
  }

  ngOnInit(): void {
    this.setCards();
  }

  setCards(): void {
    const cards = this.homeService.getCardText(false);
    this.typesOfTherapy = {
      header: cards.IMCaFT.header,
      description: `${cards.IMCaFT.description.substring(0,250)}...`
    }    
    this.clinicalSupervision = {
      header: cards.clinicalSupervision.header,
      description: `${cards.clinicalSupervision.text.substring(0, 250)}...`
    };
    this.inHome = {
      header: cards.inHome.header,
      description: `${cards.inHome.text.substring(0, 250)}...`,
    }
  }

}
