import {Component, ElementRef, HostListener} from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import {InfoPaginaService} from 'src/app/services/info-pagina.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  mobileMenuOpen = false;
  dropdownOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openDropdown() {
    this.dropdownOpen = true;
  }

  closeDropdown() {
    if (!this.mobileMenuOpen) {
      this.dropdownOpen = false;
    }
  }

  // Solo cerrar el dropdown si no está en mobile
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideDropdown = target.closest('.dropdown-container') || target.closest('.mobile-dropdown');
    if (!clickedInsideDropdown && !this.mobileMenuOpen) {
      this.dropdownOpen = false;
    }
}
}
