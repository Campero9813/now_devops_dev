import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as bootstrap from 'bootstrap'; // Importa el módulo de Bootstrap

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css'],
})
export class HeaderNewComponent {
  isTransparent = false;
  isSolid = false;
  isScrolled = false;

  constructor(
    public InfoPaginaService: InfoPaginaService,
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  abrirCatalogo() {
    const pdfURL = 'assets/docs/catalogo.pdf'; // Ruta al archivo PDF en la carpeta assets/docs
    window.open(pdfURL, '_blank');
  }

  buscarProducto(termino: string) {
    /* console.log(termino); */
    this.toggleMenu();
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/buscar', termino]);
  }

  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  /*  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;


    const isClickInsideMenu =
      this.elementRef.nativeElement.contains(clickedElement);
    const isClickOnToggleButton =
      clickedElement.classList.contains('navbarToggler');

    if (!isClickInsideMenu && !isClickOnToggleButton) {
      this.closeMenu();
    }
  } */

  closeMenu() {
    this.menuVisible = false;
  }

  @ViewChild('navbarSupportedContent') navbarSupportedContent!: ElementRef;
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  cerrarMenuDesplegable() {
    if (this.navbarToggler.nativeElement.classList.contains('collapsed')) {
      return; // El menú ya está cerrado
    }
    this.navbarToggler.nativeElement.click(); // Simula un clic en el botón para cerrar el menú
  }

  // Listener para detectar clics en el documento
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      this.menuVisible &&
      !this.navbarToggler.nativeElement.contains(event.target as Node)
    ) {
      this.cerrarMenuDesplegable();
      this.menuVisible = false;
    }
  }

  // Método para abrir el menú y establecer menuVisible en true
  abrirMenu() {
    if (this.navbarToggler.nativeElement.classList.contains('collapsed')) {
      this.navbarToggler.nativeElement.click();
      this.menuVisible = true;
    }
  }
}
