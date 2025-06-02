import {
  Inject,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  Renderer2,
  HostListener,
} from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProdCompleto } from 'src/app/interfaces/prod-completo.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { productosMysql } from '../../interfaces/productos.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare const $: any;

interface FotoramaData {
  img: string;
  id?: string;
  // Otros campos que puedan existir en el objeto 'data'.
}

interface Fotorama {
  data: FotoramaData[];
  // Otros campos o métodos que puedan existir en el objeto 'fotorama'.
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements AfterViewInit {
  @ViewChild('videoRef') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('carouselRef') carouselElement!: ElementRef<HTMLElement>;
  showPlayButton = false;


  private initialized: boolean = false;

  animateTitle = false;
  animateImages = false;

  carrito: productosMysql[] = [];
  carritoVisible = false;

  limite: number = 73;
  txtAcortado: string = '';
  txtCompleto: string = '';

  public WhatsappUrl = "https://wa.me/5521878340?text=Bienvenido%20a%20NOW%20Products,%20estamos%20para%20ayudarte.%20Envía%20este%20mensaje%20para%20iniciar%20la%20conversación";

ngAfterViewInit(): void {
  const video = this.videoElement.nativeElement;
  const carousel = new (window as any).bootstrap.Carousel(this.carouselElement.nativeElement, {
    interval: false,  // Desactiva auto avance
    ride: false,
    pause: false,
    wrap: true
  });

  this.iniciarSecuenciaCarrusel(carousel, video);

  // Acorta texto después de 1.5s
  setTimeout(() => {
    this.acortarTexto();
  }, 1500);
}

toggleFlip(card: HTMLElement): void {
  if (window.innerWidth <= 768) {
    card.classList.toggle('flipped');
  }
}

iniciarSecuenciaCarrusel(carousel: any, video: HTMLVideoElement) {
  let currentIndex = 0;
  const slides = this.carouselElement.nativeElement.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  const avanzarSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    carousel.to(currentIndex);

    const currentSlide = slides[currentIndex];

    if (currentSlide.querySelector('video')) {
      video.currentTime = 0;
      video.play().catch(err => console.warn('Error al reproducir video:', err));

      video.onended = () => {
        avanzarSlide(); // Solo avanza cuando termina el video
      };
    } else {
      // Si es imagen, espera 10 segundos antes de avanzar
      setTimeout(() => {
        avanzarSlide();
      }, 10000);
    }
  };

  // Empieza con el primer slide
  const firstSlide = slides[currentIndex];
  if (firstSlide.querySelector('video')) {
    video.play().catch(err => console.warn('Error al reproducir video:', err));

    video.onended = () => {
      avanzarSlide();
    };
  } else {
    setTimeout(() => {
      avanzarSlide();
    }, 10000);
  }
}



  pasarSiguienteSlide(): void {
    const carousel = new (window as any).bootstrap.Carousel(this.carouselElement.nativeElement);
    carousel.next(); // pasa al siguiente slide
  }

  acortarTexto(): void {
  /* console.log("pruebas");
    console.log(this.txtCompleto); */
    if (this.txtCompleto.length > this.limite) {
      this.txtAcortado = this.txtCompleto.substring(0, this.limite) + '...';
    } else {
      this.txtAcortado = this.txtCompleto;
    }
  }

  constructor(
    private router: Router,
    public prodsNow: ProductosService,
    private carritoService: CartService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.carrito = this.carritoService.obtenerProductos();
  }

  /* Animaciones Inicio */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    if (!this.animateTitle && this.isScrolledIntoView('.titulo')) {
      this.animateTitle = true;
    }
    if (!this.animateImages && this.isScrolledIntoView('.imagenes')) {
      this.animateImages = true;
    }
  }

  isScrolledIntoView(selector: string): boolean {
    const element = document.querySelector(selector);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }
  /* End Animaciones inicio */
}
