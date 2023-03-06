import { Component } from '@angular/core';

@Component({
  selector: 'app-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css'],
})
export class QuadraticEquationComponent {
  public a: any = '';
  public b: any = '';
  public c: any = '';
  public result: string = '';

  findSolution() {
    const delta = this.b * this.b - 4 * this.a * this.c;
    if (delta < 0) {
      this.result = 'Vô nghiệm';
    } else if (delta == 0) {
      this.result = 'x1 = x2 = ' + -this.b / (2 * this.a);
    } else {
      this.result =
        'x1 = ' +
        (-this.b + Math.sqrt(delta)) / (2 * this.a) +
        ', x2 = ' +
        (-this.b - Math.sqrt(delta)) / (2 * this.a);
    }
  }

  reset() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.result = '';
  }
}
