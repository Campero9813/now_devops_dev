import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { productosMysql } from 'src/app/interfaces/productos.interface';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css'],
})
export class WhatsappComponent {
  @Input() producto: productosMysql;
  redirectToWhats() {
    /* const whats = 'https://wa.me/525521878340'; */ // Enlace a chat whatsapp
    const whats = `https://api.whatsapp.com/send?phone=525521878340&text=Hola, me gustaría información sobre ${this.producto.nombre_producto} ${this.producto.presentacion}`;
    window.open(whats, '_blank');
  }
}
