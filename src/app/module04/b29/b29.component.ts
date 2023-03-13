import { Component } from '@angular/core';
import { DongABankService } from '../services/dong-abank.service';

@Component({
  selector: 'app-b29',
  templateUrl: './b29.component.html',
  styleUrls: ['./b29.component.css'],
})
export class B29Component {
  data: any;
  errMessage: string = '';
  constructor(_service: DongABankService) {
    _service.getDongABankData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
