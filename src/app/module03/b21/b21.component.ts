import { Component, OnInit } from '@angular/core';
import { CAccount } from '../interfaces/account';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b21',
  templateUrl: './b21.component.html',
  styleUrls: ['./b21.component.css'],
})
export class B21Component implements OnInit {
  account = new CAccount('', '');

  isVisible = false;
  isSaved = false;
  isEmailValid = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    window.localStorage.getItem('currentAccount');
  }

  validateEmail(event: any) {
    const email = event.target.value;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }

  onLogin() {
    this.isVisible = true;
    this._router.navigate(['/index03']);

    if (this.isSaved) {
      this.saveAccount();
    }
  }

  saveAccount() {
    window.localStorage.setItem('currentAccount', JSON.stringify(this.account));
  }
}
