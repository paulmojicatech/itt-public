import { Injectable } from '@angular/core';
import { AppState, HeaderImageType } from 'src/app/models/state.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  readonly INITIAL_STATE: AppState = {
    currentHeaderImage: HeaderImageType.HOME
  };

  private _stateSubject$ = new BehaviorSubject<AppState>(this.INITIAL_STATE);
  state$: Observable<AppState> = this._stateSubject$.asObservable();

  constructor() { }

  initState(): void {
  
  }

  updateState(key: string, value: any): void {
    const currentState = this._stateSubject$.getValue();
    currentState[key] = value;
    this._stateSubject$.next(currentState);
  }

}
