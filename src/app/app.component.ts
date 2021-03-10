import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { StateService } from 'src/app/services/state.service';
import { AppState, HeaderImageType } from './models/state.interface';

@Component({
  selector: 'pmt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kirstin R. Abraham, LCSW';
  state$: Observable<AppState>;

  constructor (private _stateSvc: StateService, private _router: Router) { }

  ngOnInit(): void {
    this.state$ = this._stateSvc.state$;

  }

  navigate(route: string): void {
    switch (route) {
      case 'about':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.ABOUT_ME);
        this._router.navigate(['about']);
        break;
      case 'available-services':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.SERVICES);
        this._router.navigate(['available-services']);
        break;
      case 'helpful-forms':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.HELPFUL_FORMS);
        this._router.navigate(['helpful-forms']);
        break;
      case 'rates':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.RATES);
        this._router.navigate(['rates']);
        break;
      case 'payments':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.PAYMENTS);
        this._router.navigate(['payments']);
        break;
      case 'questions':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.COMMON_QUESTIONS);
        this._router.navigate(['questions']);
        break;
      case 'privacy':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.PRIVACY);
        this._router.navigate(['privacy']);
        break;
      case 'contact':
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.CONTACT_ME);
        this._router.navigate(['contact']);
        break;
      default:
        this._stateSvc.updateState('currentHeaderImage', HeaderImageType.HOME);
        this._router.navigate(['']);
        break;
    }
  }



}
