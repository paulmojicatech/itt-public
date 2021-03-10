import { Component, OnInit } from '@angular/core';
import { ServiceType, TYPES_OF_THERAPY, CLINICAL_SUPERVISION } from 'src/app/home/model/home.const';
import { HomeService } from 'src/app/home/services/home.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'pmt-avaiable-services',
  templateUrl: './avaiable-services.component.html',
  styleUrls: ['./avaiable-services.component.scss'],
})
export class AvaiableServicesComponent {
  readonly THERAPY_TYPES = [
    ServiceType.CS,
    ServiceType.IMCAFT
  ];

  currentView: ServiceType = ServiceType.IMCAFT;
  
  readonly typesOfTherapy = TYPES_OF_THERAPY;
  readonly clinicalSupervision = CLINICAL_SUPERVISION;

  constructor(private _route: ActivatedRoute) {}
}
