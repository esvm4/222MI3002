import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrls: ['./binding-event.component.css'],
})
export class BindingEventComponent {
  onClick(event: any) {
    alert(event.pointerId);
  }
  onSubmit(value: string) {
    alert(value);
  }

  public a: any = '';
  public b: any = '';

  geta(event: any) {
    this.a = this.convertToNumber(event.target.value);
  }
  getb(event: any) {
    this.b = this.convertToNumber(event.target.value);
  }

  public sum: any = '';
  public substract: any = '';
  public multiply: any = '';
  public divide: any = '';

  convertToNumber(value: string) {
    return Number(value);
  }

  calcSum(a: number, b: number) {
    this.sum = a + b;
  }

  calcSubstract(a: number, b: number) {
    this.substract = a - b;
  }

  calcMultiply(a: number, b: number) {
    this.multiply = a * b;
  }

  calcDivide(a: number, b: number) {
    if (b == 0) {
      this.divide = "Can't divide by 0";
    } else {
      this.divide = a / b;
    }
  }

  clear() {
    this.sum = '';
    this.substract = '';
    this.multiply = '';
    this.divide = '';
    this.a = '';
    this.b = '';
  }
}
