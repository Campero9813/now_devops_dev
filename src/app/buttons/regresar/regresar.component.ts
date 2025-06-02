import { Component } from '@angular/core';

@Component({
  selector: 'app-regresar',
  templateUrl: './regresar.component.html',
  styleUrls: ['./regresar.component.css'],
})
export class RegresarComponent {
  goBack() {
    window.history.back();
  }
}
