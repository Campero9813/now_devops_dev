import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  userData: any;
  datosCompra: any;
  infoTotal: any;
  
  constructor() { }

  private guardarTotal(): void {
    localStorage.setItem(this.infoTotal, this.infoTotal);
  }
}
