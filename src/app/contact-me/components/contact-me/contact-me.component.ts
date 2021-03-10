import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONTACT_ME_MODEL } from '../../models/contact-me.const';
import { HttpService } from '../../../services/http.service';
import { catchError, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'pmt-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  readonly CONTACT_ME = CONTACT_ME_MODEL;
  Header: string;
  isSending: boolean;
  contactMeForm: FormGroup;

  constructor(private _fb: FormBuilder, private _httpSvc: HttpService, private _snackbar: MatSnackBar) { }

    ngOnInit(): void {
        this.load();
        this.contactMeForm = this._fb.group({
          name: [null, Validators.required],
          phone: [null],
          email: [null],
          message: [null, Validators.required]
        })
    }
    load() {
        this.Header = 'Contact Me';
    }
    sendMessage() {
      this.isSending = true;
      const name = this.contactMeForm.get('name').value;
      const phone = this.contactMeForm.get('phone').value;
      const email = this.contactMeForm.get('email').value;
      const message = this.contactMeForm.get('message').value;
     
      this._httpSvc.sendEmail({ name, phone, email, message}).pipe(
        take(1),
        catchError(err => {
          this.isSending = false;
          this._snackbar.open('Error: Email failed to send', null, { duration: 2000});
          return of(null);
        })
      ).subscribe(isSuccess => {
        this.isSending = false;
        if (isSuccess) {
          this._snackbar.open('Successfully sent email', null, { duration: 2000});
        } else {
          this._snackbar.open('Error sending email', null, { duration: 2000});
        }
      });
    }
}
