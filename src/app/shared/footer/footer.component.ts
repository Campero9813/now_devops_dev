import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  anio: number = new Date().getFullYear();
  constructor(public infoPaginaService: InfoPaginaService) {}

  redirectToWhats() {
    /* const whats = 'https://wa.me/525521878340'; */ // Enlace a chat whatsapp
    const whats = `https://api.whatsapp.com/send?phone=525521878340&text=Hola, me gustaría información sobre sus productos`;
    window.open(whats, '_blank');
  }
}
