import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  showLoader: boolean = true;

  ngOnInit(): void {
    // Ocultar el loader después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
      this.showLoader = false;
    }, 7000);
  }
}
